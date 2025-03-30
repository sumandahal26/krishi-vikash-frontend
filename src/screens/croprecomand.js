import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import apiService from '../services/apiservices';

const CropRecomand = ({ navigation }) => {
  const [crop, setCrop] = useState('');
  const [seedType, setSeedType] = useState('');
  const [season, setSeason] = useState('');
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);
  const [displayCrops, setDisplayCrops] = useState([]);
  const [filterCrops, setFilterCrops] = useState([]);
  
  // Fertilizer states
  const [showFertilizerDropdown, setShowFertilizerDropdown] = useState(false);
  const [selectedFertilizers, setSelectedFertilizers] = useState([]);
  const [nitrogenRange, setNitrogenRange] = useState('');
  const [phosphorusRange, setPhosphorusRange] = useState('');
  const [potassiumRange, setPotassiumRange] = useState('');
  const [searchText, setSearchText] = useState('');
  
  const fertilizerOptions = [
    { id: 'nitrogen', name: 'Nitrogen' },
    { id: 'phosphorus', name: 'Phosphorus' },
    { id: 'potassium', name: 'Potassium' }
  ];

  const percentageRanges = [
    '1-10%',
    '10-20%',
    '20-30%',
    '30-40%',
    '40-50%',
    '50-60%',
    '60-70%',
    '70-80%',
    '80-90%',
    '90-100%'
  ];

  useEffect(() => {
    if (filterCrops.length > 0) {
      console.log("Navigating with crop:", filterCrops[0]);
      navigation.navigate("CropDetails", { crop: filterCrops })
    }
  }, [filterCrops]);

  const getdata = async () => {
    try {
      const data = await apiService.getData('/crops/get-crops');
      console.log("API Data:", data);
  
      if (data && data.crop) {
        setDisplayCrops(data.crop);
        const filteredCrops = data.crop.filter(
          (crop) => crop.type === seedType && crop.season === season
        );
        console.log("Filtered Crops:", filteredCrops);
        setFilterCrops(filteredCrops);
      } else {
        Alert.alert("Error", "No crop data found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert("Error", "Failed to fetch crop data.");
    }
  };

  const toggleFertilizerSelection = (fertilizer) => {
    if (selectedFertilizers.includes(fertilizer.id)) {
      setSelectedFertilizers(selectedFertilizers.filter(item => item !== fertilizer.id));
      // Clear the range when deselecting a fertilizer
      if (fertilizer.id === 'nitrogen') setNitrogenRange('');
      if (fertilizer.id === 'phosphorus') setPhosphorusRange('');
      if (fertilizer.id === 'potassium') setPotassiumRange('');
    } else {
      setSelectedFertilizers([...selectedFertilizers, fertilizer.id]);
    }
  };

  const filteredFertilizerOptions = fertilizerOptions.filter(option =>
    option.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const saveData = () => {
    if (!crop || !seedType || !season) {
      Alert.alert("Error", "Please fill all required fields before proceeding.");
      return;
    }
    
    if (selectedFertilizers.length === 0) {
      Alert.alert("Error", "Please select at least one fertilizer type.");
      return;
    }
    
    // Validate percentage ranges
    if (selectedFertilizers.includes('nitrogen') && !nitrogenRange) {
      Alert.alert("Error", "Please select nitrogen percentage range.");
      return;
    }
    
    if (selectedFertilizers.includes('phosphorus') && !phosphorusRange) {
      Alert.alert("Error", "Please select phosphorus percentage range.");
      return;
    }
    
    if (selectedFertilizers.includes('potassium') && !potassiumRange) {
      Alert.alert("Error", "Please select potassium percentage range.");
      return;
    }
    
    const fertilizerData = {
      nitrogen: selectedFertilizers.includes('nitrogen') ? nitrogenRange : null,
      phosphorus: selectedFertilizers.includes('phosphorus') ? phosphorusRange : null,
      potassium: selectedFertilizers.includes('potassium') ? potassiumRange : null
    };
    
    console.log({ crop, seedType, fertilizer: fertilizerData, season });
    Alert.alert("Success", "Data saved successfully!");
    navigation.navigate("PostHarvestData");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Get Crop Recommendation</Text>
        <TouchableOpacity>
          <MaterialIcons name="help-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Form */}
      <ScrollView style={styles.formContainer}>
        {/* Select Seed Type */}
        <Text style={styles.label}>Select Seed Type</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={seedType} onValueChange={(itemValue) => setSeedType(itemValue)}>
            <Picker.Item label="Choose seed type..." value="" />
            <Picker.Item label="Cereal" value="Cereal" />
            <Picker.Item label="Poppy" value="Poppy" />
          </Picker>
        </View>

        {/* Fertilizer Used */}
        <Text style={styles.label}>Fertilizer Used</Text>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={() => setShowFertilizerDropdown(!showFertilizerDropdown)}
        >
          <Text style={{ padding: 10 }}>
            {selectedFertilizers.length > 0 
              ? selectedFertilizers.map(id => 
                  fertilizerOptions.find(f => f.id === id).name).join(', ')
              : "Select fertilizers..."}
          </Text>
        </TouchableOpacity>
        
        {showFertilizerDropdown && (
          <View style={styles.dropdown}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search fertilizers..."
              value={searchText}
              onChangeText={setSearchText}
            />
            {filteredFertilizerOptions.map((fertilizer) => (
              <TouchableOpacity
                key={fertilizer.id}
                style={[
                  styles.fertilizerOption,
                  selectedFertilizers.includes(fertilizer.id) && styles.selectedFertilizer
                ]}
                onPress={() => toggleFertilizerSelection(fertilizer)}
              >
                <Text>{fertilizer.name}</Text>
                {selectedFertilizers.includes(fertilizer.id) && (
                  <MaterialIcons name="check" size={20} color="green" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        )}
        
        {/* Fertilizer Percentage Range Dropdowns */}
        {selectedFertilizers.includes('nitrogen') && (
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageLabel}>Nitrogen Percentage Range</Text>
            <View style={styles.rangePickerContainer}>
              <Picker
                selectedValue={nitrogenRange}
                onValueChange={(itemValue) => setNitrogenRange(itemValue)}
              >
                <Picker.Item label="Select range..." value="" />
                {percentageRanges.map((range) => (
                  <Picker.Item key={`nitrogen-${range}`} label={range} value={range} />
                ))}
              </Picker>
            </View>
          </View>
        )}
        
        {selectedFertilizers.includes('phosphorus') && (
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageLabel}>Phosphorus Percentage Range</Text>
            <View style={styles.rangePickerContainer}>
              <Picker
                selectedValue={phosphorusRange}
                onValueChange={(itemValue) => setPhosphorusRange(itemValue)}
              >
                <Picker.Item label="Select range..." value="" />
                {percentageRanges.map((range) => (
                  <Picker.Item key={`phosphorus-${range}`} label={range} value={range} />
                ))}
              </Picker>
            </View>
          </View>
        )}
        
        {selectedFertilizers.includes('potassium') && (
          <View style={styles.percentageContainer}>
            <Text style={styles.percentageLabel}>Potassium Percentage Range</Text>
            <View style={styles.rangePickerContainer}>
              <Picker
                selectedValue={potassiumRange}
                onValueChange={(itemValue) => setPotassiumRange(itemValue)}
              >
                <Picker.Item label="Select range..." value="" />
                {percentageRanges.map((range) => (
                  <Picker.Item key={`potassium-${range}`} label={range} value={range} />
                ))}
              </Picker>
            </View>
          </View>
        )}

        {/* Season Dropdown */}
        <Text style={styles.label}>Select Season</Text>
        <TouchableOpacity
          style={styles.pickerContainer}
          onPress={() => setShowSeasonDropdown(!showSeasonDropdown)}
        >
          <Text style={{ padding: 10 }}>{season || "Choose season..."}</Text>
        </TouchableOpacity>
        {showSeasonDropdown && (
          <View style={styles.dropdown}>
            <Picker selectedValue={season} onValueChange={(itemValue) => setSeason(itemValue)}>
              <Picker.Item label="Winter" value="Winter" />
              <Picker.Item label="Summer" value="Summer" />
              <Picker.Item label="Monsoon" value="Monsoon" />
            </Picker>
          </View>
        )}

        {/* Save & Continue Button */}
        <TouchableOpacity
          style={styles.saveButton}
          onPress={getdata}
        >
          <Text style={styles.saveButtonText}>Get data</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D8C4B' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2D8C4B',
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  formContainer: {
    backgroundColor: '#F5F5F5',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    padding: 20,
  },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  pickerContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    justifyContent: 'center',
    height: 50,
  },
  rangePickerContainer: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  fertilizerOption: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedFertilizer: {
    backgroundColor: '#e6f7ee',
  },
  percentageContainer: {
    marginBottom: 15,
  },
  percentageLabel: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#2D8C4B',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default CropRecomand;
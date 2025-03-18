import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import apiService from '../services/apiservices';

const CropRecomand = ({ navigation }) => {
  const [crop, setCrop] = useState('');
  const [seedType, setSeedType] = useState('');
  const [fertilizer, setFertilizer] = useState('');
  const [season, setSeason] = useState('');
  const [showSeasonDropdown, setShowSeasonDropdown] = useState(false);
  const [displayCrops, setDisplayCrops] = useState([]);
  const [filterCrops, setFilterCrops] = useState([]);

  useEffect(() => {
    if (filterCrops.length > 0) {
      console.log("Navigating with crop:", filterCrops[0]); // Log the crop object
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
  const saveData = () => {
    if (!crop || !seedType || !fertilizer || !season) {
      Alert.alert("Error", "Please fill all fields before proceeding.");
      return;
    }
    console.log({ crop, seedType, fertilizer, season });
    Alert.alert("Success", "Data saved successfully!");
    navigation.navigate("PostHarvestData"); // Adjust to actual next screen
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
        <TextInput
          style={styles.input}
          placeholder="Enter fertilizer used..."
          value={fertilizer}
          onChangeText={setFertilizer}
        />

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
          onPress={ getdata}
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
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  dropdown: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 15,
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
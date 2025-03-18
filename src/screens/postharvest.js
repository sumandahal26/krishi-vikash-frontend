import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import apiService from '../services/apiservices';
import PreharvestDetails from '../components/showpreharvestdata';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import PostHarvest from '../components/showpostharvestdata';
import CustomBottomNav from '../components/bottomTab';
const postharvest = ({ navigation }) => {
  const [crop, setCrop] = useState('');

const [displayCrop, setDisplayCrops] = useState()
  // Save Data and Navigate

  const getdata = async () => {
    try {
      const data = await apiService.getData('/harvest/post-harvestProcessing', { cropName: crop });
      console.log("API Data:", data);
  
      if (data && data.
        processingData
        
      ) {
        setDisplayCrops(data.
          processingData
          
        );
        
       
      } else {
        Alert.alert("Error", "No crop data found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert("Error", "Failed to fetch crop data.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post-Harvest Data</Text>
        <TouchableOpacity>
          <MaterialIcons name="help-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Scrollable Form */}
      <ScrollView style={styles.formContainer}>
        {/* Select Crop */}
        <Text style={styles.label}>Select Crop</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={crop} onValueChange={(itemValue) => setCrop(itemValue)}>
            <Picker.Item label="Choose a crop..." value="" />
            <Picker.Item label="Rice" value="Rice" />
            <Picker.Item label="Wheat" value="Wheat" />
            <Picker.Item label="Corn" value="Corn" />
          </Picker>
        </View>

        {/* Select Seed Type */}
      
        {/* Save & Continue Button */}
        <TouchableOpacity style={styles.saveButton} onPress={getdata}>
          <Text style={styles.saveButtonText}>Get data</Text>
        </TouchableOpacity>
        {displayCrop && <PostHarvest crop={displayCrop} />}
      </ScrollView>
      <View style={styles.bottomNav}>
        <CustomBottomNav />
      </View>
    

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
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
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

export default postharvest;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const preharvest = ({ navigation }) => {
  const [crop, setCrop] = useState('');
  const [seedType, setSeedType] = useState('');
  const [fertilizer, setFertilizer] = useState('');
  const [financeSource, setFinanceSource] = useState('');

  // Dynamic insights based on crop selection
  const getInsights = () => {
    switch (crop) {
      case "Rice": return "Proper irrigation is key for rice farming.";
      case "Wheat": return "Wheat needs well-drained soil and nitrogen-rich fertilizers.";
      case "Corn": return "Corn benefits from high phosphorus fertilizers.";
      default: return "Select a crop to see insights.";
    }
  };

  // Save Data and Navigate
  const saveData = () => {
    if (!crop || !seedType || !fertilizer || !financeSource) {
      Alert.alert("Error", "Please fill all fields before proceeding.");
      return;
    }
    console.log({ crop, seedType, fertilizer, financeSource });
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
        <Text style={styles.headerTitle}>Pre-Harvest Data</Text>
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
        <Text style={styles.label}>Select Seed Type</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={seedType} onValueChange={(itemValue) => setSeedType(itemValue)}>
            <Picker.Item label="Choose seed type..." value="" />
            <Picker.Item label="Hybrid" value="Hybrid" />
            <Picker.Item label="Organic" value="Organic" />
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

        {/* Finance Source */}
        <Text style={styles.label}>Finance Source</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={financeSource} onValueChange={(itemValue) => setFinanceSource(itemValue)}>
            <Picker.Item label="Select finance source..." value="" />
            <Picker.Item label="Personal" value="Personal" />
            <Picker.Item label="Loan" value="Loan" />
            <Picker.Item label="Government Support" value="Government Support" />
          </Picker>
        </View>

        {/* Insights Section */}
        <View style={styles.insightBox}>
          <Text style={styles.insightTitle}>Best Farming Practices</Text>
          <Text style={styles.insightText}>{getInsights()}</Text>
        </View>

        {/* Save & Continue Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveData}>
          <Text style={styles.saveButtonText}>Save & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D8C4B' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  formContainer: { backgroundColor: '#F5F5F5', borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  pickerContainer: { backgroundColor: 'white', borderRadius: 5, marginBottom: 15, paddingHorizontal: 10 },
  input: { backgroundColor: 'white', padding: 10, borderRadius: 5, marginBottom: 15 },
  insightBox: { backgroundColor: '#FFF', padding: 15, borderRadius: 5, marginBottom: 10 },
  insightTitle: { fontSize: 16, fontWeight: 'bold' },
  insightText: { fontSize: 14, color: '#555' },
  saveButton: { backgroundColor: '#2D8C4B', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  saveButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' }
});

export default preharvest;


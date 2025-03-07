import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const postharvest = ({ navigation }) => {
  const [crop, setCrop] = useState('');
  const [storage, setStorage] = useState('');
  const [price, setPrice] = useState('');
  const [notes, setNotes] = useState('');
  const [processing, setProcessing] = useState({
    sorting: false,
    drying: false,
    packaging: false,
  });

  const saveData = () => {
    console.log({ crop, storage, price, processing, notes });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Post-Harvest Data</Text>
        <TouchableOpacity>
          <Text style={styles.headerIcon}>❓</Text>
        </TouchableOpacity>
      </View>

      {/* Form Section */}
      <ScrollView style={styles.formContainer}>
        {/* Crop Selection */}
        <Text style={styles.label}>Select Crop</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g., Rice, Wheat, Corn"
          value={crop}
          onChangeText={setCrop}
        />

        {/* Storage Method */}
        <Text style={styles.label}>Storage Method</Text>
        <TextInput
          style={styles.input}
          placeholder="E.g., Cold Storage, Warehouse"
          value={storage}
          onChangeText={setStorage}
        />

        {/* Selling Price */}
        <Text style={styles.label}>Selling Price (per kg)</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price in ₹"
          keyboardType="numeric"
          value={price}
          onChangeText={setPrice}
        />

        {/* Processing Requirements */}
        <Text style={styles.label}>Processing Requirements</Text>
        {['Sorting', 'Drying', 'Packaging'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.checkboxContainer}
            onPress={() =>
              setProcessing((prev) => ({ ...prev, [item.toLowerCase()]: !prev[item.toLowerCase()] }))
            }
          >
            <Text style={styles.checkboxText}>
              {processing[item.toLowerCase()] ? '✅' : '⬜'} {item}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Additional Notes */}
        <Text style={styles.label}>Additional Notes</Text>
        <TextInput
          style={styles.textArea}
          placeholder="Enter any additional details..."
          multiline
          value={notes}
          onChangeText={setNotes}
        />

        {/* Insights Section */}
        <View style={styles.insightsContainer}>
          <Text style={styles.insightTitle}>Best Storage Practices</Text>
          <Text>- Keep grains in dry, ventilated spaces.</Text>
          <Text>- Avoid direct sunlight exposure.</Text>

          <Text style={styles.insightTitle}>Market Demand Status</Text>
          <Text>📈 High Demand</Text>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveData}>
          <Text style={styles.saveButtonText}>Save & Continue</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E824C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  headerIcon: { fontSize: 24, color: 'white' },
  formContainer: { backgroundColor: 'white', margin: 15, padding: 15, borderRadius: 10 },
  label: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 5, marginTop: 5 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  checkboxText: { fontSize: 16 },
  textArea: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 5, height: 80, textAlignVertical: 'top', marginTop: 5 },
  insightsContainer: { marginTop: 15, backgroundColor: '#E8F5E9', padding: 10, borderRadius: 5 },
  insightTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  saveButton: { backgroundColor: '#1E824C', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 15 },
  saveButtonText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
});

export default postharvest;

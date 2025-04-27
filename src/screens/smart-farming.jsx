import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import PumpStatus from '../components/smart-farming/pumpinfo';

const PumpInfoScreen = () => {
  const [formData, setFormData] = useState({
    soil_moisture: '45',
    rainfall: '30',
    humidity: '60',
    temperature: '25',
    ph: '7'
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Convert string values to numbers
      const payload = {
        soil_moisture: parseFloat(formData.soil_moisture),
        rainfall: parseFloat(formData.rainfall),
        humidity: parseFloat(formData.humidity),
        temperature: parseFloat(formData.temperature),
        ph: parseFloat(formData.ph)
      };

      const response = await fetch('http://10.0.2.2:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Pump Control System</Text>
      
      <View style={styles.formContainer}>
        <Text style={styles.label}>Soil Moisture (%)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.soil_moisture}
          onChangeText={(text) => handleInputChange('soil_moisture', text)}
          placeholder="Enter soil moisture"
        />

        <Text style={styles.label}>Rainfall (mm)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.rainfall}
          onChangeText={(text) => handleInputChange('rainfall', text)}
          placeholder="Enter rainfall"
        />

        <Text style={styles.label}>Humidity (%)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.humidity}
          onChangeText={(text) => handleInputChange('humidity', text)}
          placeholder="Enter humidity"
        />

        <Text style={styles.label}>Temperature (°C)</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.temperature}
          onChangeText={(text) => handleInputChange('temperature', text)}
          placeholder="Enter temperature"
        />

        <Text style={styles.label}>pH Level</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={formData.ph}
          onChangeText={(text) => handleInputChange('ph', text)}
          placeholder="Enter pH level"
        />

        <TouchableOpacity 
          style={styles.button} 
          onPress={handleSubmit}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Check Pump Status</Text>
          )}
        </TouchableOpacity>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      {result && (
        <PumpStatus result={result}/>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  
  errorContainer: {
    backgroundColor: '#fdecea',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    borderLeftWidth: 5,
    borderLeftColor: '#f44336',
  },
  errorText: {
    color: '#f44336',
    fontSize: 16,
  },
});

export default PumpInfoScreen;
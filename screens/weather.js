import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const weather = ({ navigation }) => {
  const [weather, setWeather] = useState({
    temperature: '27°C',
    condition: 'Sunny',
    humidity: '65%',
    windSpeed: '10 km/h',
    rainChance: '20%',
    location: "Farmer's Region",
    alerts: [
      { id: 1, text: 'Heavy Rain Expected Tomorrow', type: 'danger' },
      { id: 2, text: 'Ideal Sowing Time for Rice', type: 'success' },
    ],
  });

  const refreshWeather = () => {
    // TODO: Integrate with a real weather API
    console.log('Refreshing weather data...');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weather Updates</Text>
        <TouchableOpacity onPress={refreshWeather}>
          <MaterialIcons name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Weather Display */}
      <View style={styles.weatherCard}>
        <FontAwesome5 name="sun" size={50} color="yellow" />
        <Text style={styles.tempText}>{weather.temperature}</Text>
        <Text style={styles.locationText}>{weather.location}</Text>
        <View style={styles.weatherDetails}>
          <Text>🌫️ Humidity: {weather.humidity}</Text>
          <Text>💨 Wind Speed: {weather.windSpeed}</Text>
          <Text>🌧️ Rain Probability: {weather.rainChance}</Text>
        </View>
      </View>

      {/* Weather Alerts */}
      <ScrollView style={styles.alertsContainer}>
        {weather.alerts.map((alert) => (
          <View
            key={alert.id}
            style={[styles.alertBox, alert.type === 'danger' ? styles.alertDanger : styles.alertSuccess]}>
            <Text style={styles.alertText}>{alert.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Action Button */}
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Get More Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#3B99FC' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  weatherCard: { backgroundColor: 'white', margin: 20, padding: 20, borderRadius: 10, alignItems: 'center' },
  tempText: { fontSize: 30, fontWeight: 'bold', color: '#333' },
  locationText: { fontSize: 16, color: '#666' },
  weatherDetails: { marginTop: 10 },
  alertsContainer: { marginHorizontal: 20, marginTop: 10 },
  alertBox: { padding: 15, borderRadius: 5, marginBottom: 10 },
  alertDanger: { backgroundColor: '#FF4C4C' },
  alertSuccess: { backgroundColor: '#4CAF50' },
  alertText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
  detailsButton: { backgroundColor: 'white', padding: 15, margin: 20, borderRadius: 5, alignItems: 'center' },
  detailsButtonText: { fontSize: 16, fontWeight: 'bold', color: '#3B99FC' },
});

export default weather;

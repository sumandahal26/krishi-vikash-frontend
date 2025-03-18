import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

const CropDetails = ({ crop }) => {
 console.log("crop",crop) // Get data from navigation

  const [showCropDetails, setShowCropDetails] = useState(false);
  const [showFertilizerDetails, setShowFertilizerDetails] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Crop Name */}
      <Text style={styles.header}>{crop[0]?.name}</Text>

      {/* Toggle Crop Details */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowCropDetails(!showCropDetails)}
      >
        <Text style={styles.sectionTitle}>🌾 Crop Details</Text>
        <Text style={styles.arrow}>{showCropDetails ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {showCropDetails && (
        <View style={styles.card}>
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.value}>{crop[0]?.crop.type}</Text>

          <Text style={styles.label}>Season:</Text>
          <Text style={styles.value}>{crop[0]?.season}</Text>

          <Text style={styles.label}>Soil Type:</Text>
          <Text style={styles.value}>{crop[0]?.soil_type}</Text>

          <Text style={styles.label}>Temperature Range:</Text>
          <Text style={styles.value}>{crop[0]?.temperature_range}</Text>

          <Text style={styles.label}>Water Requirement:</Text>
          <Text style={styles.value}>{crop[0]?.water_requirement} mm</Text>

          <Text style={styles.label}>Market Demand:</Text>
          <Text style={styles.value}>{crop[0]?.market_demand}</Text>
        </View>
      )}

      {/* Toggle Fertilizer Details */}
      <TouchableOpacity
        style={styles.toggleButton}
        onPress={() => setShowFertilizerDetails(!showFertilizerDetails)}
      >
        <Text style={styles.sectionTitle}>🧪 Fertilizer Details</Text>
        <Text style={styles.arrow}>{showFertilizerDetails ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {showFertilizerDetails && (
        <View style={styles.card}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{crop[0].fertilizer.name}</Text>

          <Text style={styles.label}>Type:</Text>
          <Text style={styles.value}>{crop[0].fertilizer.type}</Text>

          <Text style={styles.label}>Nutrients:</Text>
          <Text style={styles.value}>{crop[0].fertilizer.nutrients}</Text>

          <Text style={styles.label}>Source:</Text>
          <Text style={styles.value}>{crop[0].fertilizer.source}</Text>

          <Text style={styles.label}>Usage Guidelines:</Text>
          <Text style={styles.value}>{crop[0].fertilizer.usage_guidelines}</Text>
        </View>
      )}

      {/* Other Details */}
      <View style={styles.card}>
        <Text style={styles.label}>🌱 Seed Quality:</Text>
        <Text style={styles.value}>{crop[0]?.seed_quality}</Text>

        <Text style={styles.label}>🐛 Pest Control Measures:</Text>
        <Text style={styles.value}>{crop[0]?.pest_control_measures}</Text>

        <Text style={styles.label}>🏦 Finance Source:</Text>
        <Text style={styles.value}>{crop[0].finance_source}</Text>

        <Text style={styles.label}>📜 Insurance Provider:</Text>
        <Text style={styles.value}>{crop[0].insurance_provider}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
    marginBottom: 10,
  },
  toggleButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "green",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  arrow: {
    fontSize: 18,
    color: "green",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "green",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
    marginTop: 5,
  },
  value: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
});

export default CropDetails;

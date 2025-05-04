import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";

const links = {
  market: [
    { name: "AgriMarket", url: "https://agrimarket.gov.in" },
    { name: "eNAM", url: "https://enam.gov.in" },
    { name: "Krishi Market", url: "https://krishimarket.in" }
  ],
  finance: [
    { name: "NABARD", url: "https://nabard.org" },
    { name: "AgriFinance", url: "https://agrifinance.in" },
    { name: "PM Kisan", url: "https://pmkisan.gov.in" }
  ],
  insurance: [
    { name: "PMFBY", url: "https://pmfby.gov.in" },
    { name: "Agriculture Insurance Co.", url: "https://aicofindia.com" },
    { name: "State Crop Insurance", url: "https://statecropinsurance.com" }
  ]
};

const CropDetails = ({ crop }) => {
  const [showCropDetails, setShowCropDetails] = useState(false);
  const {navigate} = useNavigation()
  const [showFertilizerDetails, setShowFertilizerDetails] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentLinks, setCurrentLinks] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const openLinkModal = (linkType) => {
    setCurrentLinks(links[linkType]);
    setModalTitle(
      linkType === "market" ? "Market Resources" : 
      linkType === "finance" ? "Finance Sources" : "Insurance Providers"
    );
    setModalVisible(true);
  };

  const handleLinkPress = (url) => {
    setModalVisible(false);
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>{crop[0]?.name}</Text>

      <TouchableOpacity style={styles.toggleButton} onPress={() => setShowCropDetails(!showCropDetails)}>
        <Text style={styles.sectionTitle}>🌾 Crop Details</Text>
        <Text style={styles.arrow}>{showCropDetails ? "▲" : "▼"}</Text>
      </TouchableOpacity>

      {showCropDetails && (
        <View style={styles.card}>
          <Text style={styles.label}>Type:</Text>
          <Text style={styles.value}>{crop[0]?.crop.type}</Text>

          <Text style={styles.label}>Season:</Text>
          <Text style={styles.value}>{crop[0]?.crop.season}</Text>

          <Text style={styles.label}>Soil Type:</Text>
          <Text style={styles.value}>{crop[0]?.crop.soil_type}</Text>

          <Text style={styles.label}>Temperature Range:</Text>
          <Text style={styles.value}>{crop[0]?.crop.temperature_range}</Text>

          <Text style={styles.label}>Water Requirement:</Text>
          <Text style={styles.value}>{crop[0]?.crop.water_requirement} mm</Text>

          <Text style={styles.label}>Market Demand:</Text>
          <TouchableOpacity onPress={() => openLinkModal("market")}>
            <Text style={[styles.value, styles.linkText]}>View Market Resources</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.toggleButton} onPress={() => setShowFertilizerDetails(!showFertilizerDetails)}>
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
          <Text style={styles.value} onPress={()=>navigate("Fertilizers")}>{crop[0].fertilizer.source}</Text>

          <Text style={styles.label}>Usage Guidelines:</Text>
          <Text style={styles.value}>{crop[0].fertilizer.usage_guidelines}</Text>
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.label}>🌱 Seed Quality:</Text>
        <Text style={styles.value}>{crop[0]?.seed_quality}</Text>

        <Text style={styles.label}>🐛 Pest Control Measures:</Text>
        <Text style={styles.value}>{crop[0]?.pest_control_measures}</Text>

        <Text style={styles.label}>🏦 Finance Source:</Text>
        <TouchableOpacity onPress={() => navigate("LoanProvider")}>
          <Text style={[styles.value, styles.linkText]}>View Finance Options</Text>
        </TouchableOpacity>

        <Text style={styles.label}>📜 Insurance Provider:</Text>
        <TouchableOpacity onPress={() => navigate("InsurenceProvider")}>
          <Text style={[styles.value, styles.linkText]}>View Insurance Options</Text>
        </TouchableOpacity>
      </View>

      {/* Resource Links Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{modalTitle}</Text>
            {currentLinks.map((link, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.modalButton}
                onPress={() => handleLinkPress(link.url)}
              >
                <Text style={styles.modalButtonText}>{link.name}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  linkText: {
    color: "blue",
    textDecorationLine: "underline",
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "green",
  },
  modalButton: {
    backgroundColor: "#e8f5e9",
    padding: 12,
    borderRadius: 5,
    width: "100%",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "green",
  },
  modalButtonText: {
    fontSize: 16,
    color: "green",
    textAlign: "center",
  },
  closeButton: {
    marginTop: 15,
    padding: 10,
    backgroundColor: "green",
    borderRadius: 5,
    width: "100%",
  },
  closeButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CropDetails;
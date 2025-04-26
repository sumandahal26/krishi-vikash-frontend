import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const marketingLinks = [
  { name: "AgriMarket", url: "https://agrimarket.gov.in" },
  { name: "eNAM", url: "https://enam.gov.in" },
  { name: "Krishi Market", url: "https://krishimarket.in" },
  { name: "Mandi Rates", url: "https://agmarknet.gov.in" },
  { name: "Export Portal", url: "https://apeda.gov.in" }
];

const subsidyLinks = [
  { name: "PM-KISAN Scheme", url: "https://pmkisan.gov.in" },
  { name: "NABARD Subsidies", url: "https://nabard.org" },
  { name: "State Agriculture Portal", url: "https://stateagriportal.gov.in" },
  { name: "Soil Health Card", url: "https://soilhealth.dac.gov.in" },
  { name: "KCC Scheme", url: "https://kcc.gov.in" }
];

const PostHarvest = ({ crop }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(''); // 'marketing' or 'subsidy'
  const [modalTitle, setModalTitle] = useState('');
  const [modalContent, setModalContent] = useState('');
  const {navigate}= useNavigation()

  if (!crop) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Crop Data Available</Text>
      </View>
    );
  }

  const openModal = (type) => {
    setModalType(type);
    if (type === 'marketing') {
      setModalTitle("Marketing Resources");
      setModalContent(crop[0]?.marketing || "No marketing information available");
      setModalVisible(true);
    } else if (type === 'subsidy') {
      setModalTitle("Subsidy Providers");
      setModalContent(crop[0]?.subsidy_provider || "No subsidy information available");
      setModalVisible(true);
    }
  };

  const handleLinkPress = (url) => {
    setModalVisible(false);
    Linking.openURL(url);
  };

  const getLinks = () => {
    return modalType === 'marketing' ? marketingLinks : subsidyLinks;
  };

  return (
    <View style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.card}>
          <Text style={styles.title}>{crop[0]?.name} Details</Text>

          {/* Storage Guidelines */}
          <Text style={styles.label}>🌱 Storage Guidelines:</Text>
          <Text style={styles.value}>{crop[0]?.storage_guidelines || "N/A"}</Text>

          {/* Subsidy Provider */}
          <Text style={styles.label}>🌾 Subsidy Provider:</Text>
          <TouchableOpacity onPress={() => navigate("SubsidyProvider")}>
            <Text style={[styles.value, styles.linkText]}>{crop[0]?.subsidy_provider || "N/A"}</Text>
          </TouchableOpacity>

          {/* Processing Facilities */}
          <Text style={styles.label}>🧪 Processing Facilities:</Text>
          <Text style={styles.value}>{crop[0]?.processing_facilities || "N/A"}</Text>

          {/* Marketing Information */}
          <TouchableOpacity 
            style={styles.marketingButton}
            onPress={() => openModal('marketing')}
          >
            <Text style={styles.buttonText}>📢 Marketing Information</Text>
          </TouchableOpacity>
          <Text style={[styles.value, { marginBottom: 20 }]}>{crop[0]?.marketing || "Data not available"}</Text>

          {/* Pricing Information with extra bottom padding */}
          <Text style={styles.label}>💰 Pricing:</Text>
          <Text style={[styles.value, { marginBottom: 50 }]}>
            {crop[0]?.pricing ? `₹${crop[0]?.pricing} per unit` : "Data not available"}
          </Text>
        </View>
      </ScrollView>

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
            <Text style={styles.modalSubtitle}>{modalContent}</Text>
            
            {getLinks().map((link, index) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F5F5', 
    paddingHorizontal: 20,
    paddingTop: 20
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding to ensure content clears bottom nav
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#2D8C4B', 
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20, // Added margin at bottom
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333', 
    marginTop: 10,
    marginBottom: 5
  },
  value: { 
    fontSize: 14, 
    color: '#666', 
    marginBottom: 15,
    lineHeight: 20 // Better text spacing
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  marketingButton: {
    backgroundColor: '#4A6DA7',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 15
  },
  buttonText: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4A6DA7',
    textAlign: 'center'
  },
  modalSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
    textAlign: 'center',
    lineHeight: 20
  },
  modalButton: {
    backgroundColor: '#E8F0FE',
    padding: 12,
    borderRadius: 5,
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#4A6DA7',
  },
  modalButtonText: {
    fontSize: 16,
    color: '#4A6DA7',
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 15,
    padding: 12,
    backgroundColor: '#4A6DA7',
    borderRadius: 5,
    width: '100%',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default PostHarvest;
import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SubsidyProgramsPage = () => {
  const subsidyPrograms = [
    {
      name: "NABARD Refinance Support",
      description: "Short-term and long-term refinance to banks to ensure credit flow to agriculture and rural sectors.",
      highlights: [
        "Crop loan refinance to Cooperatives, RRBs, SFBs",
        "Capital formation boost in agriculture"
      ],
      url: "https://www.nabard.org"
    },
    {
      name: "WASH - Water Sanitation and Hygiene Refinance",
      description: "Special refinance for providing clean drinking water, sanitation, and hygiene facilities in rural areas.",
      highlights: [
        "Focus on health protection during infectious disease outbreaks",
        "Supports semi-urban and rural infrastructure development"
      ],
      url: "https://www.nabard.org"
    },
    {
      name: "Special Refinance Scheme on PACS as MSCs",
      description: "Supports Primary Agriculture Credit Societies to become Multi Service Centers to serve rural populations better.",
      highlights: [
        "Target to cover all potential PACS within 3 years",
        "Promotes rural economic growth"
      ],
      url: "https://www.nabard.org"
    },
    {
      name: "ISAM - Gramin Agricultural Markets (GrAMs)",
      description: "Subsidy for development and upgradation of rural agricultural markets under Integrated Scheme for Agricultural Marketing.",
      highlights: [
        "Infrastructure strengthening of Gramin Haats",
        "Extended up to 31st March 2026"
      ],
      url: "https://agricoop.nic.in/"
    },
    {
      name: "Agri Clinics and Agri Business Centres (ACABC)",
      description: "Encourages agripreneurship by providing startup support to agriculture graduates and entrepreneurs.",
      highlights: [
        "44% subsidy for women, SC/ST, and North East entrepreneurs",
        "36% subsidy for general category"
      ],
      url: "https://agricoop.nic.in/"
    },
    {
      name: "Interest Subvention Scheme",
      description: "Farmers get crop loans up to ₹3 lakh at a subsidized rate of interest with prompt repayment incentives.",
      highlights: [
        "7% per annum interest rate (1.5% subvention to banks)",
        "4% effective interest rate for prompt paying farmers"
      ],
      url: "https://www.nabard.org"
    }
  ];

  const openWebsite = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  const renderHighlights = (highlights) => {
    return highlights.map((item, index) => (
      <View key={index} style={styles.highlightItem}>
        <MaterialIcons name="star" size={16} color="#f39c12" />
        <Text style={styles.highlightText}>{item}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Subsidy and Financial Support Programs</Text>
      
      {subsidyPrograms.map((program, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{program.name}</Text>
          
          <Text style={styles.description}>{program.description}</Text>
          
          <View style={styles.highlightsContainer}>
            <Text style={styles.sectionTitle}>Key Highlights:</Text>
            {renderHighlights(program.highlights)}
          </View>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => openWebsite(program.url)}
          >
            <Text style={styles.buttonText}>Visit Official Website</Text>
            <MaterialIcons name="open-in-new" size={16} color="white" />
          </TouchableOpacity>
          
          {index < subsidyPrograms.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f9fc',
    padding: 15,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 18,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2980b9',
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    color: '#34495e',
    lineHeight: 22,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  highlightsContainer: {
    marginBottom: 15,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  highlightText: {
    fontSize: 14,
    color: '#7f8c8d',
    marginLeft: 5,
    lineHeight: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#27ae60',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 8,
  },
  divider: {
    height: 1,
    backgroundColor: '#ecf0f1',
    marginVertical: 15,
  },
});

export default SubsidyProgramsPage;
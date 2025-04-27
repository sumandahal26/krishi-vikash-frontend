import React from 'react';
import { View, Text, StyleSheet, Linking, ScrollView, TouchableOpacity } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const InsuranceProviders = () => {
    const insuranceData = [
        {
          name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
          url: "https://pmfby.gov.in/",
          description:
            "Launched in 2016, PMFBY is India's flagship crop insurance scheme aimed at supporting farmers' production risks. It offers financial assistance to farmers suffering crop loss/damage arising out of unforeseen events like natural calamities, pests, and diseases.",
          premium:
            "Farmers pay 2% of sum insured for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops. The remaining premium is subsidized by the government.",
          coverage:
            "Covers sowing risk, post-harvest losses (up to 14 days after harvesting), localized calamities (hailstorm, landslide, inundation), and widespread yield losses.",
          claimProcess:
            "Claims are processed based on the results of Crop Cutting Experiments (CCE) conducted by the state government. Remote sensing, drones, and smartphones are increasingly used for faster assessment.",
          benefits: [
            "Affordable premium with no cap on subsidy",
            "Early settlement of claims using technology (CCE automation, satellites)",
            "Covers entire cropping cycle from sowing to post-harvest",
            "Compulsory for loanee farmers (optional for non-loanee farmers)"
          ],
          contact: "National Toll-Free Number: 1800-180-1551"
        },
        {
          name: "Agriculture Insurance Company of India Ltd. (AIC)",
          url: "https://www.aicofindia.com/",
          description:
            "AIC of India is a specialized insurance company, wholly owned by the Indian Government, responsible for implementing crop insurance programs like PMFBY, RWBCIS, and MNAIS.",
          premium:
            "Depends on crop, area, and scheme (typically 1.5% to 5% for PMFBY crops). Premium rates vary for Weather Based Crop Insurance Scheme (WBCIS) policies.",
          coverage:
            "Offers protection against yield loss (PMFBY), weather adversities (WBCIS), prevented sowing, mid-season adversity, localized calamities, post-harvest losses, and more.",
          claimProcess:
            "For PMFBY: Based on CCE data. For WBCIS: Directly weather index-linked (no need for crop cutting). Settlements happen within 45 days after receipt of yield/weather data.",
          benefits: [
            "Pan-India network including remote villages",
            "Weather-based insurance and customized insurance products",
            "Special schemes for plantation crops, horticulture, sericulture, and aquaculture",
            "Mobile app for claim tracking and farmer services (AIC Mobile App)"
          ],
          contact: "Corporate Office: 011-41511665, Email: fasalbima@aicofindia.com"
        },
        {
          name: "State Crop Insurance Schemes (State-specific initiatives)",
          url: "https://agricoop.nic.in/",
          description:
            "Several Indian states offer supplementary or customized crop insurance schemes in addition to the central government programs. These address local agricultural risks more effectively.",
          premium:
            "Premiums vary according to each state scheme. States often provide additional subsidies to reduce farmers' burden beyond PMFBY assistance.",
          coverage:
            "Local risks like specific regional pests, flood-prone areas, drought-prone districts, crop-specific insurance (like Banana insurance in Tamil Nadu), and localized post-harvest risks.",
          claimProcess:
            "Based on state-level guidelines. Integrated with PMFBY/National Portal of Crop Insurance. Often includes satellite monitoring and mobile app reporting.",
          benefits: [
            "Customized risk coverage based on geography and local crops",
            "Higher compensation for specific high-risk zones",
            "Mobile-based registration and self-declaration in some states",
            "Better grievance redressal and quick settlement initiatives"
          ],
          contact:
            "Contact your respective State Agriculture Department or visit official websites (example: Maharashtra's MahaCrop portal, Tamil Nadu's Agri Insurance)."
        }
      ];
      

  const openWebsite = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Insurance Providers</Text>
      
      {insuranceData.map((insurance, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.title}>{insurance.name}</Text>
          <Text style={styles.description}>{insurance.description}</Text>
          
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>Premium Rates:</Text>
            <Text style={styles.detailText}>{insurance.premium}</Text>
          </View>
          
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>Coverage:</Text>
            <Text style={styles.detailText}>{insurance.coverage}</Text>
          </View>
          
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>Claim Process:</Text>
            <Text style={styles.detailText}>{insurance.claimProcess}</Text>
          </View>
          
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>Key Benefits:</Text>
            {insurance.benefits.map((benefit, i) => (
              <Text key={i} style={styles.benefitItem}>• {benefit}</Text>
            ))}
          </View>
          
          <View style={styles.detailSection}>
            <Text style={styles.detailTitle}>Contact:</Text>
            <Text style={styles.detailText}>{insurance.contact}</Text>
          </View>
          
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => openWebsite(insurance.url)}
          >
            <Text style={styles.buttonText}>Visit Official Website</Text>
            <FontAwesome5 name="open-in-new" size={16} color="white" />
          </TouchableOpacity>
          
          {index < insuranceData.length - 1 && <View style={styles.divider} />}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 15,
    lineHeight: 22,
  },
  detailSection: {
    marginBottom: 15,
  },
  detailTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 5,
  },
  detailText: {
    fontSize: 15,
    color: '#7f8c8d',
    lineHeight: 20,
  },
  benefitItem: {
    fontSize: 15,
    color: '#7f8c8d',
    marginLeft: 5,
    lineHeight: 20,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#ecf0f1',
    marginVertical: 20,
  },
});

export default InsuranceProviders;
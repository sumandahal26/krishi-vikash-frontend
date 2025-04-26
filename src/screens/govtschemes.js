import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const GovtSchemes = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const schemes = [
    { 
      id: 1, 
      name: 'PM Kisan Samman Nidhi Yojana', 
      details: 'Provides ₹6,000 per year in three equal installments to small and marginal farmer families.', 
      eligibility: 'Small and marginal farmers with cultivable land',
      buttonColor: '#F9A825',
      link: 'https://pmkisan.gov.in/'
    },
    { 
      id: 2, 
      name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', 
      details: 'Crop insurance scheme providing comprehensive coverage against natural calamities, pests and diseases.',
      link: 'https://pmfby.gov.in/'
    },
    { 
      id: 3, 
      name: 'Paramparagat Krishi Vikas Yojana (PKVY)', 
      details: 'Promotes organic farming with 50% subsidy (up to ₹50,000/ha) for 3 years.',
      link: 'https://pgsindia-ncof.gov.in/'
    },
    { 
      id: 4, 
      name: 'Micro Irrigation Fund Scheme', 



      



      
      details: 'Provides loans at subsidized rates for micro-irrigation systems like drip and sprinkler irrigation.',
      link: 'https://nmsa.gov.in/'
    },
    { 
      id: 5, 
      name: 'Kisan Credit Card (KCC)', 
      details: 'Provides farmers with timely access to credit at concessional interest rates.',
      link: 'https://www.pmindia.gov.in/'
    }
  ];

  // Filter schemes based on search query
  const filteredSchemes = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Government Schemes</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SchemeInfo')}>
          <MaterialIcons name="info-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={18} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search schemes..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView style={styles.content} contentContainerStyle={styles.scrollContent}>
        {filteredSchemes.length > 0 ? (
          filteredSchemes.map((scheme) => (
            <View key={scheme.id} style={styles.schemeCard}>
              <Text style={styles.schemeTitle}>{scheme.name}</Text>
              <Text style={styles.schemeDetails}>{scheme.details}</Text>
              {scheme.eligibility && (
                <Text style={styles.eligibilityText}>Eligibility: {scheme.eligibility}</Text>
              )}
              <TouchableOpacity 
                style={[styles.applyButton, { backgroundColor: scheme.buttonColor || '#0056A3' }]}
                onPress={() => Linking.openURL(scheme.link)}
              >
                <Text style={styles.applyButtonText}>Apply Now</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          <View style={styles.noResults}>
            <Text style={styles.noResultsText}>No schemes found matching your search</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0056A3' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15, paddingTop: 50 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: 'white' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 15, margin: 15, borderRadius: 10 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: '#333' },
  content: { backgroundColor: '#F5F5F5', borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1 },
  scrollContent: { padding: 20, paddingBottom: 100 },
  schemeCard: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 15, elevation: 2 },
  schemeTitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  schemeDetails: { fontSize: 14, color: '#666', marginBottom: 10 },
  eligibilityText: { fontSize: 13, color: '#888', fontStyle: 'italic', marginBottom: 10 },
  applyButton: { padding: 12, borderRadius: 8, alignItems: 'center', marginTop: 5 },
  applyButtonText: { color: 'white', fontWeight: 'bold', fontSize: 15 },
  noResults: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 30 },
  noResultsText: { fontSize: 16, color: '#666', textAlign: 'center' }
});

export default GovtSchemes;

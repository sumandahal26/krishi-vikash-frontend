import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const govtschemes = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const schemes = [
    { id: 1, name: 'PM Kisan Samman Nidhi Yojana', details: 'Get ₹6,000 yearly financial aid.', buttonColor: '#F9A825' },
    { id: 2, name: 'Crop Insurance Scheme', details: 'Coverage for crop damages due to natural disasters.' },
    { id: 3, name: 'Organic Farming Subsidy', details: 'Up to 50% subsidy for organic farming inputs.' },
    { id: 4, name: 'Irrigation Assistance', details: 'Govt. grant for installing irrigation systems.' }
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Govt. Schemes</Text>
        <TouchableOpacity>
          <MaterialIcons name="info-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <FontAwesome5 name="search" size={18} color="gray" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for schemes, loans, subsidies..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Scrollable Scheme List */}
      <ScrollView style={styles.content}>
        {schemes.map((scheme, index) => (
          <View key={scheme.id} style={[styles.schemeCard, index === 0 && styles.featuredCard]}>
            <Text style={styles.schemeTitle}>{scheme.name}</Text>
            <Text style={styles.schemeDetails}>{scheme.details}</Text>
            <TouchableOpacity style={[styles.applyButton, { backgroundColor: scheme.buttonColor || '#0056A3' }]}>
              <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Bottom Action Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.viewAllButton}>
          <Text style={styles.viewAllButtonText}>View All Schemes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Govt. Office</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0056A3' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, margin: 15, borderRadius: 10 },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16 },
  content: { backgroundColor: '#F5F5F5', borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1, padding: 20 },
  schemeCard: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10 },
  featuredCard: { backgroundColor: '#F9A825' },
  schemeTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  schemeDetails: { fontSize: 14, color: '#666', marginVertical: 5 },
  applyButton: { padding: 10, borderRadius: 5, alignItems: 'center', marginTop: 10 },
  applyButtonText: { color: 'white', fontWeight: 'bold', fontSize: 14 },
  bottomButtons: { flexDirection: 'row', justifyContent: 'space-between', padding: 20 },
  viewAllButton: { backgroundColor: '#0056A3', padding: 10, borderRadius: 5, flex: 1, marginRight: 5 },
  viewAllButtonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
  contactButton: { backgroundColor: '#2D8C4B', padding: 10, borderRadius: 5, flex: 1, marginLeft: 5 },
  contactButtonText: { color: 'white', textAlign: 'center', fontWeight: 'bold' },
});

export default govtschemes;

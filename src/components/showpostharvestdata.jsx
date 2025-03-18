import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
[0]

const PostHarvest = ({ crop })=>{

    console.log("crop",crop)
  if (!crop) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Crop Data Available</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Green Border at the Top */}
   
      {/* Page Title */}
     

      {/* Crop Details */}
      <ScrollView contentContainerStyle={styles.content}>
 
      
    <View  style={styles.card}>
        <Text style={styles.title}>{crop[0]?.name} Details</Text>
      <Text style={styles.label}>🌱 storage_guidelines:</Text>
      <Text style={styles.value}>{crop[0].storage_guidelines}</Text>

      <Text style={styles.label}>🌾 subsidy_provider:</Text>
      <Text style={styles.value}>{crop[0].subsidy_provider}</Text>

      <Text style={styles.label}>🧪 processing_facilities:</Text>
      <Text style={styles.value}>{crop[0].processing_facilities}</Text>

 
    </View>

</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F5', padding: 20 },
  greenBorder: { height: 5, backgroundColor: '#2D8C4B', width: '100%' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2D8C4B', marginVertical: 20 },
  content: { flexGrow: 1 },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  label: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  value: { fontSize: 14, color: '#666', marginBottom: 15 },
});
export default PostHarvest
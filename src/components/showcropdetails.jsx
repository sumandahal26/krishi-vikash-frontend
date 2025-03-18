import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function PostHarvestDetails({route}){
    const {crop} =route.params
    console.log(crop)
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
      <View style={styles.greenBorder} />

      {/* Page Title */}
      <Text style={styles.title}>{crop?.name} Details</Text>

      {/* Crop Details */}
      <ScrollView contentContainerStyle={styles.content}>
  {crop.map((item, idx) => (
      
    <View key={idx} style={styles.card}>
        <Text style={styles.title}>{crop?.name} Details</Text>
      <Text style={styles.label}>🌱 Season:</Text>
      <Text style={styles.value}>{item.season}</Text>

      <Text style={styles.label}>🌾 Seed Type:</Text>
      <Text style={styles.value}>{item.type}</Text>

      <Text style={styles.label}>🧪 Fertilizer:</Text>
      <Text style={styles.value}>{item.fertilizer}</Text>

      <Text style={styles.label}>📜 Description:</Text>
      <Text style={styles.value}>{item.description}</Text>
    </View>
  ))}
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

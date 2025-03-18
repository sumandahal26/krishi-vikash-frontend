import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

const market = ({ navigation }) => {
  const [crop, setCrop] = useState('');
  const [search, setSearch] = useState('');
  const [marketData, setMarketData] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    refreshPrices();
  }, []);

  // Fetch Live Market Prices (Replace with actual API)
  const refreshPrices = async () => {
    setLoading(true);
    try {
      // Dummy API response (Replace with actual API call)
      const data = [
        { name: 'Wheat', price: 32, trend: 'up', percentage: 5 },
        { name: 'Rice', price: 28, trend: 'down', percentage: -2 },
        { name: 'Sugarcane', price: 40, trend: 'up', percentage: 3 }
      ];
      setMarketData(data);
    } catch (error) {
      console.error('Error fetching market prices:', error);
    }
    setLoading(false);
  };

  // Toggle sorting (Ascending/Descending)
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setMarketData([...marketData].sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price)));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Market Prices</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={toggleSortOrder}>
            <Text style={styles.headerIcon}>⇅</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={refreshPrices}>
            <Text style={styles.headerIcon}>⟳</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Crop Selection */}
      <View style={styles.selectionContainer}>
        <Text style={styles.label}>Search Crop</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter crop name..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* Loading Indicator */}
      {loading && <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }} />}

      {/* Market Prices List */}
      <ScrollView style={styles.marketList}>
        {marketData
          .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <View key={index} style={styles.marketItem}>
              <Text style={styles.cropName}>🌾 {item.name}</Text>
              <Text style={styles.price}>₹{item.price}/kg</Text>
              <Text style={item.trend === 'up' ? styles.trendUp : styles.trendDown}>
                {item.trend === 'up' ? '📈' : '📉'} {item.percentage}%
              </Text>
            </View>
          ))}
      </ScrollView>

      {/* Insights Section */}
      <View style={styles.insightsContainer}>
        <Text style={styles.insightTitle}>Top Selling Locations</Text>
        <Text>- Punjab, Haryana, UP</Text>

        <Text style={styles.insightTitle}>Best Time to Sell</Text>
        <Text>📅 November - January</Text>
      </View>

      {/* Get Insights Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Market Insights</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0066CC' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  headerIcons: { flexDirection: 'row', gap: 15 },
  headerIcon: { fontSize: 24, color: 'white', marginHorizontal: 10 },
  selectionContainer: { backgroundColor: 'white', padding: 15, borderRadius: 10, margin: 15 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 10, borderRadius: 5 },
  marketList: { backgroundColor: 'white', margin: 15, padding: 10, borderRadius: 10 },
  marketItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd' },
  cropName: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 18, fontWeight: 'bold', color: 'green' },
  trendUp: { fontSize: 16, color: 'green' },
  trendDown: { fontSize: 16, color: 'red' },
  insightsContainer: { backgroundColor: '#E3F2FD', padding: 10, margin: 15, borderRadius: 10 },
  insightTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  button: { backgroundColor: '#0066CC', padding: 15, borderRadius: 5, alignItems: 'center', margin: 15 },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: 'white' },
});

export default market;

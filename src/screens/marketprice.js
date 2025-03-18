import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const marketprice = ({ navigation }) => {
  const [selectedCrop, setSelectedCrop] = useState('Rice');
  const [marketData, setMarketData] = useState([
    { id: 1, market: 'Mumbai APMC Market', price: '₹30/kg', distance: '15 km' },
    { id: 2, market: 'Delhi Grain Market', price: '₹32/kg', distance: '40 km' },
    { id: 3, market: 'Pune Wholesale Market', price: '₹28/kg', distance: '25 km' },
  ]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Market Prices</Text>
        <Text style={styles.headerIcon}>🔍</Text>
      </View>

      {/* Crop Selection Dropdown */}
      <View style={styles.dropdownContainer}>
        <Text style={styles.dropdownLabel}>Select Crop:</Text>
        <TouchableOpacity style={styles.dropdownButton}>
          <Text style={styles.dropdownText}>{selectedCrop}</Text>
          <Text style={styles.dropdownIcon}>▼</Text>
        </TouchableOpacity>
      </View>

      {/* Market Price Overview */}
      <View style={styles.priceContainer}>
        <Text style={styles.currentPrice}>Current Price: ₹{selectedCrop === 'Rice' ? '30' : '25'}/kg</Text>
        <Text style={styles.priceTrend}>
          Price Trend: <Text style={styles.trendUp}>📈 +5%</Text>
        </Text>
        <Text style={styles.priceComparison}>Last Week: ₹28/kg | This Week: ₹30/kg</Text>
      </View>

      {/* Market List */}
      <ScrollView style={styles.marketList}>
        {marketData.map((market) => (
          <View key={market.id} style={styles.marketCard}>
            <Text style={styles.marketName}>{market.market}</Text>
            <Text style={styles.marketPrice}>{market.price}</Text>
            <Text style={styles.marketDistance}>📍 {market.distance} away</Text>
            <TouchableOpacity style={styles.contactButton}>
              <Text style={styles.contactButtonText}>📞 Call Dealer</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.suggestionsButton}>
          <Text style={styles.buttonText}>Get Best Selling Suggestions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sellNowButton}>
          <Text style={styles.buttonText}>Sell Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#007B4B' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  headerIcon: { fontSize: 24, color: 'white' },
  dropdownContainer: { padding: 15, backgroundColor: 'white' },
  dropdownLabel: { fontSize: 16, fontWeight: 'bold' },
  dropdownButton: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderWidth: 1, borderRadius: 5 },
  dropdownText: { fontSize: 16 },
  dropdownIcon: { fontSize: 18, fontWeight: 'bold' },
  priceContainer: { padding: 15, backgroundColor: 'white' },
  currentPrice: { fontSize: 20, fontWeight: 'bold', color: '#1E824C' },
  priceTrend: { fontSize: 16, marginVertical: 5 },
  trendUp: { color: 'green' },
  priceComparison: { fontSize: 14, color: 'gray' },
  marketList: { flex: 1, padding: 15, backgroundColor: 'white' },
  marketCard: { backgroundColor: '#F8F8F8', padding: 15, borderRadius: 10, marginBottom: 10 },
  marketName: { fontSize: 16, fontWeight: 'bold' },
  marketPrice: { fontSize: 16, color: '#1E824C' },
  marketDistance: { fontSize: 14, color: 'gray' },
  contactButton: { backgroundColor: '#007B4B', padding: 8, borderRadius: 5, marginTop: 5, alignItems: 'center' },
  contactButtonText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  actionButtons: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: 'white' },
  suggestionsButton: { backgroundColor: '#1E824C', padding: 10, borderRadius: 5 },
  sellNowButton: { backgroundColor: '#007B4B', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default marketprice;

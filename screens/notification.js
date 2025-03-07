import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const notifications = ({ navigation }) => {
  const [filter, setFilter] = useState('All');
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Market', title: 'Wheat prices increased by 12%', description: 'Now selling at ₹40/kg in your region.', time: '2 hours ago' },
    { id: 2, type: 'Weather', title: 'Heavy Rain Alert', description: 'Expect heavy rainfall in the next 24 hours.', time: '5 hours ago' },
    { id: 3, type: 'Government', title: 'PM Kisan Scheme Update', description: 'Next installment of ₹6,000 to be credited soon.', time: '1 day ago' },
  ]);

  const filteredNotifications = filter === 'All' ? notifications : notifications.filter(n => n.type === filter);

  const markAllAsRead = () => {
    console.log('Marking all notifications as read');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerIcon}>⬅️</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <Text style={styles.headerIcon}>🔔</Text>
      </View>

      {/* Filter Tabs */}
      <View style={styles.filterContainer}>
        {['All', 'Weather', 'Market', 'Government'].map((category) => (
          <TouchableOpacity
            key={category}
            style={[styles.filterButton, filter === category && styles.activeFilter]}
            onPress={() => setFilter(category)}
          >
            <Text style={[styles.filterText, filter === category && styles.activeFilterText]}>{category}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.notificationList}>
        {filteredNotifications.map((notification) => (
          <View key={notification.id} style={styles.notificationCard}>
            <Text style={styles.notificationTitle}>{notification.title}</Text>
            <Text style={styles.notificationDescription}>{notification.description}</Text>
            <Text style={styles.notificationTime}>{notification.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Action Buttons */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.markReadButton} onPress={markAllAsRead}>
          <Text style={styles.buttonText}>Mark All as Read</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewDetailsButton}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FF8C00' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  headerIcon: { fontSize: 24, color: 'white' },
  filterContainer: { flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'white', padding: 10 },
  filterButton: { padding: 8, borderRadius: 5 },
  filterText: { fontSize: 16, color: '#444' },
  activeFilter: { backgroundColor: '#1E824C' },
  activeFilterText: { color: 'white' },
  notificationList: { flex: 1, padding: 15, backgroundColor: 'white' },
  notificationCard: { backgroundColor: '#F8F8F8', padding: 15, borderRadius: 10, marginBottom: 10 },
  notificationTitle: { fontSize: 16, fontWeight: 'bold' },
  notificationDescription: { fontSize: 14, marginVertical: 5 },
  notificationTime: { fontSize: 12, color: 'gray' },
  actionButtons: { flexDirection: 'row', justifyContent: 'space-around', padding: 15, backgroundColor: 'white' },
  markReadButton: { backgroundColor: 'gray', padding: 10, borderRadius: 5 },
  viewDetailsButton: { backgroundColor: '#1E824C', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default notifications;

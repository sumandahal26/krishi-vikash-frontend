import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Admin({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Admin Dashboard</Text>
      </View>

      {/* Statistics Section */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>330</Text>
          <Text style={styles.statLabel}>Total Registered</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>3.60</Text>
          <Text style={styles.statLabel}>Average Score</Text>
        </View>
      </View>

      {/* Cards Section */}
      <View style={styles.card}>
        <FontAwesome name="users" size={24} color="#3B82F6" />
        <Text style={styles.cardText}>Registered Farmers</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="agriculture" size={24} color="#3B82F6" />
        <Text style={styles.cardText}>Active Crops</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="update" size={24} color="#3B82F6" />
        <Text style={styles.cardText}>Recent Updates</Text>
      </View>

      <View style={styles.card}>
        <MaterialIcons name="notifications" size={24} color="#3B82F6" />
        <Text style={styles.cardText}>Send Notifications</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Manage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>New Entry</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <FontAwesome name="home" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="agriculture" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="settings" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
    padding: 15,
  },
  header: {
    backgroundColor: '#3B82F6',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  statBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  statLabel: {
    fontSize: 14,
    color: '#64748B',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  cardText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3B82F6',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15,
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
});



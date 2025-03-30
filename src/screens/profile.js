import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView, Alert } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomBottomNav from '../components/bottomTab';

const Profile = ({ navigation }) => {
  const [name, setName] = useState('');
  const [soilType, setSoilType] = useState('');
  const [sownArea, setSownArea] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Load user data from AsyncStorage
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem('user');
        if (userData) {
          const parsedData = JSON.parse(userData);
          setName(parsedData.name || '');
          setSoilType(parsedData.soilType || '');
          setSownArea(parsedData.sownArea || '');
          setEmail(parsedData.email || '');
          setPhone(parsedData.phone_number || '');
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };

    loadUserData();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              // Clear AsyncStorage
              await AsyncStorage.removeItem('user');
              // Navigate to login screen
              navigation.replace('Login');
            } catch (error) {
              console.error('Error during logout:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Farmer Profile</Text>
        <TouchableOpacity onPress={handleLogout}>
          <FontAwesome5 name="sign-out-alt" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image source={require("../../assets/images/farmer.png")} style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity 
            style={styles.editButton}
            onPress={() => navigation.navigate('Registration')}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Information */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <TextInput 
            style={styles.input} 
            value={name} 
            editable={false}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput 
            style={styles.input} 
            value={email} 
            editable={false}
          />

          <Text style={styles.label}>Phone</Text>
          <TextInput 
            style={styles.input} 
            value={phone} 
            editable={false}
          />

          <Text style={styles.label}>Soil Type</Text>
          <TextInput 
            style={styles.input} 
            value={soilType} 
            editable={false}
          />

          <Text style={styles.label}>Sown Area</Text>
          <TextInput 
            style={styles.input} 
            value={sownArea} 
            editable={false}
          />
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
      <CustomBottomNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D8C4B' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    padding: 15,
    paddingTop: 50,
  },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  content: { 
    backgroundColor: '#F5F5F5', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    flex: 1, 
    padding: 20,
    paddingTop: 30,
  },
  profileCard: { 
    alignItems: 'center', 
    marginBottom: 20 
  },
  avatar: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    borderWidth: 3,
    borderColor: '#2D8C4B'
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: 'black', 
    marginVertical: 10 
  },
  editButton: { 
    backgroundColor: '#2D8C4B', 
    padding: 10, 
    borderRadius: 5,
    width: 150,
  },
  editButtonText: { 
    color: 'white', 
    fontSize: 16, 
    textAlign: 'center',
    fontWeight: 'bold'
  },
  infoSection: { 
    backgroundColor: 'white', 
    padding: 20, 
    borderRadius: 10, 
    marginBottom: 20 
  },
  label: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#2D8C4B', 
    marginBottom: 5 
  },
  input: { 
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    borderRadius: 5, 
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#f9f9f9'
  },
  logoutButton: {
    backgroundColor: '#e74c3c',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Profile;
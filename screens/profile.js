import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const profile = ({ navigation }) => {
  const [name, setName] = useState('Farmer Name');
  const [soilType, setSoilType] = useState('3.90');
  const [sownArea, setSownArea] = useState('1.5 Acres');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Farmer Profile</Text>
        <TouchableOpacity>
          <FontAwesome5 name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <Image  source={require("./../assets/images/farmer.jpg")}  style={styles.avatar} />
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Personal Information */}
        <View style={styles.infoSection}>
          <Text style={styles.label}>Name</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />

          <Text style={styles.label}>Soil Type</Text>
          <TextInput style={styles.input} value={soilType} onChangeText={setSoilType} keyboardType="numeric" />

          <Text style={styles.label}>Sown Area</Text>
          <TextInput style={styles.input} value={sownArea} onChangeText={setSownArea} />
        </View>

        {/* Map Section */}
        {/* <View style={styles.mapContainer}>
          <MapView 
            style={styles.map} 
            initialRegion={{ latitude: 22.5726, longitude: 88.3639, latitudeDelta: 0.02, longitudeDelta: 0.02 }}>
            <Marker coordinate={{ latitude: 22.5726, longitude: 88.3639 }} title="Farmer's Land" description={`Soil Type: ${soilType}, Climate Zone: 12.3`} />
          </MapView>
          <View style={styles.mapDetails}>
            <Text style={styles.mapLabel}>Soil Type: {soilType}</Text>
            <Text style={styles.mapLabel}>Climate Zone: 12.3</Text>
          </View>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2D8C4B' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 15 },
  headerTitle: { fontSize: 22, fontWeight: 'bold', color: 'white' },
  content: { backgroundColor: '#F5F5F5', borderTopLeftRadius: 30, borderTopRightRadius: 30, flex: 1, padding: 20 },
  profileCard: { alignItems: 'center', marginBottom: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#ccc' },
  name: { fontSize: 18, fontWeight: 'bold', color: 'black', marginVertical: 10 },
  editButton: { backgroundColor: '#2D8C4B', padding: 10, borderRadius: 5 },
  editButtonText: { color: 'white', fontSize: 14, textAlign: 'center' },
  infoSection: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#2D8C4B', marginBottom: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  mapContainer: { marginTop: 20, backgroundColor: 'white', padding: 10, borderRadius: 10 },
  map: { height: 200, borderRadius: 10 },
  mapDetails: { marginTop: 10, alignItems: 'center' },
  mapLabel: { fontSize: 14, fontWeight: 'bold', color: '#2D8C4B' },
});

export default profile;

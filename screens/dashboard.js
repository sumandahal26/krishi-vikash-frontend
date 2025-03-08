import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Card } from "react-native-paper";

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Profile Icon at the Top-Right Corner (Now Green) */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.profileIcon}
      >
        <FontAwesome5 name="user-circle" size={40} color="green" />
      </TouchableOpacity>

      {/* Weather Card (Replaces Header) */}
      <Card style={styles.weatherCard}>
        <FontAwesome5 name="cloud-sun" size={50} color="blue" />
        <Text style={styles.weatherTitle}>🌤️ 33°C | Rain: 39mm</Text>
        <Text style={styles.weatherText}>Partly Cloudy</Text>
      </Card>

      {/* Navigation Grid */}
      <View style={styles.navGrid}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Market")}
        >
          <FontAwesome5 name="store" size={40} color="white" />
          <Text style={styles.navText}>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Weather")}
        >
          <FontAwesome5 name="cloud-sun" size={40} color="white" />
          <Text style={styles.navText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("GovtSchemes")}
        >
          <FontAwesome5 name="landmark" size={40} color="white" />
          <Text style={styles.navText}>Schemes</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate("Preharvest")}
        >
          <FontAwesome5 name="seedling" size={40} color="white" />
          <Text style={styles.navText}>Crops</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef5fc", padding: 10 },

  // Profile Icon at the Top-Right Corner (Green)
  profileIcon: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
  },

  // Weather Card with Header Details
  weatherCard: {
    backgroundColor: "#00796b",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 70, // Space for profile icon
    marginBottom: 20,
    elevation: 5,
  },
  weatherTitle: { fontSize: 20, fontWeight: "bold", color: "white" },
  weatherText: { fontSize: 16, color: "white" },

  // Navigation Grid
  navGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 10,
  },
  navItem: {
    backgroundColor: "#009688",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "45%",
    marginVertical: 10,
  },
  navText: { color: "white", marginTop: 5, fontWeight: "bold" },
});

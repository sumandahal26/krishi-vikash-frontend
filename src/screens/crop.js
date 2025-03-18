import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import CustomBottomNav from "../components/bottomTab";
const Crops = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Green Border at the Top */}
      <View style={styles.greenBorder} />

      {/* Page Title */}
      <Text style={styles.title}>Farm Management</Text>

      {/* Icons Grid */}
      <View style={styles.iconGrid}>
        {/* Crop Recommendation */}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("CroprRecommand")}
        >
          <FontAwesome5 name="seedling" size={40} color="#4CAF50" />
          <Text style={styles.iconText}>Crop Recommendation</Text>
        </TouchableOpacity>

        {/* Pre-Harvest */}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("Preharvest")}
        >
          <FontAwesome5 name="tractor" size={40} color="#4CAF50" />
          <Text style={styles.iconText}>Pre-Harvest</Text>
        </TouchableOpacity>

        {/* Post-Harvest */}
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => navigation.navigate("postharvest")}
        >
          <FontAwesome5 name="basket-loaded" size={40} color="#4CAF50" />
          <Text style={styles.iconText}>Post-Harvest</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomNav}>
        <CustomBottomNav />
      </View>
    </View>
  );
};

export default Crops;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#FFF",
  },
  greenBorder: {
    height: 10,
    backgroundColor: "#4CAF50",
    width: "100%",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  iconGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  iconContainer: {
    alignItems: "center",
    width: "40%",
    marginBottom: 30,
    padding: 20,
    borderRadius: 15,
    backgroundColor: "#F5F5F5",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  iconText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const  navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Top Left Farmer Logo */}
      <Image 
        source={require("./../assets/images/farmer.jpg")}  
        style={styles.logo} 
      />

      {/* Rounded Tractor Image */}
      <Image 
        source={require("./../assets/images/tractor.jpg")}  
        style={styles.tractor} 
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Empowering Farmers for a Better Future</Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF6DD", // Light green background
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    position: "absolute",
    borderRadius: 100,
    top: 25,
    left: 20,
  },
  tractor: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    position: "absolute",
    top: 150,
    borderRadius: 150,
    borderWidth: 5,
    borderColor: "#6A994E",
  },
  footer: {
    position: "absolute",
    bottom: 100,
    alignItems: "center",
  },
  footerText: {
    fontSize: 16,
    color: "#6A994E",
  },
  button: {
    position: "absolute",
    bottom: 40,
    backgroundColor: "#2C5F2D",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

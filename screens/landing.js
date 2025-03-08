import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Farmer Logo (Round) */}
      <Image source={require("../assets/images/farmer.jpg")} style={styles.logo} />

      {/* Clouds Image on the Right */}
      <Image source={require("../assets/images/clouds.png")} style={styles.clouds} />

      {/* Tractor Image */}
      <Image source={require("../assets/images/tractor.jpg")} style={styles.tractor} />

      {/* Footer & Button Section */}
      <View style={styles.bottomContainer}>
        <Text style={styles.footerText}>Empowering Farmers for a Better Future</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AEE2FF",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: "absolute",
    top: 40,
    left: 20,
  },
  clouds: {
    width: 120,
    height: 80,
    position: "absolute",
    top: 50,
    right: 20,
    resizeMode: "contain",
  },
  tractor: {
    width: 320,
    height: 320,
    resizeMode: "cover",
    borderRadius: 160,
    borderWidth: 5,
    borderColor: "#4A90E2",
    marginTop: 160,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 40,
    alignItems: "center",
    width: "100%",
  },
  footerText: {
    fontSize: 16,
    color: "#003366",
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
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

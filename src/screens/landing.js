import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {/* Hero Image */}
        <Image
          source={{
            uri: "https://img.freepik.com/premium-vector/indian-farmer-standing-crops_1308360-44.jpg",
          }}
          style={styles.heroImage}
        />

        {/* Welcome Text */}
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>Welcome to Krishi-Vikash</Text>
          <Text style={styles.tagline}>Your Partner in Sustainable Farming</Text>
        </View>

        {/* Feature Section */}
        <View style={styles.featureContainer}>
          <Text style={styles.featureTitle}>🌤 Live Weather Tracking</Text>
          <Text style={styles.featureText}>
            Stay updated with real-time weather conditions and alerts to make better farming decisions.
          </Text>

          <Text style={styles.featureTitle}>🌾 AI-Powered Crop Recommendations</Text>
          <Text style={styles.featureText}>
            Get personalized crop suggestions based on soil, climate, and season to maximize yield.
          </Text>

          <Text style={styles.featureTitle}>🚜 Pre-Harvest & Post-Harvest Guidance</Text>
          <Text style={styles.featureText}>
            Learn best practices for soil preparation, irrigation, storage, and more.
          </Text>
        </View>
      </ScrollView>

      {/* Fixed Footer with Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LandingScreen;

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
  },
  scrollContainer: {
    alignItems: "center",
    paddingBottom: 100, // Ensures content is not cut off behind the button
  },
  heroImage: {
    width: width,
    height: height * 0.4,
    resizeMode: "cover",
    marginTop: height * 0.05,
  },
  textContainer: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    marginBottom: 15,
  },
  featureContainer: {
    width: "90%",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 5,
  },
  featureText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 10,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2E7D32",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

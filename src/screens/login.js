import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.background}>
      {/* Farmer Images (Replacing Clouds) */}
      <Image source={require("../../assets/images/clouds.png")} style={[styles.farmerImage, styles.topLeftImage]} />
      <Image source={require("../../assets/images/clouds.png")} style={[styles.farmerImage, styles.topRightImage]} />

      {/* Main Farmer Image */}
      <Image source={require("../../assets/images/farmer.png")} style={styles.farmerMainImage} />

      {/* Login Container */}
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Icon name="phone" size={20} color="#666" style={styles.icon} />
          <TextInput placeholder="Phone Number" style={styles.input} keyboardType="phone-pad" />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.icon} />
          <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        </View>

        {/* Forgot Password */}
        <View style={styles.options}>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        {/* Register Option */}
        <Text style={styles.registerText}>
          Don't have an account? <Text style={styles.registerLink} onPress={() => navigation.navigate("Registration")}>Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#AEE2FF", // Sky blue color
    justifyContent: "center",
    alignItems: "center",
  },

  /* Farmer Images Replacing Clouds */
  topLeftImage: {
    position: "absolute",
    top: 30,
    left: 20,
    width: 80,
    height: 80,
    borderRadius: 40, // Circular farmer image
  },
  topRightImage: {
    position: "absolute",
    top: 40,
    right: 30,
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  /* Main Farmer Image */
  farmerMainImage: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular frame
    marginBottom: 10,
  },

  /* Login Card */
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.6)", // Transparent white
    padding: 20,
    borderRadius: 70,
    width: "90%",
    maxWidth: 350,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },

  /* Options */
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 15,
  },
  forgotPassword: {
    color: "#007bff",
  },

  /* Login Button */
  loginButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    width: "100%",
    borderRadius: 30,
    alignItems: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  /* Register Option */
  registerText: {
    marginTop: 10,
    fontSize: 14,
  },
  registerLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
});

export default LoginScreen;

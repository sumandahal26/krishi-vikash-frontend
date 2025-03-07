import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

const login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const {navigate} = useNavigation()

  const handleRegister = () => {
    console.log("Registering user...");
    // TODO: Implement OTP authentication logic
  };

  return (
    <View style={styles.container}>
      {/* Logo & Title */}
      <View style={styles.logoContainer}>
        <Icon name="leaf" size={50} color="green" />
        <Text style={styles.title}>Farmer Login & Registration</Text>
      </View>

      {/* Main Green Heading */}
      <Text style={styles.farmerText}>Farmer</Text>

      {/* Login & Registration Button */}
      <TouchableOpacity style={styles.authButton}>
        <Text style={styles.authButtonText}>Login & Registration</Text>
      </TouchableOpacity>

      {/* OTP Registration Button */}
      <TouchableOpacity style={styles.otpButton}>
        <Text style={styles.otpButtonText}>Regd OTP</Text>
      </TouchableOpacity>

      {/* Input Fields */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number"
          keyboardType="numeric"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>OTP:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          keyboardType="numeric"
          value={otp}
          onChangeText={setOtp}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Location Size:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter location size"
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/* Submit Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.submitButton} onPress={()=>navigate("Dashboard")}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.suggestButton}>
          <Text style={styles.suggestButtonText}>Suggest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5dc",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e7d32",
    textAlign: "center",
  },
  farmerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
    marginVertical: 10,
  },
  authButton: {
    backgroundColor: "#6FCF97",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  authButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  otpButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    width: "80%",
    alignItems: "center",
  },
  otpButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "green",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  suggestButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  suggestButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default login;

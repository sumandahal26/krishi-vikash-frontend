import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Registration = ({ navigation }) => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Create an Account</Text>

        <TextInput style={styles.input} placeholder="Full Name" onChangeText={(text) => handleChange("fullName", text)} />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={(text) => handleChange("email", text)} />

        {/* Phone & OTP Section */}
        <View style={styles.otpContainer}>
          <TextInput style={[styles.input, styles.phoneInput]} placeholder="Phone Number" keyboardType="phone-pad" onChangeText={(text) => handleChange("phone", text)} />
          <TouchableOpacity style={styles.otpButton} onPress={() => console.log("OTP Sent")}>
            <Text style={styles.otpText}>Send OTP</Text>
          </TouchableOpacity>
        </View>

        <TextInput style={styles.input} placeholder="Enter OTP" keyboardType="numeric" onChangeText={(text) => handleChange("otp", text)} />
        <TextInput style={styles.input} placeholder="Create Password" secureTextEntry onChangeText={(text) => handleChange("password", text)} />
        <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry onChangeText={(text) => handleChange("confirmPassword", text)} />

        {/* Register Button */}
        <TouchableOpacity style={styles.registerButton} onPress={() => console.log("Registering...")}>
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>

        {/* Login Option */}
        <TouchableOpacity onPress={() => console.log("Navigating to Login")}>
          <Text style={styles.loginText}>Already have an account? <Text style={styles.loginLink} onPress={() => navigation.navigate("Login")}>Login</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AEE2FF",
  },
  card: {
    backgroundColor: "transparent",
    padding: 25,
    borderRadius: 30,
    width: "85%",
    elevation: 5,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
    color: "#333",
  },
  input: {
    backgroundColor: "#F8F9FA",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD",
  },
  otpContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  phoneInput: {
    flex: 1,
    marginRight: 10,
  },
  otpButton: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
  },
  otpText: {
    color: "white",
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "#28A745",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  registerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "#333",
    marginTop: 15,
    fontSize: 14,
  },
  loginLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default Registration;

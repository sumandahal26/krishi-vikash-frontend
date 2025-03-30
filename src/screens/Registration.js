import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from "react-native";
import apiService from "../services/apiservices";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Registration = ({ navigation }) => {
  const [form, setForm] = useState({
    name: "",
    phone_number: "",
    email: "",
    password: "",
    confirmPassword: "",
    preferred_language: "English", // default value
    age: "",
    gender: "Male", // default value
    farm_size: "",
    farming_type: "Crop", // default value
    experience_years: "",
    education_level: "Primary", // default value
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const handleRegister = async () => {
    // Validation
    if (form.password !== form.confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }
  
    if (!form.name || !form.email || !form.phone_number || !form.password) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }
  
    setLoading(true);
    try {
      // Prepare the registration data
      const registrationData = {
        name: form.name,
        phone_number: form.phone_number,
        email: form.email,
        password: form.password,
        preferred_language: form.preferred_language,
        age: parseInt(form.age) || 0,
        gender: form.gender,
        farm_size: parseFloat(form.farm_size) || 0,
        farming_type: form.farming_type,
        experience_years: parseInt(form.experience_years) || 0,
        education_level: form.education_level,
        status: "active",
      };
  
      const response = await apiService.postData("/auth/signup", registrationData);
  
      if (response.message === "Farmer registered successfully") {
        Alert.alert("Success", "Registration successful!");
        console.log(response.data);
  
        // **Save user data in AsyncStorage**
        await AsyncStorage.setItem("user", JSON.stringify(response.farmer));
  
        navigation.navigate("Dashboard");
      } else {
        Alert.alert("Error", response.message || "Registration failed");
      }
    } catch (error) {
      console.error("Registration error:", error);
      Alert.alert("Error", "An error occurred during registration");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Create an Account</Text>

        {/* Basic Information */}
        <Text style={styles.sectionHeader}>Basic Information</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Full Name *" 
          value={form.name}
          onChangeText={(text) => handleChange("name", text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Email *" 
          keyboardType="email-address"
          value={form.email}
          onChangeText={(text) => handleChange("email", text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Phone Number *" 
          keyboardType="phone-pad"
          value={form.phone_number}
          onChangeText={(text) => handleChange("phone_number", text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Password *" 
          secureTextEntry 
          value={form.password}
          onChangeText={(text) => handleChange("password", text)} 
        />
        <TextInput 
          style={styles.input} 
          placeholder="Confirm Password *" 
          secureTextEntry 
          value={form.confirmPassword}
          onChangeText={(text) => handleChange("confirmPassword", text)} 
        />

        {/* Personal Details */}
        <Text style={styles.sectionHeader}>Personal Details</Text>
        <View style={styles.row}>
          <View style={[styles.halfInput, { marginRight: 10 }]}>
            <TextInput 
              style={styles.input} 
              placeholder="Age" 
              keyboardType="numeric"
              value={form.age}
              onChangeText={(text) => handleChange("age", text)} 
            />
          </View>
          <View style={styles.halfInput}>
            <TextInput 
              style={styles.input} 
              placeholder="Farm Size (acres)" 
              keyboardType="numeric"
              value={form.farm_size}
              onChangeText={(text) => handleChange("farm_size", text)} 
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={[styles.halfInput, { marginRight: 10 }]}>
            <TextInput 
              style={styles.input} 
              placeholder="Experience (years)" 
              keyboardType="numeric"
              value={form.experience_years}
              onChangeText={(text) => handleChange("experience_years", text)} 
            />
          </View>
          <View style={styles.halfInput}>
            <TextInput 
              style={styles.input} 
              placeholder="Preferred Language" 
              value={form.preferred_language}
              onChangeText={(text) => handleChange("preferred_language", text)} 
            />
          </View>
        </View>

        {/* Dropdown-like selectors */}
        <Text style={styles.label}>Gender:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity 
            style={[styles.radioButton, form.gender === "Male" && styles.radioButtonSelected]}
            onPress={() => handleChange("gender", "Male")}
          >
            <Text>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, form.gender === "Female" && styles.radioButtonSelected]}
            onPress={() => handleChange("gender", "Female")}
          >
            <Text>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, form.gender === "Other" && styles.radioButtonSelected]}
            onPress={() => handleChange("gender", "Other")}
          >
            <Text>Other</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Farming Type:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity 
            style={[styles.radioButton, form.farming_type === "Crop" && styles.radioButtonSelected]}
            onPress={() => handleChange("farming_type", "Crop")}
          >
            <Text>Crop</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, form.farming_type === "Livestock" && styles.radioButtonSelected]}
            onPress={() => handleChange("farming_type", "Livestock")}
          >
            <Text>Livestock</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, form.farming_type === "Mixed" && styles.radioButtonSelected]}
            onPress={() => handleChange("farming_type", "Mixed")}
          >
            <Text>Mixed</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Education Level:</Text>
        <View style={styles.radioGroup}>
          <TouchableOpacity 
            style={[styles.radioButton, form.education_level === "Primary" && styles.radioButtonSelected]}
            onPress={() => handleChange("education_level", "Primary")}
          >
            <Text>Primary</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, form.education_level === "Secondary" && styles.radioButtonSelected]}
            onPress={() => handleChange("education_level", "Secondary")}
          >
            <Text>Secondary</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.radioButton, form.education_level === "University" && styles.radioButtonSelected]}
            onPress={() => handleChange("education_level", "University")}
          >
            <Text>University</Text>
          </TouchableOpacity>
        </View>

        {/* Register Button */}
        <TouchableOpacity 
          style={styles.registerButton} 
          onPress={handleRegister}
          disabled={loading}
        >
          <Text style={styles.registerText}>
            {loading ? "Registering..." : "Register"}
          </Text>
        </TouchableOpacity>

        {/* Login Option */}
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#AEE2FF",
    paddingVertical: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 15,
    width: "90%",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#333",
  },
  sectionHeader: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    backgroundColor: "#F8F9FA",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 14,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
    color: "#555",
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  radioButton: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#DDD",
    alignItems: "center",
    marginHorizontal: 2,
  },
  radioButtonSelected: {
    backgroundColor: "#E8F5E9",
    borderColor: "#4CAF50",
  },
  registerButton: {
    backgroundColor: "#28A745",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 15,
  },
  registerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    color: "#333",
    marginTop: 10,
    fontSize: 14,
  },
  loginLink: {
    color: "#007BFF",
    fontWeight: "bold",
  },
});

export default Registration;
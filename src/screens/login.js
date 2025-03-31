import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Alert,
  ActivityIndicator 
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from '@react-native-async-storage/async-storage';
import apiService from "../services/apiservices";

const LoginScreen = ({ navigation }) => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Validation
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      const loginData = {
        email: form.email,
        password: form.password,
      };

      const response = await apiService.postData("/auth/login", loginData);

      if (response.message === "Login successful") {
        Alert.alert("Success", "Login successful!");
        console.log(response.data);

        // Save user data in AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify(response.farmer));

        navigation.navigate("Dashboard");
      } else {
        Alert.alert("Error", response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Error", "An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (name, value) => {
    setForm({
      ...form,
      [name]: value
    });
  };

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

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#666" style={styles.icon} />
          <TextInput 
            placeholder="Email" 
            style={styles.input} 
            value={form.email} 
            onChangeText={(text) => handleChange("email", text)} 
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.icon} />
          <TextInput 
            placeholder="Password" 
            style={styles.input} 
            secureTextEntry 
            value={form.password}
            onChangeText={(text) => handleChange("password", text)}
          />
        </View>

        {/* Forgot Password */}
        <View style={styles.options}>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.loginText}>Login</Text>
          )}
        </TouchableOpacity>

        {/* Register Option */}
        <Text style={styles.registerText}>
          Don't have an account?{' '}
          <Text 
            style={styles.registerLink} 
            onPress={() => navigation.navigate("Registration")}
          >
            Register
          </Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#AEE2FF",
    justifyContent: "center",
    alignItems: "center",
  },
  farmerImage: {
    position: "absolute",
    width: 80,
    height: 80,
  },
  topLeftImage: {
    top: 30,
    left: 20,
  },
  topRightImage: {
    top: 40,
    right: 30,
  },
  farmerMainImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
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
  options: {
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    marginBottom: 15,
  },
  forgotPassword: {
    color: "#007bff",
  },
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
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const DashboardScreen = ({ navigation }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState(null);

  const API_KEY = "b92284d08176211ed7133bd2a2f4a111"; // Replace with your API key
  const CITY = "Silchar";

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      console.log(data)
      setWeatherData(data);
      setLoading(false);
      setBackgroundImage(getBackgroundImage(data));
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setLoading(false);
    }
  };

  const getBackgroundImage = (data) => {
    const weatherCondition = data.weather[0].main;
    console.log(weatherCondition)
    const currentTime = data.dt * 1000;
    const sunrise = data.sys.sunrise * 1000;
    const sunset = data.sys.sunset * 1000;

    const isDaytime = currentTime > sunrise && currentTime < sunset;
    console.log(isDaytime)

    if (weatherCondition === "Clear") {
      return isDaytime
        ? require("../../assets/images/day.jpg")
        : require("../../assets/images/night2.jpg");
    } else if (weatherCondition === "Clouds") {
      return isDaytime
        ? require("../../assets/images/cloudyday.jpg")
        : require("../../assets/images/night2.jpg");
    } else if (weatherCondition === "Rain") {
      return require("../../assets/images/rainyday.jpg");
    } else if (weatherCondition === "Thunderstorm") {
      return require("../../assets/images/day.jpg");
    } else if (weatherCondition === "Snow") {
      return require("../../assets/images/day.jpg");
    } else {
      return require("../../assets/images/day.jpg");
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      {/* Overlay for better readability */}
      <View style={styles.overlay} />

      {/* Profile Icon at the Top-Right Corner */}
      <TouchableOpacity
        onPress={() => navigation.navigate("Profile")}
        style={styles.profileIcon}
      >
        <FontAwesome5 name="user-circle" size={30} color="#FFF" />
      </TouchableOpacity>

      {/* Weather Information */}
      {loading ? (
        <ActivityIndicator size="large" color="#FFF" style={styles.loadingIndicator} />
      ) : (
        <View style={styles.weatherContainer}>
          <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
          <Text style={styles.weatherDescription}>{weatherData.weather[0].description}</Text>
          <Text style={styles.cityName}>{CITY}</Text>
        </View>
      )}

      {/* Navigation Grid */}
      <View style={styles.navGrid}>
        <View style={styles.gridRow}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate("Market")}
          >
            <FontAwesome5 name="store" size={30} color="#4CAF50" />
            <Text style={styles.navText}>Market</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate("Weather")}
          >
            <FontAwesome5 name="cloud-sun" size={30} color="#4CAF50" />
            <Text style={styles.navText}>Weather</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.gridRow}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate("GovtSchemes")}
          >
            <FontAwesome5 name="landmark" size={30} color="#4CAF50" />
            <Text style={styles.navText}>Schemes</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => navigation.navigate("Crops")}
          >
            <FontAwesome5 name="seedling" size={30} color="#4CAF50" />
            <Text style={styles.navText}>Crops</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.gridRow}>
          <TouchableOpacity
            style={[styles.iconContainer]}
            onPress={() => navigation.navigate("LULC")}
          >
            <FontAwesome5 name="layer-group" size={30} color="#4CAF50" />
            <Text style={styles.navText}>LULC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iconContainer]}
            onPress={() => navigation.navigate("SmartFarming")}
          >
            <FontAwesome5 name="tractor" size={30} color="#4CAF50" />
            <Text style={styles.navText}>Smart-farming</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Semi-transparent overlay
  },
  profileIcon: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
  weatherContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  temperature: {
    fontSize: 70,
    fontWeight: "bold",
    color: "#FFF",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  weatherDescription: {
    fontSize: 24,
    color: "#FFF",
    fontStyle: "italic",
    marginTop: 5,
    textTransform: "capitalize",
  },
  cityName: {
    fontSize: 20,
    color: "#FFF",
    marginTop: 5,
    fontWeight: "600",
  },
  navGrid: {
    marginTop: 50,
    paddingHorizontal: 20,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  centeredRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: "center",
    width: "45%",
    padding: 20,
    borderRadius: 15,
    backgroundColor: "rgba(245, 245, 245, 0.8)",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderWidth: 2,
    borderColor: "#4CAF50",
  },
  lulcContainer: {
    width: "45%", // Same width as other icons
  },
  navText: {
    color: "#000",
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  loadingIndicator: {
    marginTop: 100,
  },
});
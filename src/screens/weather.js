import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const API_KEY = "b92284d08176211ed7133bd2a2f4a111";
const DEFAULT_CITY = "Silchar";

const WeatherScreen = ({ navigation }) => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState("");
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const fetchWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        Alert.alert("Error", "City not found. Please try again.");
        return;
      }

      setWeather({
        temperature: `${data.main.temp}°C`,
        condition: data.weather[0].main,
        humidity: `${data.main.humidity}%`,
        windSpeed: `${data.wind.speed} km/h`,
        location: data.name,
      });

      setBackgroundImage(getBackgroundImage(data));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather:", error);
      Alert.alert("Error", "Unable to fetch weather data.");
      setLoading(false);
    }
  };

  const getBackgroundImage = (data) => {
    const weatherCondition = data.weather[0].main;
    const currentTime = data.dt * 1000; // Convert to milliseconds
    const sunrise = data.sys.sunrise * 1000;
    const sunset = data.sys.sunset * 1000;

    const isDaytime = currentTime > sunrise && currentTime < sunset;

    if (weatherCondition === "Clear") {
      return isDaytime
        ? require("../../assets/images/day.jpg") // Sunny day background
        : require("../../assets/images/night.jpg"); // Clear night background
    } else if (weatherCondition === "Clouds") {
      return isDaytime
        ? require("../../assets/images/cloudyday.jpg") // Cloudy day background
        : require("../../assets/images/night.jpg"); // Cloudy night background
    } else if (weatherCondition === "Rain") {
      return require("../../assets/images/rainyday.jpg"); // Rainy background
    } else if (weatherCondition === "Thunderstorm") {
      return require("../../assets/images/day.jpg"); // Thunderstorm background
    } else if (weatherCondition === "Snow") {
      return require("../../assets/images/day.jpg"); // Snowy background
    } else {
      return require("../../assets/images/day.jpg"); // Default background
    }
  };

  const handleSearch = () => {
    if (input.trim() !== "") {
      fetchWeather(input);
      setCity(input);
      setInput(""); // Clear search input after searching
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

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome5 name="arrow-left" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Weather Updates</Text>
        <TouchableOpacity onPress={() => fetchWeather(city)}>
          <MaterialIcons name="refresh" size={24} color="white" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Enter city name..."
          placeholderTextColor="gray"
          value={input}
          onChangeText={setInput}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Weather Display */}
      {loading ? (
        <ActivityIndicator size="large" color="white" style={styles.loadingIndicator} />
      ) : weather ? (
        <View style={styles.weatherCard}>
          <FontAwesome5 name="sun" size={50} color="yellow" />
          <Text style={styles.tempText}>{weather.temperature}</Text>
          <Text style={styles.locationText}>{weather.location}</Text>
          <View style={styles.weatherDetails}>
            <Text>🌫️ Humidity: {weather.humidity}</Text>
            <Text>💨 Wind Speed: {weather.windSpeed}</Text>
            <Text>🌤️ Condition: {weather.condition}</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.loadingText}>Fetching weather data...</Text>
      )}

      {/* Action Button */}
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Get More Details</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

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
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    margin: 15,
    backgroundColor: "white",
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  searchButton: {
    backgroundColor: "#FF9800",
    padding: 12,
    borderRadius: 8,
  },
  searchButtonText: {
    fontWeight: "bold",
    color: "white",
  },
  weatherCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    margin: 20,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  tempText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
  },
  locationText: {
    fontSize: 16,
    color: "#666",
  },
  weatherDetails: {
    marginTop: 10,
  },
  loadingText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    marginTop: 20,
  },
  detailsButton: {
    backgroundColor: "white",
    padding: 15,
    margin: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  detailsButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3B99FC",
  },
  loadingIndicator: {
    marginTop: 100,
  },
});

export default WeatherScreen;
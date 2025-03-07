import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Card } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const Stack = createStackNavigator();

const DashboardScreen = ({ navigation }) => {
 
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>🌤️ 33°C | Rain: 39mm</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.menuButton}>
          <FontAwesome5 name="user-circle" size={35} color="white" />
        </TouchableOpacity>
      </View>

      {/* Navigation Grid */}
      <View style={styles.navGrid}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Market")}>
          <FontAwesome5 name="store" size={40} color="white" />
          <Text style={styles.navText}>Market</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("Weather")}>
          <FontAwesome5 name="cloud-sun" size={40} color="white" />
          <Text style={styles.navText}>Weather</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate("GovtSchemes")}>
          <FontAwesome5 name="landmark" size={40} color="white" />
          <Text style={styles.navText}>Schemes</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Card style={styles.card}>
          <FontAwesome5 name="cloud" size={50} color="blue" />
          <Text style={styles.cardTitle}>Weather</Text>
          <Text style={styles.cardText}>Partly Cloudy | 33°C</Text>
        </Card>
        <Card style={styles.card}  >
          <FontAwesome5 name="seedling" size={50} color="green" />
          <Text style={styles.cardTitle} >Crops</Text>
          <Text style={styles.cardText}>Ideal for paddy farming</Text>
        </Card>
      </View>
    </View>
  );
};

// Other Screens
const ProfileScreen = () => <View style={styles.screen}><Text>👤 Farmer Profile</Text></View>;
const MarketScreen = () => <View style={styles.screen}><Text>📊 Market Prices</Text></View>;
const WeatherScreen = () => <View style={styles.screen}><Text>🌦️ Weather Updates</Text></View>;
const GovtSchemesScreen = () => <View style={styles.screen}><Text>🏛️ Govt Schemes</Text></View>;

// Stack Navigator
const DashboardNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Market Prices" component={MarketScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Govt Schemes" component={GovtSchemesScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#eef5fc", padding: 10 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: "#00796b", padding: 15, borderRadius: 10, marginBottom: 15 },
  headerText: { fontSize: 18, color: "white", fontWeight: "bold" },
  menuButton: { padding: 5 },
  navGrid: { flexDirection: "row", justifyContent: "space-around", marginBottom: 20 },
  navItem: { backgroundColor: "#009688", padding: 15, borderRadius: 10, alignItems: "center", width: "30%" },
  navText: { color: "white", marginTop: 5, fontWeight: "bold" },
  content: { flex: 1, alignItems: "center" },
  card: { 
    width: "90%", padding: 20, marginVertical: 10, alignItems: "center", 
    elevation: 5, backgroundColor: "white",
  }
  })

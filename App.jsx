import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import LandingScreen from "./src/screens/landing";
import LoginScreen from "./src/screens/login";
import DashboardScreen from "./src/screens/dashboard";
import Market from "./src/screens/market";
import Weather from "./src/screens/weather";
import Profile from "./src/screens/profile";
import GovtSchemes from "./src/screens/govtschemes";
import PreHarvest from "./src/screens/preharvest";
import Registration from "./src/screens/Registration";
import Crops from "./src/screens/crop";
import CropRecomand from "./src/screens/croprecomand";
import CropDetails from "./src/components/showcropdetails";
import PostHarvest from "./src/screens/postharvest";
import InsuranceProviders from "./src/components/info/insurence";
import LoanSchemesPage from "./src/components/info/loanProvider";
import SubsidyProgramsPage from "./src/components/info/subsidyProvider";
const Stack = createStackNavigator();

const App = () => {
  const [initialRoute, setInitialRoute] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        if (user) {
          setInitialRoute("Dashboard");
          setIsRegistered(true); // User is registered
        } else {
          setInitialRoute("Landing");
          setIsRegistered(false); // User is not registered
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setInitialRoute("Landing");
        setIsRegistered(false);
      }
    };

    checkUser();
  }, []);

  if (initialRoute === null) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute}>
        <Stack.Screen 
          name="Landing" 
          component={LandingScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: "Login" }} 
        />
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen} 
          options={({ navigation }) => ({
            title: "Dashboard",
            headerRight: () => (
              !isRegistered && (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Registration")}
                  style={{ marginRight: 15 }}
                >
                  <Text style={{ color: '#007AFF' }}>Register</Text>
                </TouchableOpacity>
              )
            )
          })} 
        />
        <Stack.Screen 
          name="Registration" 
          component={Registration} 
          options={{ 
            title: "Registration",
            // Hide from drawer or other navigation if needed
          }} 
        />
        {/* Other screens */}
        <Stack.Screen name="Market" component={Market} />
        <Stack.Screen name="Weather" component={Weather} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="GovtSchemes" component={GovtSchemes} />
        <Stack.Screen name="Preharvest" component={PreHarvest} />
        <Stack.Screen name="Crops" component={Crops} />
        <Stack.Screen name="CroprRecommand" component={CropRecomand} />
        <Stack.Screen name="CropDetails" component={CropDetails} />
        <Stack.Screen name="postharvest" component={PostHarvest} />
        <Stack.Screen name="InsurenceProvider" component={InsuranceProviders} />
        <Stack.Screen name="LoanProvider" component={LoanSchemesPage} />
        <Stack.Screen name="SubsidyProvider" component={SubsidyProgramsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
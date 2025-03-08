import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./screens/landing";
import LoginScreen from "./screens/login";
import DashboardScreen from "./screens/dashboard";
import market from "./screens/market";
import weather from "./screens/weather";
import profile from "./screens/profile";
import govtschemes from "./screens/govtschemes";
import preharvest from "./screens/preharvest";
import Registration from "./screens/Registration";



// Create Stack Navigator
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Market" component={market} />
        <Stack.Screen name="Weather" component={weather} />
        <Stack.Screen name="Profile" component={profile} />
        <Stack.Screen name="GovtSchemes" component={govtschemes} />
        <Stack.Screen name="Preharvest" component={preharvest} />
        <Stack.Screen name="Registration" component={Registration}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

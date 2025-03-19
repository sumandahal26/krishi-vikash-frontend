import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./src/screens/landing";
import LoginScreen from "./src/screens/login";
import DashboardScreen from "./src/screens/dashboard";
import market from "./src/screens/market";
import weather from "./src/screens/weather";
import profile from "./src/screens/profile";
import govtschemes from "./src/screens/govtschemes";
import PreHarvest from "./src/screens/preharvest";
import Registration from "./src/screens/Registration";
import Crops from "./src/screens/crop";

import CropRecomand from "./src/screens/croprecomand";
import CropDeatislScreen from "./src/screens/cropdetails";
import CropDetails from "./src/components/showcropdetails";
import postharvest from "./src/screens/postharvest";
import BottomTabs from "./src/components/bottomTab";

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
        <Stack.Screen name="Preharvest" component={PreHarvest} />
        <Stack.Screen name="Registration" component={Registration}/>
      
        <Stack.Screen name="Crops" component={Crops}/>
        <Stack.Screen name="CroprRecommand" component={CropRecomand}/>
        <Stack.Screen name="CropDetails" component={CropDetails}/>
        <Stack.Screen name="postharvest" component={postharvest}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

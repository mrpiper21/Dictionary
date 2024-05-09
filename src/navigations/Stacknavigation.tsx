import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "../screens/settings/Settings";
import HomeNavigation from "./home";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createNativeStackNavigator();

const Stacknavigation = () => {
  const [changeRoute, setChangeRoute] = useState(false);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeNavigation} />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation;

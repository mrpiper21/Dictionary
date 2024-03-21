import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Settings from "../screens/settings/Settings";
import HomeNavigation from "./home";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Stacknavigation = () => {
  const [changeRoute, setChangeRoute] = useState(false)

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "teal" },
          tabBarActiveTintColor: "white",
        }}
      >
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="white" size={24} />
            ),
          }}
          name="Home"
          component={HomeNavigation}
        />
        <Tab.Screen name="Setting" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation;

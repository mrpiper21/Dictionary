import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dictionary from "../../screens/home/Dictionary";
import Games from "../../screens/home/Games";
import Home from "../../screens/home/Home";
import React from "react";

const Homestack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Homestack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Homestack.Screen name="Home" component={Home} />
      <Homestack.Screen name="Dictionary" component={Dictionary} />
      <Homestack.Screen name="Game" component={Games} />
    </Homestack.Navigator>
  );
};

export default HomeNavigation;

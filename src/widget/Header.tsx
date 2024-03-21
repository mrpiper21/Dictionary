import { View, Text } from "react-native";
import React from "react";
import { responsive } from "../helpers/Globalhelper";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Header = () => {
  return (
    <View
      style={{ height: responsive.deviceHeight * 0.09 }}
      className="bg-teal-600 flex flex-row items-center justify-between px-3"
    >
      <Ionicons name="arrow-back-outline" size={33} color="white" />
      <Text className="text-white font-bold text-2xl">Dictionary</Text>
      <AntDesign name="bars" size={32} color="white" />
    </View>
  );
};

export default Header;

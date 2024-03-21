import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { responsive } from "../../helpers/Globalhelper";
import {
  FontAwesome,
  SimpleLineIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const Activity = () => {
  const navigation = useNavigation() as any;
  return (
    <View className="flex flex-row justify-between px-4">
      <TouchableOpacity onPress={() => navigation.navigate("Dictionary")}>
        <View
          style={{
            width: responsive.deviceWidth * 0.44,
            height: responsive.deviceWidth * 0.42,
          }}
          className="flex bg-teal-500 rounded-xl justify-center"
        >
          <View className="space-y-2 justify-center items-center">
            <FontAwesome name="book" size={50} color="white" />
            <Text className="text-lg font-semibold text-white">Dictionary</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View
          style={{
            width: responsive.deviceWidth * 0.44,
            height: responsive.deviceWidth * 0.42,
          }}
          className="flex bg-teal-500 rounded-xl justify-center"
        >
          <View className="space-y-2 justify-center items-center">
            <SimpleLineIcons name="game-controller" size={50} color="white" />
            <Text className="text-lg font-semibold text-white">Games</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Activity;

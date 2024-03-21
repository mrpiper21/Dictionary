import { View, Text } from "react-native";
import React from "react";
import { responsive } from "../../helpers/Globalhelper";

const Worddefinition = () => {
  return (
    <View
      style={{ height: responsive.deviceHeight * 0.34 }}
      className="bg-white rounded-xl mt-3"
    >
      <Text className="text-xl font-bold text-teal-700">Definition</Text>
      <Text className="text-xl">
        <Text className="font-bold text-blue-400">translator - </Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        amet illo repudiandae alias consectetur tempora saepe explicabo
        laudantium rerum vitae, ipsum ipsam tempore natus culpa, deserunt
        distinctio, cupiditate neque quae!
      </Text>
    </View>
  );
};

export default Worddefinition;

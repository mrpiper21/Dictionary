import { View, Text } from "react-native";
import React from "react";
import {
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const WordOfTheDay = () => {
  return (
    <View style={{ height: "auto" }} className="px-3">
      <View
        style={{ height: "auto" }}
        className="bg-teal-500 mt-4 rounded-xl p-4"
      >
        {/**word of the day and date */}
        <View className="items-center space-y-2">
          <Text className="text-underline text-xl text-white">
            Word of the day
          </Text>
          <Text className="text-white">March 11, 2024</Text>
        </View>

        {/**Word */}
        <View className="items-center justify-center space-x-6 flex-row mt-5">
          <Text className="text-white font-bold text-5xl">Word</Text>
          <AntDesign name="sound" size={24} color="white" />
        </View>

        {/**Like and share icons */}
        <View className="items-center flex-row justify-center mt-2 space-x-3">
          <AntDesign name="hearto" size={33} color="white" />
          <EvilIcons name="share-google" size={33} color="white" />
        </View>

        {/**Word definition */}
        <View
          style={{ height: "auto", padding: wp(1) }}
          className="bg-white rounded-xl mt-2"
        >
          <Text
            style={{ fontSize: wp(4.5) }}
            className="font-bold text-teal-700"
          >
            Definition
          </Text>
          <Text>
            <Text className="font-bold text-blue-400">translator - </Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Perspiciatis amet illo repudiandae alias consectetur tempora saepe
            explicabo laudantium rerum vitae, ipsum ipsam tempore natus culpa,
            deserunt distinctio, cupiditate neque quae! Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Dolore atque quaerat consequuntur
            tenetur facere assumenda magnam ad omnis. Saepe, eligendi placeat
            enim similique vel et suscipit fuga iusto eaque consequatur. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Eius eos quod
            nostrum illo, repellendus in ducimus repudiandae quia a eveniet
            tempore unde ullam, perferendis dignissimos iure aperiam et
            accusantium officia. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ratione praesentium recusandae aut nihil quasi
            officia facilis, vel laboriosam, hic sed eveniet obcaecati velit
            dolore, incidunt iste! Ab deleniti totam modi?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WordOfTheDay;

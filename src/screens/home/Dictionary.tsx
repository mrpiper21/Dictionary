import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { responsive } from "../../helpers/Globalhelper";
import { Ionicons, Entypo, AntDesign, Foundation } from "@expo/vector-icons";
import Header from "../../widget/Header";
import uploadDictionaryData from "../../../features/service/Updloadata";

const Dictionary = () => {
  return (
    <SafeAreaView className="flex-1">
      <Header />
      <View className="flex items-center">
        <View
          style={{ width: responsive.deviceWidth * 0.97 }}
          className="bg-slate-200 shadow-md shadow-slate-800 flex flex-row justify-around p-3 mt-2 rounded-lg"
        >
          <Foundation name="book" size={44} color="blue" />
          <Text className="font-bold text-xl">English US</Text>
          <TouchableOpacity onPress={() => uploadDictionaryData()}>
            <AntDesign name="clouddownload" size={44} color="orange" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dictionary;

import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { responsive } from "../../helpers/Globalhelper";
import { Ionicons, Entypo, AntDesign, Foundation } from "@expo/vector-icons";
import Header from "../../widget/Header";
import uploadDictionaryData from "../../features/service/Updloadata";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Animated, { useSharedValue } from "react-native-reanimated";

const Dictionary = () => {
  const [isLoading, setisLoading] = useState(false);
  // const width = useSharedValue(100);

  // const handleDownload = async () => {
  //   uploadDictionaryData(setisLoading);
  // };
  return (
    <View className="flex">
      <Header />
      <View className="flex items-center">
        <View
          style={{
            width: responsive.deviceWidth * 0.97,
            height: responsive.deviceHeight * 0.18,
          }}
          className="bg-slate-200 shadow-md shadow-slate-800 flex flex-row items-center justify-around p-3 mt-2 rounded-lg"
        >
          <Foundation name="book" size={55} color="blue" />
          <View className="space-y-">
            <Text className="fornt-bold text-3xl">English US</Text>
            <Text className="font-semibold">Download over 10000 words </Text>
          </View>

          {isLoading ? (
            <LottieView
              style={{
                width: responsive.deviceWidth * 0.1,
                height: responsive.deviceHeight * 0.1,
              }}
              source={require("../../../assets/Uploading.json")}
              autoPlay
              loop
            />
          ) : (
            <TouchableOpacity>
              <AntDesign name="clouddownload" size={44} color="orange" />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {/* <Animated.View
        style={{height: 100, backgroundColor: "violet" }}
      /> */}
    </View>
  );
};

export default Dictionary;

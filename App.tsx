import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import LottieView from "lottie-react-native";
import { responsive } from "./src/helpers/Globalhelper";
import Stacknavigation from "./src/navigations/Stacknavigation";
import Splashnavigation from "./src/navigations/Splash";
import { useNavigation } from "@react-navigation/native";
import uploadDictionaryData from "./features/service/Updloadata";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const App = () => {
  const [route, setRoute] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  setTimeout(() => {
    setIsLoading(false);
    setRoute(true);
  }, 2000);

  return isLoading ? (
    <View className="flex-1 justify-end">
      <LottieView
        style={{
          width: responsive.deviceWidth,
          height: responsive.deviceHeight,
        }}
        source={require("./assets/Uploading.json")}
        autoPlay
        loop
      />
      <View className="sticky bottom-60 items-center justify-center">
        <Text className="text-xl">Please wait...</Text>
      </View>
    </View>
  ) : route ? (
    <Stacknavigation />
  ) : (
    <Splashnavigation />
  );
};

export default App;

import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { responsive } from "../src/helpers/Globalhelper";

const Splash = () => {
  return (
    <View>
      <LottieView
        style={{
          width: responsive.deviceWidth,
          height: responsive.deviceHeight,
        }}
        source={require("../assets/splash.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;

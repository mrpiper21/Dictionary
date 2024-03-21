import React from "react";
import { View, Text } from "react-native";
import LottieView from "lottie-react-native";
import { responsive } from "../helpers/Globalhelper";

const Splash = () => {
  return (
    <View>
      <LottieView
        style={{
          width: responsive.deviceWidth,
          height: responsive.deviceHeight,
        }}
        source={require("../../assets/loader.json")}
        autoPlay
        loop
      />
    </View>
  );
};

export default Splash;

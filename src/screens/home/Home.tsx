import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import {
  FontAwesome,
  SimpleLineIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";
import { responsive } from "../../helpers/Globalhelper";
import Worddefinition from "../../components/home/Worddefinition";
import { useNavigation } from "@react-navigation/native";
import WordOfTheDay from "../../components/home/WordOfTheDay";
import Activity from "../../components/home/Activity";
import SearchBar from "../../components/home/SearchBar";

const Home = () => {
  return (
    <SafeAreaView className="flex">
      <SearchBar />
      {/**catalog */}
      <View>
        <View className="mt-4">
          <Activity />
        </View>
        {/**word of the day */}
        <WordOfTheDay />
      </View>
    </SafeAreaView>
  );
};

export default Home;

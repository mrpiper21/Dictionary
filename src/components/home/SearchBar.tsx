import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { responsive } from "../../helpers/Globalhelper";
import { AntDesign, EvilIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { useActionData } from "react-router-dom";
import AsyncStorageService from "../../features/service/Datastore";

const SearchBar = ({
  searchQuery,
  handleSearch,
  setSearchQuery,
  onFocus,
  onBlur,
}) => {
  return (
    <View
      className="bg-teal-600 justify-center p-3 flex flex-row items-center space-x-3"
      style={{
        height: responsive.deviceHeight * 0.1,
      }}
    >
      <View className="flex flex-row items-center space-x-3 mt-1">
        <AntDesign name="bars" size={32} color="white" />
        {/**Searchbar */}
        <View className="bg-white rounded-lg flex flex-row items-center p-1 justify-around">
          <EvilIcons name="search" size={24} color="black" />
          <TextInput
            className="py-1"
            style={{ width: responsive.deviceWidth * 0.55 }}
            placeholder="Search for a word"
            onChangeText={(text) => setSearchQuery(text)}
            onFocus={onFocus}
            onBlur={onBlur}
            // searchQuery={searchQuery}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={handleSearch}
        className="bg-slate-300 px-2 rounded-lg items-start justify-center"
        style={{ height: responsive.deviceHeight * 0.045 }}
      >
        <Text className="font-bold">Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

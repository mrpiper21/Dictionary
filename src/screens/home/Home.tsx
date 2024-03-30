import { View, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import WordOfTheDay from "../../components/home/WordOfTheDay";
import Activity from "../../components/home/Activity";
import SearchBar from "../../components/home/SearchBar";
import DictionaryEntry from "../../components/home/DataEntry";
import AsyncStorageService from "../../features/service/Datastore";
import searchDefinition from "../../../hooks/searchDefinition";
import { useQuery } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { getDefinitions } from "../../features/service/Updloadata";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [data, setData] = useState(false);

  const handleSearch = async () => {
    setIsTyping(true);
    setSearchQuery(searchQuery);

    try {
      const Data = await getDefinitions(searchQuery);
      setData(Data);
      const d = JSON.stringify(Data);
      console.log(d);
    } catch (error) {
      console.error("Failed to fetch definition. Please try again later.");
    } finally {
      setIsTyping(false);
    }
  };

  // const { isPending, error, data } = useQuery({
  //   queryKey: ["word"],
  //   queryFn: () =>
  //     axios
  //       .get(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
  //       .then((res) => res.data),
  // });

  // console.log(data);

  return (
    <View className="flex">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      />
      {/**catalog */}
      {data && typeof data === "object" && Array.isArray(data) ? (
        data.map((item) => (
          <FlatList
            data={item.word}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <DictionaryEntry
                word={item.word}
                phonetic={item.phonetic}
                meanings={item.meanings}
              />
            )}
          />
        ))
      ) : (
        <View>
          <View className="mt-4">
            <Activity />
          </View>
          {/**word of the day */}
          <WordOfTheDay />
        </View>
      )}
    </View>
  );
};

export default Home;

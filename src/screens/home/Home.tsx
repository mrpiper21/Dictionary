import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import WordOfTheDay from "../../components/home/WordOfTheDay";
import Activity from "../../components/home/Activity";
import SearchBar from "../../components/home/SearchBar";
import DictionaryEntry from "../../components/home/DataEntry";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [Data, setData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery.trim()}`
      ).then((res) => res.json()),
    enabled: isSearching,
  });
  useEffect(() => {
    if (data) {
      setData(data);
      console.log(Data);
      setIsSearching(false);
    }
    if (error) {
      console.log(error);
    }
    if (searchQuery === "") {
      setData([]);
    }
  }, [data, error, searchQuery]);

  return (
    <View className="flex-1 bg-white">
      <SearchBar
        setIsSearching={setIsSearching}
        setSearchQuery={setSearchQuery}
        onFocus={() => setIsTyping(true)}
        onBlur={() => setIsTyping(false)}
      />
      {/**catalog */}
      {isSearching ? (
        <View className="flex-1 justify-center items-center">
          <ActivityIndicator />
        </View>
      ) : Data &&
        Data.length !== 0 &&
        typeof Data === "object" &&
        Array.isArray(Data) ? (
        <FlatList
          data={Data}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <DictionaryEntry
              word={item.word}
              phonetic={item.phonetic}
              meanings={item.meanings}
              phonetics={item.phonetics}
              origin={item.origin}
            />
          )}
        />
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

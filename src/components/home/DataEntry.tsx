import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DictionaryEntry = ({ word, phonetic, meanings, phonetics, origin }) => {
  return (
    <View className="flex items-center justify-center px-2 bg-white">
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.phonetic}>{phonetic}</Text>
      {origin && <Text>Origin: {origin}</Text>}
      <View>
        {phonetics?.map((item, index) => {
          <View key={index}>
            <Text>Phonetic: {item.text}</Text>
            <Text>Audio URL: {item.audio}</Text>
          </View>;
        })}
      </View>
      {meanings && (
        <>
          {meanings.map((meaning, index) => (
            <View key={index} style={styles.meaningContainer}>
              <Text style={styles.partOfSpeech} className="text-violet-800">
                {meaning.partOfSpeech}
              </Text>
              {meaning.definitions.map((definition, definitionIndex) => (
                <View key={definitionIndex} style={styles.definitionContainer}>
                  <Text style={styles.definition}>{definition.definition}</Text>
                  {definition.synonyms.length > 0 && (
                    <Text style={styles.synonyms}>
                      Synonyms: {definition.synonyms.join(", ")}
                    </Text>
                  )}
                  {definition.antonyms.length > 0 && (
                    <Text style={styles.antonyms}>
                      Antonyms: {definition.antonyms.join(", ")}
                    </Text>
                  )}
                  {definition.example && (
                    <Text style={styles.example}>
                      Example: {definition.example}
                    </Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  entryContainer: {
    marginBottom: 16,
  },
  word: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  phonetic: {
    fontStyle: "italic",
  },
  meaningContainer: {
    marginBottom: 16,
  },
  partOfSpeech: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  definitionContainer: {
    marginBottom: 8,
  },
  definition: {
    fontSize: 16,
    fontWeight: "500",
    // backgroundColor: "#E1F7F5",
    color: "#00215E",
  },
  synonyms: {
    fontStyle: "italic",
    marginBottom: 4,
  },
  antonyms: {
    fontStyle: "italic",
    marginBottom: 4,
  },
  example: {
    fontStyle: "italic",
  },
});

export default DictionaryEntry;

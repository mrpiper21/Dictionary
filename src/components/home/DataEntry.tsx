import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DictionaryEntry = ({ word, phonetic, meanings }) => {
  return (
    <View className="flex items-center justify-center">
      <Text style={styles.word}>{word}</Text>
      <Text style={styles.phonetic}>{phonetic}</Text>
      {meanings && (
        <>
          {meanings.map((meaning, index) => (
            <View key={index} style={styles.meaningContainer}>
              <Text style={styles.partOfSpeech}>{meaning.partOfSpeech}</Text>
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

import axios from "axios";
import AsyncStorageService from "./Datastore";

const getDefinitions = async (word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (response.status === 200) {
      return response.data;
    } else {
      return null;
    }
  } catch (err) {
    const statusCode = err.response ? err.response.status : undefined;
    console.log(`Failed to fetch data for ${word}: Status Code ${statusCode}`);
    return null;
  }
};

const uploadDictionaryData = async () => {
  let totalWords = 0;
  try {
    const response = await axios.get(
      "https://www.mit.edu/~ecprice/wordlist.10000"
    );
    const words = response.data.split("\n");
    const dict = [];

    for (let word of words) {
      totalWords++;

      if (word.length < 200) {
        const response = await getDefinitions(word);

        if (response) {
          if (response.status !== 200) {
            console.log(
              `Failed to fetch definition for ${word} - Status Code: ${response.status}`
            );
            continue;
          }

          const definition = response.data;

          if (definition) {
            dict.push(definition);
            console.log(dict);
          }
        }
      }
    }

    await AsyncStorageService.setItem("dictionary", dict);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

export default uploadDictionaryData;

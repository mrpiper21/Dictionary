import axios from "axios";

export interface WordDefinition {
  WordData: [
    {
      word: string;
      phonetics: any[];
      meanings: [
        {
          partOfSpeech: string;
          definitions: [
            {
              definition: string;
              synonyms?: any[];
              antonyms?: any[];
            },
            {
              definition: string;
              synonyms?: any[];
              antonyms: any[];
            }
          ];
        }
      ];
    }
  ];
}

const Fetch = async (word) => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (response.status === 200) {
      return response.data.json();
    } else {
      return null;
    }
    // return response.status === 200 ? response.data : null;
  } catch (err) {
    console.log("Failed to fetch data", err);
    return null;
  }
};

export default Fetch;

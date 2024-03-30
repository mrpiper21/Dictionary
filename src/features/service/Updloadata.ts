import axios, { AxiosError } from "axios";
import AsyncStorageService from "./Datastore";

import Bottleneck from "bottleneck";
import { useState } from "react";

const limiter = new Bottleneck({
  minTime: 1000, // minimum time between requests
});

export const getDefinitions = async (
  word: string
): Promise<AxiosResponse<any> | null> => {
  try {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response) {
        if (error.response.status === 404) {
          console.log(`No definition found for ${word}`);
          return null;
        } else if (
          error.response.status === 500 ||
          !skippedErrors.includes(404)
        ) {
          skippedErrors.push(404);
        }
      }
    }

    throw error;
  } finally {
    for (const status of skippedErrors) {
      if (status === 404) {
        console.log(
          `Failed to fetch definition for ${word} - Status Code: ${status}`
        );
        break;
      }
    }
    skippedErrors = skippedErrors.filter((status) => status !== 404);
  }
};

let skippedErrors: number[] = [];

const uploadDictionaryData = async (setLoading: (loading: boolean) => void) => {
  let totalWords = 0;
  setLoading(true);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary",
    params: { word: "bright" },
    headers: {
      "X-RapidAPI-Key": "4bcd0bddffmsh09d7da8a56a70cep1c8a89jsn9c11bb0bb360",
      "X-RapidAPI-Host": "dictionary-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  try {
    const response = await axios.get(
      "https://www.mit.edu/~ecprice/wordlist.10000"
    );
    const words = response.data.split("\n");
    const dict: any[] = [];

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
  setLoading(false);
};

export default uploadDictionaryData;

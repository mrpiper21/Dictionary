import axios from "axios";

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

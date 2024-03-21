import AsyncStorage from "@react-native-async-storage/async-storage";

class AsyncStorageService {
  static async getItem(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value === null) return null;
      const parsedValue = JSON.parse(value);
      return parsedValue;
    } catch (error) {
      console.error("Error retrieving data from AsyncStorage:", error);
      return null;
    }
  }

  static async setItem(key: string, value: any) {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Error storing data in AsyncStorage:", error);
    }
  }
}

export default AsyncStorageService;

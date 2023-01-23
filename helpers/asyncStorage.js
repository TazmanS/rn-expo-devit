import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEYS = {
  TOKEN: "RN_TOKEN",
};

const storageStoreData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const storageGetData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
  }
};

export { storageStoreData, storageGetData, STORAGE_KEYS };

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { storageGetData, STORAGE_KEYS } from "../helpers/asyncStorage";
import GuestNavigation from "./GuestNavigation";
import UserNavigation from "./UserNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";

const Drawer = createDrawerNavigator();

const NavigationMain = () => {
  const [isAuth, setIsAuth] = useState(false);

  const getToken = async () => {
    const token = await storageGetData(STORAGE_KEYS.TOKEN);
    if (token) {
      setIsAuth(true);
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {/* <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator> */}
      <SafeAreaProvider>
        {isAuth ? <UserNavigation /> : <GuestNavigation />}
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default NavigationMain;

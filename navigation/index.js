import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const NavigationMain = () => {
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default NavigationMain;

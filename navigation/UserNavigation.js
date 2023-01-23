import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactUsScreen from "../screens/ContactUsScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={HomeScreen} />
      <Stack.Screen name="AboutStack" component={AboutScreen} />
    </Stack.Navigator>
  );
};
const ContactStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ContactStack" component={ContactUsScreen} />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={MainStackNavigator} />
      <Tab.Screen name="ContactTab" component={ContactStackNavigator} />
    </Tab.Navigator>
  );
};

const UserNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Contact" component={ContactStackNavigator} />
    </Drawer.Navigator>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={MainStackNavigator} />
    //   <Tab.Screen name="Contact" component={ContactStackNavigator} />
    // </Tab.Navigator>
    // <Stack.Navigator>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="About" component={AboutScreen} />
    // </Stack.Navigator>
  );
};

export default UserNavigation;

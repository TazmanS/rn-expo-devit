import React from "react";
import { Image, View, StyleSheet } from "react-native";
import LogoImg from "../images/logo.png";

const Logo = () => {
  return (
    <View style={styles.root}>
      <Image source={LogoImg} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: "11%",
    alignItems: "center",
  },
});

export default Logo;

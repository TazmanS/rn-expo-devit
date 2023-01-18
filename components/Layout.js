import React from "react";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Layout = (props) => {
  const { children, styles } = props;
  const insets = useSafeAreaInsets();

  return (
    <ScrollView
      style={{
        flex: 1,
        // justifyContent: "space-between",
        // alignItems: "center",
        backgroundColor: "white",
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: 32,
        paddingRight: 32,
        ...styles,
      }}
    >
      {children}
    </ScrollView>
  );
};

export default Layout;

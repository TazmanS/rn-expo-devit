import React from "react";
import { Text } from "react-native";
import { COLORS } from "../helpers/colors";

const BaseText = (props) => {
  const { children, styles } = props;
  return (
    <Text
      style={{
        color: COLORS.MAIN_BLACK_TEXT,
        fontSize: 14,
        fontFamily: "Poppins",
        ...styles,
      }}
    >
      {children}
    </Text>
  );
};

export default BaseText;

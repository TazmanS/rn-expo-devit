import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import BaseText from "./BaseText";
import PropTypes from "prop-types";
import { COLORS } from "../helpers/colors";

const BaseButton = (props) => {
  const { children, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <BaseText styles={styles.text}>{children}</BaseText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.BUTTON_YELLOW,
    borderRadius: 20,
    minHeight: 62,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "500",
    fontSize: 18,
  },
});

BaseButton.propTypes = {
  onPress: PropTypes.func,
};

BaseButton.defaultProps = {
  onPress: () => null,
};

export default BaseButton;

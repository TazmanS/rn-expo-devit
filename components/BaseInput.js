import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../helpers/colors";
import { INPUT_TYPES } from "../helpers/inputConsts";
import BaseText from "./BaseText";
import EyeOpenIcon from "./Icons/EyeOpenIcon";
import EyeCloseIcon from "./Icons/EyeCloseIcon";

const BaseInput = (props) => {
  const {
    value,
    setValue,
    placeholder,
    type,
    label,
    rootStyles,
    error,
    setError,
    touched,
  } = props;

  const [isTextSecure, setIsTextSecure] = useState(
    type === INPUT_TYPES.PASSWORD
  );

  const handleIsTextSecure = () => {
    setIsTextSecure(!isTextSecure);
  };

  const hideError = () => {
    setError();
  };

  const COLOR = !touched
    ? COLORS.INPUT_LABEL
    : error
    ? COLORS.ERROR_COLOR
    : COLORS.INPUT_LABEL;

  return (
    <View style={rootStyles}>
      <BaseText
        styles={{
          ...styles.labelAndError,
          color: COLOR,
        }}
      >
        {label} {touched && error && `- ${error}`}
      </BaseText>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
        keyboardType="default"
        secureTextEntry={isTextSecure}
        placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
        placeholderStyle={styles.placeholder}
        onFocus={hideError}
      />
      {type === INPUT_TYPES.PASSWORD && (
        <View style={styles.icon}>
          <TouchableOpacity onPress={handleIsTextSecure}>
            {isTextSecure ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {},
  input: {
    // letterSpacing: 10,
    fontSize: 16,
    fontWeight: "500",
    borderBottomColor: COLORS.INPUT_BOTTOM_BORDER,
    borderBottomWidth: 1,
  },
  placeholder: {
    color: "red",
    fontWeight: "400",
  },
  icon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
  labelAndError: {
    textTransform: "capitalize",
    fontWeight: "500",
  },
});

BaseInput.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([INPUT_TYPES.TEXT, INPUT_TYPES.PASSWORD]),
  label: PropTypes.string,
  rootStyles: PropTypes.object,
  error: PropTypes.string,
  setError: PropTypes.func,
  touched: PropTypes.bool,
};

BaseInput.defaultProps = {
  value: "",
  setValue: () => null,
  placeholder: "",
  type: "text",
  label: "",
  rootStyles: {},
  error: "",
  setError: () => null,
  touched: false,
};

export default BaseInput;

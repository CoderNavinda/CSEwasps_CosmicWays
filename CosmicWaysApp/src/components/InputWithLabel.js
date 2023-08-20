import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const InputWithLabel = ({
  label,
  value,
  onChangeText,
  secureTextEntry,
  placeholder,
}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    // marginBottom: 20,
  },
  labelContainer: {
    position: "absolute",
    top: -10,
    left: 10,
    backgroundColor: "white",
    zIndex: 2, // Label should be above the input
  },
  label: {
    fontSize: 12,
    color: "#363062",
    backgroundColor: "white", // Label background color to "erase" input background
    paddingHorizontal: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#363062",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 25, // To make space for the label
    fontSize: 16,
    width: 331.76,
  },
});

export default InputWithLabel;

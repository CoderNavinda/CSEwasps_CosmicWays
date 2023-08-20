import { Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";

export default function PressButton({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1C0E57", // Button background color
    borderRadius: 8,
    padding: 10,
    width: 331.76,
    height: 60,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "Roboto",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});

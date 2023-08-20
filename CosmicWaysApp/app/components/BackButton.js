import { View, Text, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
export default function BackButton() {
  return (
    <TouchableOpacity style={styles.backButton} onPress={console.log("hi")}>
      <Ionicons name="arrow-back" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: "#12092F",
    alignSelf: "flex-start", // Align to the top left corner
    paddingVertical: 10,
    paddingHorizontal: 10, // You can adjust this if needed
    borderRadius: 6,
    position: "absolute",
  },
});

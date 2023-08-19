import { StatusBar } from "react-native";
import React from "react";
import Navigation from "./navigation";

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor="#250E67" // Replace with your background color
        barStyle="light-content" // You can use 'light-content' for light status bar text
      />
      <Navigation />
    </>
  );
}

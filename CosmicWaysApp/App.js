import { StatusBar } from "react-native";
import React from "react";
import Navigation from "./navigation";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#250E67" barStyle="light-content" />
      <Navigation />
    </>
  );
}

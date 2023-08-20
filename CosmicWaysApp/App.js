import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { db, collection, getDocs } from "./firebase.config.js";

export default function App() {
  async function testFirebase() {
    const postsCol = collection(db, "destinations");
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    console.log(postList);
  }
  useEffect(() => {
    testFirebase();
  }, []);
  return (
    <View style={styles.container}>
      <Text>shit!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

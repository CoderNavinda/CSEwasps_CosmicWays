import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { db, collection, getDocs } from "./firebase.config.js";
import HomeNavigator from "./src/navigation/HomeNavigator.js";

export default function App() {
  async function testFirebase() {
    const postsCol = collection(db, "destinations");
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    console.log(postList);
  }
  useEffect(() => {
    // testFirebase();
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#250E67",
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <HomeNavigator />
    </SafeAreaView>
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



// In App.js in a new project





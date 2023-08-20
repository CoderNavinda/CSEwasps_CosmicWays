import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { db, collection, getDocs } from "./firebase.config.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeatSelectionScreen from './components/SeatSelectionScreen';
import PaymentConfirmationScreen from './components/PaymentConfirmationScreen';

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SeatSelection">
        <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

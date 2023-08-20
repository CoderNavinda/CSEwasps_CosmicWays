import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  SeatSelectionScreen,
  PaymentConfirmationScreen,
  MyTrips,
  TripDetails,
} from "../screens";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="TripDetails"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmationScreen}
        />
        <Stack.Screen name="MyTrips" component={MyTrips} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;

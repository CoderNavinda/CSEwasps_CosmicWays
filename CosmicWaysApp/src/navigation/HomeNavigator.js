import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { SeatSelectionScreen, PaymentConfirmationScreen } from "../screens";
// import colors from "../config/colors";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="paymentConfirmation"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;

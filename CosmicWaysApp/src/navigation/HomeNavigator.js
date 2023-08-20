import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import {
  SeatSelectionScreen,
  PaymentConfirmationScreen,
  MyTrips,
  TripDetails,
  HomeScreen,
  ExploreDestination,
  DestinationDetails,
  RegisterScreen,
  VerificationScreen,
} from "../screens";
import routes from "./routes";
import LoginScreen from "../screens/LoginScreen";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.REGISTER}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmationScreen}
        />
        <Stack.Screen name="MyTrips" component={MyTrips} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ExploreDestinations"
          component={ExploreDestination}
        />
        <Stack.Screen
          name="DestinationDetails"
          component={DestinationDetails}
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Verification" component={VerificationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;

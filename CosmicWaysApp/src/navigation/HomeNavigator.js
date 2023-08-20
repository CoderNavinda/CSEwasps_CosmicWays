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
  SplashScreen,
  LoginRegister,
} from "../screens";
import routes from "./routes";
import LoginScreen from "../screens/LoginScreen";
import FilghtList from "../screens/flightList";

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={routes.SEAT_SELECTION}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
        <Stack.Screen
          name="PaymentConfirmation"
          component={PaymentConfirmationScreen}
        />
        <Stack.Screen name="MyTrips" component={MyTrips} />
        <Stack.Screen name="TripDetails" component={TripDetails} />
        <Stack.Screen name="FlightList" component={FilghtList} />

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
        <Stack.Screen name="LoginRegister" component={LoginRegister} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeNavigator;

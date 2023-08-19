import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeatSelectionScreen from './components/SeatSelectionScreen';
import PaymentConfirmationScreen from './components/PaymentConfirmationScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SeatSelection">
        <Stack.Screen name="SeatSelection" component={SeatSelectionScreen} />
        <Stack.Screen name="PaymentConfirmation" component={PaymentConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
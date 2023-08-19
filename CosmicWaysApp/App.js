import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SeatSelectionScreen from './components/SeatSelectionScreen';
import PaymentConfirmationScreen from './components/PaymentConfirmationScreen';

const AppNavigator = createStackNavigator(
  {
    SeatSelection: { screen: SeatSelectionScreen },
    PaymentConfirm: { screen: PaymentConfirmationScreen}
    // Add more screens here
  },
  {
    initialRouteName: 'SeatSelection',
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <NavigationContainer>
      <AppContainer />
    </NavigationContainer>
  );
};

export default App;

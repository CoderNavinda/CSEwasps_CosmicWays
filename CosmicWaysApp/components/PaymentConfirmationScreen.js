
          // MEKA THAMA HADALA IWARA NA
          // MEKA THAMA HADALA IWARA NA         
          // MEKA THAMA HADALA IWARA NA          

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Barcode from 'react-native-barcode-builder';

const PaymentConfirmationScreen = () => {
  return (
    <View style={styles.container}>
      {/* Flight Route */}
      <View style={styles.flightRouteContainer}>
        <Text style={styles.flightRoute}>Earth</Text>
        <Image source={require('../assets/arrow.png')} style={styles.arrow} />
        <Text style={styles.flightRoute}>Mars</Text>
      </View>

      {/* Selected Seats */}
      <View style={styles.selectedSeatsContainer}>
        <Text style={styles.selectedSeatsTitle}>Selected Seats:</Text>
        <Text style={styles.selectedSeats}>A2, B3</Text>
      </View>

      {/* Ticket Details */}
      <View style={styles.ticketDetailsContainer}>
        <View style={styles.ticketDetailsColumn}>
          <Text>Date & Time:</Text>
          <Text>Ticket Number:</Text>
          <Text>Ticket Price:</Text>
          <Text>Class:</Text>
        </View>
        <View style={styles.ticketDetailsColumn}>
          <Text>August 15, 2023</Text>
          <Text>123456789</Text>
          <Text>$9750.00</Text>
          <Text>Business</Text>
        </View>
      </View>

      {/* Boarding Pass (Barcode) */}
      <View style={styles.boardingPassContainer}>
        <Text style={styles.boardingPassTitle}>Boarding Pass</Text>
        <Barcode
          value="YourBoardingPassDataHere"
          format="CODE128" // You can adjust the format as needed (CODE128 is a common format)
          width={2}
          height={40}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  flightRouteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flightRoute: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  arrow: {
    width: 20,
    height: 20,
    marginHorizontal: 10,
  },
  selectedSeatsContainer: {
    marginBottom: 20,
  },
  selectedSeatsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  selectedSeats: {
    fontSize: 16,
  },
  ticketDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  ticketDetailsColumn: {
    flex: 1,
  },
  boardingPassContainer: {
    alignItems: 'center',
  },
  boardingPassTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PaymentConfirmationScreen;


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
        <Text style={styles.flightRoute}>Earth    </Text>
        <Text style={styles.flightRoute}>----------------></Text>
        
        <Text style={styles.flightRoute}>    Mars</Text>
      </View>

      {/* Selected Seats */}
      <View style={styles.selectedSeatsContainer}>
        <Text style={styles.selectedSeatsTitle}>Selected Seats:</Text>
        <Text style={styles.selectedSeats}>A2, B3</Text>
      </View>

      {/* Ticket Details */}
      <View style={styles.ticketDetailsContainer}>
        <View style={styles.ticketDetailsColumn}>
          <Text style={styles.ticketDetailsText}>Date & Time:</Text>
          <Text style={styles.ticketDetailsText}>Ticket Number:</Text>
          <Text style={styles.ticketDetailsText}>Ticket Price:</Text>
          <Text style={styles.ticketDetailsText}>Class:</Text>
        </View>
        <View style={styles.ticketDetailsColumn}>
          <Text style={styles.ticketDetailsText}>August 15, 2023</Text>
          <Text style={styles.ticketDetailsText}>123456789</Text>
          <Text style={styles.ticketDetailsText}>$9750.00</Text>
          <Text style={styles.ticketDetailsText}>Business</Text>
        </View>
      </View>

      {/* Boarding Pass (Barcode) */}
      {/* <View style={styles.boardingPassContainer}>
        <Text style={styles.boardingPassTitle}>Boarding Pass</Text>
        <Barcode
          value="YourBoardingPassDataHere"
          format="CODE128" // You can adjust the format as needed (CODE128 is a common format)
          width={2}
          height={40}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#371c87',
  },
  flightRouteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  flightRoute: {
    fontSize: 28,
    fontWeight: 'bold',
    color:"white",
    textAlign: 'center',
  },
  // arrow: {
  //   width: 20,
  //   height: 20,
  //   marginHorizontal: 10,
  // },
  selectedSeatsContainer: {
    marginBottom: 28,
    backgroundColor: '#1c0e57'
  },
  selectedSeatsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color:"white",
    textAlign: 'center',
  },
  selectedSeats: {
    fontSize: 20,
    color:"white",
    textAlign: 'center',
  },
  ticketDetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#1c0e57'
  },
  ticketDetailsColumn: {
    flex: 1,
  },
  ticketDetailsText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
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

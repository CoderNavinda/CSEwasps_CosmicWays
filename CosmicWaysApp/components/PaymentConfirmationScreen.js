
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Barcode from 'react-native-barcode-builder';

const PaymentConfirmationScreen = () => {
  return (
    <View style= {styles.backgroundcontainer}>
      <ImageBackground style={styles.backgroundImageVector} source={require('../assets/bg-vector.png')} >
        <Text style={styles.maintitle}>Pass</Text>
      </ImageBackground>
      <ImageBackground style={styles.backgroundImage} source={require('../assets/logoImage.png')} ></ImageBackground>
      <ImageBackground style={styles.backgroundImageCosmic} source={require('../assets/logoCosmic.png')} ></ImageBackground>
      <ImageBackground style={styles.backgroundImageWays} source={require('../assets/logoWays.png')} ></ImageBackground>
        <View style={styles.container}>
          {/* Flight Route */}
          <View style={styles.flightRouteContainer}>
            <Text style={styles.flightRoute}>Earth</Text>
            <Text style={styles.flightRoute}>---------></Text>  
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
          <View style={styles.boardingPassContainer}>
            <Text style={styles.boardingPassTitle}>Boarding Pass</Text>
            <Barcode value="YourBoardingPassDataHere" format="CODE128" width={1} height={50} />
          </View>
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundcontainer:{
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#371c87',
  },
  maintitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight:'bold',
    color:"white",
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: -20,
  } ,
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width:200,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -200,
  },
  backgroundImageCosmic:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width:165,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -200,
    marginTop: 40,
  },

  backgroundImageWays:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width:115,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: -290,
    marginTop: -100,
  },

  backgroundImageVector:{
    flex:0.6,
    marginTop: 50,
    marginBottom: -140,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c0e57',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop:10,
    borderRadius: 25

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
    marginLeft: 'auto',
    marginRight:'auto',
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
    color: 'white',
  },
});

export default PaymentConfirmationScreen;

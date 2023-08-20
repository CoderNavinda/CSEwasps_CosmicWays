import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  Button,
} from "react-native";
import routes from "../navigation/routes";

const SeatSelectionScreen = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const navigation = useNavigation();

  const handleProceed = () => {
    // Navigate to the PaymentConfirmationScreen and pass the selectedSeats
    navigation.navigate(routes.PAYMENT_CONFIRMATION, {
      selectedSeats,
    });
    // Calculate the total price based on selected seats
    const totalPrice =
    5000 * selectedBusinessSeats.length + 2500 * selectedEconomySeats.length;

    // Define the details to pass
    const confirmationDetails = {
      selectedSeats,
      dateAndTime: 'August 15, 2023', // Replace with your date and time logic
      ticketNumber: '123456789', // Replace with your ticket number logic
      ticketPrice: `$${totalPrice.toFixed(2)}`,
      flightClass: `${selectedBusinessSeats.length > 0 ? 'Business' : 'Economy'}`,
    };

    // Navigate to the PaymentConfirmationScreen and pass the details
    navigation.navigate(routes.PAYMENT_CONFIRMATION, confirmationDetails);
  };

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };
  const renderSelectedSeats = () => {
    if (selectedSeats.length === 0) {
      return <Text>No seats selected</Text>;
    }
    return selectedSeats.join(", ");
  };
  const numberOfSelectedSeats = selectedSeats.length; // Get the number of selected seats
  const isSeatSelected = (seat) => selectedSeats.includes(seat);

  const selectedBusinessSeats = selectedSeats.filter((seat) =>
    seat.startsWith("A") || seat.startsWith("B") || seat.startsWith("C")
  );
  const selectedEconomySeats = selectedSeats.filter((seat) =>
    seat.startsWith("D") || seat.startsWith("E") || seat.startsWith("F")
  );

  const renderSeat = (seat, key) => (
    <TouchableOpacity
      key={key}
      onPress={() => toggleSeatSelection(seat)}
      style={[styles.seat, isSeatSelected(seat) ? styles.selectedSeat : null]}
    >
      <Text style={styles.seatText}>{seat}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.backgroundcontainer}>
      <ImageBackground
        style={styles.backgroundImageVector}
        source={require("../../assets/bg-vector.png")}
      >
        <Text style={styles.maintitle}>Select Your Seats</Text>
      </ImageBackground>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/bg-new.png")}
      >
        <View style={styles.container}>
          <Text style={styles.title}>Business Class</Text>
          <View style={styles.seatLayout}>
            <View style={styles.upperSeats}>
              {/* <View style={styles.row}>
                {renderSeat('A1', 0)}
              </View> */}
              <View style={styles.row}>
                {renderSeat("A1", 1)}
                {renderSeat("A2", 2)}
              </View>
              <View style={styles.row}>
                {renderSeat("B1", 3)}
                {renderSeat("B2", 4)}
                {renderSeat("B3", 5)}
              </View>
              <View style={styles.row}>
                {renderSeat("C1", 6)}
                {renderSeat("C2", 7)}
                {renderSeat("C3", 8)}
                {renderSeat("C4", 9)}
              </View>
            </View>
            <Text style={styles.title}>Economy Class</Text>
            <View style={styles.lowerSeats}>
              <View style={styles.row}>
                {renderSeat("D1", 10)}
                {renderSeat("D2", 11)}
                {renderSeat("D3", 12)}
                {renderSeat("D4", 13)}
                {renderSeat("D5", 14)}
              </View>
              <View style={styles.row}>
                {renderSeat("E1", 15)}
                {renderSeat("E2", 16)}
                {renderSeat("E3", 17)}
                {renderSeat("E4", 18)}
                {renderSeat("E5", 19)}
              </View>
              <View style={styles.row}>
                {renderSeat("F1", 19)}
                {renderSeat("F2", 20)}
                {renderSeat("F3", 21)}
                {renderSeat("F4", 22)}
                {renderSeat("F5", 23)}
              </View>
            </View>
          </View>
          <Text style={styles.selectedseat}>
            Selected Seats: {selectedSeats.join(", ")}
          </Text>
          <View style={styles.proceedButton}>
            <Button title="Proceed" onPress={() => setShowPopup(true)}></Button>
          </View>
        </View>

        {/* Popup */}
        <Modal visible={showPopup} animationType="slide" transparent>
          <View style={styles.popupContainer}>
            <View style={styles.onlypopuptitle}>
              <Text style={styles.popupTitle}>SpaceX Starship 397</Text>
              <Text>Class | Seats | Price</Text>
              <Text>
                Business | {selectedBusinessSeats.join(", ")} | ${5000 * selectedBusinessSeats.length}
              </Text>
              <Text>
                Economy | {selectedEconomySeats.join(", ")} | ${2500 * selectedEconomySeats.length}
              </Text>
            </View>
            <View style={styles.popupButtonContainer}>
              <Button title="CANCEL" onPress={() => setShowPopup(false)} />
              <Button title="Proceed" onPress={handleProceed} />
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundcontainer: {
    flex: 1,
    justifyContent: "center",
    // alignItems: 'center',
    backgroundColor: "#371c87",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backgroundImageVector: {
    flex: 0.3,
    marginTop: 50,
    marginBottom: -230,
  },

  maintitle: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    color: "white",
    justifyContent: "center",
    textAlign: "center",
    marginTop: -20,
  },
  title: {
    fontSize: 21,
    marginBottom: 20,
    color: "white",
  },
  seatLayout: {
    flexDirection: "column",
    alignItems: "center",
  },
  upperSeats: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 20,
  },
  lowerSeats: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
  seat: {
    width: 50,
    height: 40,
    margin: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    borderRadius: 5,
  },
  selectedSeat: {
    backgroundColor: "#007BFF",
  },
  seatText: {
    color: "white",
    fontSize: 14,
  },
  selectedseat: {
    color: "white",
    fontSize: 14,
  },
  proceedButton: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 50,
  },

  // Popup styles
  popupContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: 13,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    elevation: 5,
  },
  onlypopuptitle: {
    alignItems: "center",
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  popupButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
});

export default SeatSelectionScreen;

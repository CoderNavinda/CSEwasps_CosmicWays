import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Background from "../components/Background";
import PressButton from "../components/PressButton";
import BackButton from "../components/BackButton";
import { StatusBar } from "react-native";
function VerificationScreen() {
  const [otp, setOTP] = useState(["", "", "", "", "", ""]);
  const otpInputs = Array(6)
    .fill(null)
    .map(() => useRef(null));

  const handleOTPChange = (text, index) => {
    // Validate input (you can add more validation as needed)
    if (/^[0-9]$/.test(text)) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
      // Automatically move to the next input field when a digit is entered
      if (index < 5 && text !== "") {
        otpInputs[index + 1].current.focus();
      }
    }
  };

  const handleSubmit = () => {
    // Handle OTP submission here, you can validate and send it to a server
  };

  return (
    <Background>
      <StatusBar
        backgroundColor="#250E67" // Replace with your background color
        barStyle="light-content" // You can use 'light-content' for light status bar text
      />
      <View style={styles.container0}>
        <BackButton />
      </View>

      <Text style={styles.headerText}>Verification Screen</Text>
      <Text style={styles.subText}>
        Please enter 6 digit Code sent to your registered mobile number +94 xx
        xxx xxx xx
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(text) => handleOTPChange(text, index)}
            value={digit}
            ref={otpInputs[index]}
          />
        ))}
      </View>
      <View style={styles.container}>
        <PressButton text="Submit" onPress={handleSubmit} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 295,
    marginLeft: 33.44,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  headerText: {
    fontSize: 24,
    marginTop: 13,
    marginLeft: 100,
    fontWeight: "bold",
    color: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  subText: {
    fontSize: 16,
    marginTop: 136,
    marginLeft: 26,
    width: 318,
    color: "#FFFFFF",
    position: "absolute",
  },
  otpContainer: {
    marginTop: 229,
    marginLeft: 50,
    width: 312.44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    position: "absolute",
  },
  otpInput: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginHorizontal: 5,
  },
  container0: {
    marginLeft: 20,
    marginTop: 7,
    width: 50,
    height: 50,
    position: "absolute",
  },
});

export default VerificationScreen;

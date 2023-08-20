import React, { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import InputWithLabel from "../components/InputWithLabel";
import PressButton from "../components/PressButton";
import { Linking } from "react-native";
import { StatusBar } from "react-native";
function RegisterScreen() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthplanet, setBirthplanet] = useState("");

  const openURL = () => {
    Linking.openURL("https://www.google.com");
  };
  return (
    <Background>
      <View style={styles.container0}>
        <BackButton />
      </View>

      <StatusBar
        backgroundColor="#250E67" // Replace with your background color
        barStyle="light-content" // You can use 'light-content' for light status bar text
      />

      <View style={styles.container1}>
        <Text style={styles.primary}>Register</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.secondary}>Create an Account</Text>
      </View>
      <View style={styles.container3}></View>
      <View style={styles.container4}>
        <InputWithLabel
          label="First Name"
          value={name}
          onChangeText={(newName) => setName(newName)}
          placeholder="Enter your first name"
        />
      </View>
      <View style={styles.lastname}>
        <InputWithLabel
          label="Last Name"
          value={lastname}
          onChangeText={(newName) => setLastname(newName)}
          placeholder="Enter your Last name"
        />
      </View>
      <View style={styles.birthplanet}>
        <InputWithLabel
          label="Birth Planet"
          value={birthplanet}
          onChangeText={(newName) => setBirthplanet(newName)}
          placeholder="Enter your Birth Planet"
        />
      </View>
      <View style={styles.email}>
        <InputWithLabel
          label="Email"
          value={email}
          onChangeText={(newName) => setEmail(newName)}
          placeholder="Enter your Email"
        />
      </View>
      <View style={styles.phonenumber}>
        <InputWithLabel
          label="Phone Number"
          value={phoneNumber}
          onChangeText={(newName) => setPhoneNumber(newName)}
          placeholder="Enter your Phone Number"
        />
      </View>
      <View style={styles.passwrd}>
        <InputWithLabel
          label="Password"
          value={password}
          onChangeText={(newName) => setPassword(newName)}
          placeholder="Enter your Pass"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.container6}>
        <PressButton text="Register" />
      </View>
    </Background>
  );
}
const styles = StyleSheet.create({
  primary: {
    fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  container0: {
    marginLeft: 20,
    marginTop: 7,
    width: 50,
    height: 50,
    position: "absolute",
  },
  container1: {
    marginLeft: 100,
    marginTop: 7,
    width: 190,
    height: 42,
    alignItems: "center",
    position: "absolute",
  },
  secondary: {
    fontFamily: "Roboto",
    fontSize: 30,
    color: "#FFFFFF",
  },
  container2: {
    marginLeft: 29,
    marginTop: 84,
    width: 154,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
  container3: {
    marginLeft: 0,
    marginTop: 165,
    width: 390,
    height: 684,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
  container4: {
    marginLeft: 29.12,
    marginTop: 180,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  birthplanet: {
    marginLeft: 29.12,
    marginTop: 328,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  lastname: {
    marginLeft: 29.12,
    marginTop: 254,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  email: {
    marginLeft: 29.12,
    marginTop: 403,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  phonenumber: {
    marginLeft: 29.12,
    marginTop: 478,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  passwrd: {
    marginLeft: 29.12,
    marginTop: 553,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  container5: {
    marginLeft: 29.12,
    marginTop: 293,
    width: 331.76,
    height: 71,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    position: "absolute",
  },
  container6: {
    marginLeft: 29.12,
    marginTop: 695,
    width: 331.76,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
  forgotPassword: {
    fontFamily: "Info",
    fontSize: 14,
    color: "#000000",
    position: "absolute",
  },
  container7: {
    marginLeft: 157,
    marginTop: 376,
    width: 204,
    height: 22,
    alignItems: "flex-start",
    justifyContent: "center",
    position: "absolute",
  },
  linkText: {
    color: "#007BFF", // Blue color for the hyperlink text
  },
  bottomtext: {
    fontFamily: "Info",
    fontSize: 16,
    color: "#000000",
  },
  bottomtextcnt: {
    marginLeft: 32,
    marginTop: 497,
    width: 330,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  leftline: {
    marginLeft: 32,
    marginTop: 579,
    width: 102,
    height: 0,
    alignItems: "flex-start",
    position: "absolute",
  },
  rightline: {
    marginLeft: 250,
    marginTop: 579,
    width: 111,
    height: 0,
    alignItems: "flex-start",
    position: "absolute",
  },
  btmtxt: {
    marginLeft: 143,
    marginTop: 570,
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    backgroundColor: "#FFFFFF",
    width: 100,
  },
  container10: {
    marginLeft: 32,
    marginTop: 602,
    width: 331.76,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
  container11: {
    marginLeft: 32,
    marginTop: 668,
    width: 331.76,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
});

export default RegisterScreen;

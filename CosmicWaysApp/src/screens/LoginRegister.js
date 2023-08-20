import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  Input,
  NativeBaseProvider,
  Button,
  Icon,
  Box,
  Image,
  AspectRatio,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import routes from "../navigation/routes";

function LoginRegister() {
  const navigation = useNavigation();
  const handleLogin = () => {
    // Add your login logic here if needed
    navigation.navigate(routes.LOGIN); // Replace 'LoggedInScreen' with the screen you want to navigate to after login
  };

  const handleRegister = () => {
    // Add your registration logic here if needed
    navigation.navigate(routes.REGISTER); // Replace 'RegistrationScreen' with the screen you want to navigate to for registration
  };
  const handleGoogle = () => {
    // Add your registration logic here if needed
    navigation.navigate(routes.REGISTER); // Replace 'RegistrationScreen' with the screen you want to navigate to for registration
  };
  const handleFacebook = () => {
    // Add your registration logic here if needed
    navigation.navigate(routes.REGISTER); // Replace 'RegistrationScreen' with the screen you want to navigate to for registration
  };
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Image
            source={require("../../assets/Ways1.png")}
            style={styles.logoImage}
          />
        </View>
        <Text style={styles.subtext}>Charting Cosmic Destinies</Text>

        <View style={styles.buttonStyle1}>
          <Button style={styles.buttonDesign} onPress={handleLogin}>
            <Text style={styles.texttest}>Login</Text>
          </Button>
        </View>
        <View style={styles.buttonStyle2}>
          <Button style={styles.buttonDesign} onPress={handleRegister}>
            <Text style={styles.texttest}>Register</Text>
          </Button>
        </View>

        <View style={styles.lineStyle}>
          <View style={{ flex: 1, height: 1, backgroundColor: "#fff" }} />
          <View>
            <Text style={{ width: 100, textAlign: "center", color: "#fff" }}>
              OR Signup with
            </Text>
          </View>
          <View style={{ flex: 1, height: 1, backgroundColor: "#fff" }} />
        </View>
      </View>
      <View style={styles.buttonStyle3}>
        <Button style={styles.buttonDesign} onPress={handleRegister}>
          <Text style={styles.texttest}>Google</Text>
        </Button>
      </View>
      <View style={styles.buttonStyle4}>
        <Button style={styles.buttonDesign} onPress={handleRegister}>
          <Text style={styles.texttest}>facebook</Text>
        </Button>
      </View>
    </NativeBaseProvider>
  );
}
export default LoginRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#250E67",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
  },
  logoImage: {
    marginTop: 35,
    width: 220, // Adjust the width according to your design
    height: 257, // Adjust the height according to your design
    marginTop: 30,
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 20,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle1: {
    marginTop: 380,
    marginLeft: 32,
    position: "absolute",
  },
  buttonStyle2: {
    marginTop: 447,
    marginLeft: 32,
    position: "absolute",
  },
  buttonStyle3: {
    marginTop: 571,
    marginLeft: 32,
    position: "absolute",
  },
  buttonStyle4: {
    marginTop: 638,
    marginLeft: 32,
    position: "absolute",
  },
  buttonDesign: {
    backgroundColor: "#1C0E57",
    borderColor: "#fff",
    borderWidth: 1,
    height: 60,
    width: 331,
    borderRadius: 8,
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 531,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    borderColor: "#fff",
    position: "absolute",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
  texttest: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins",
  },
  subtext: {
    color: "#fff",
    fontSize: 20,
    marginLeft: 68,
    fontWeight: "bold",
    fontFamily: "Roboto",
    width: 500,
    letterSpacing: 1,
    textAlign: "flex-start",
  },
});

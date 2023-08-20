import React from "react";
import { View, Text, Image, Button } from "react-native";
import { StyleSheet } from "react-native";
import Background from "../components/Background";
import BackButton from "../components/BackButton";
import InputWithLabel from "../components/InputWithLabel";
import { useState } from "react";
import { StatusBar } from "react-native";
import PressButton from "../components/PressButton";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Svg, { Line } from "react-native-svg";
import routes from "../navigation/routes";

function LoginScreen() {
  const [text0, setText0] = useState("");
  const [text, setText] = useState("");

  const navigation = useNavigation();
  const openURL = () => {
    Linking.openURL("https://www.google.com");
  };
  return (
    <Background>
      <View style={styles.container0}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>

      <StatusBar
        backgroundColor="#250E67" // Replace with your background color
        barStyle="light-content" // You can use 'light-content' for light status bar text
      />
      <View style={styles.container1}>
        <Text style={styles.primary}>Login</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.secondary}>Welcome Back! </Text>
      </View>
      <View style={styles.container3}></View>
      <View style={styles.container4}>
        <InputWithLabel
          label="Email"
          value={text0}
          onChangeText={(newText) => setText0(newText)}
          placeholder="Enter your email"
        />
      </View>
      <View style={styles.container5}>
        <InputWithLabel
          label="Password"
          value={text}
          onChangeText={(newText) => setText(newText)}
          secureTextEntry={true}
          placeholder="Enter your password"
        />
      </View>
      <View style={styles.container7}>
        <Text style={styles.forgotPassword}>
          Forgot Password ?{" "}
          <Text style={styles.linkText} onPress={openURL}>
            Recover here
          </Text>{" "}
        </Text>
      </View>
      <View style={styles.container6}>
        <PressButton
          text="Login"
          onPress={() => navigation.navigate(routes.HOME_SCREEN)}
        />
      </View>
      <View style={styles.bottomtextcnt}>
        <Text style={styles.bottomtext}>Don't have an account?</Text>
        <Text style={styles.linkText} onPress={openURL}>
          Create New Account
        </Text>
      </View>
      <View style={styles.leftline}>
        <Image source={require("../../assets/line1.png")} />
      </View>
      <View style={styles.rightline}>
        <Image source={require("../../assets/line2.png")} />
      </View>
      <View style={styles.btmtxt}>
        <Text
          style={{
            fontSize: 14,
            color: "#000000",
          }}
        >
          Or Signup With
        </Text>
      </View>
      <View style={styles.container10}>
        <PressButton text="Google" onPress={() => console.log("google")} />
      </View>
      <View style={styles.container11}>
        <PressButton text="Facebook" onPress={() => console.log("google")} />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  primary: {
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
    marginTop: 192,
    width: 390,
    height: 684,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#FFFFFF",
    position: "absolute",
  },
  container4: {
    marginLeft: 29.12,
    marginTop: 211,
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
    marginTop: 411,
    width: 331.76,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
  forgotPassword: {
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
    marginTop: 570,
    width: 102,
    height: 0,
    alignItems: "flex-start",
    position: "absolute",
  },
  rightline: {
    marginLeft: 250,
    marginTop: 570,
    width: 111,
    height: 0,
    alignItems: "flex-start",
    position: "absolute",
  },
  btmtxt: {
    marginLeft: 143,
    marginTop: 560,
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    width: 100,
  },
  container10: {
    marginLeft: 32,
    marginTop: 597,
    width: 331.76,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
  container11: {
    marginLeft: 32,
    marginTop: 663,
    width: 331.76,
    height: 60,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    position: "absolute",
  },
});

export default LoginScreen;

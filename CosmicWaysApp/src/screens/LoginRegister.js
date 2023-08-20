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
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Image
            source={require("../../assets/abc.png")}
            style={styles.logoImage}
          />
        </View>

        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={handleLogin}>
            Login
          </Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={handleRegister}>
            Register
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

        <View style={styles.boxStyle}>
          <Box
            onPress={() => navigation.navigate("#")}
            style={{ height: 80, width: 80, marginLeft: 20 }}
            shadow={3}
            _light={{
              backgroundColor: "gray.500",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/google-logo/colorful-google-logo-transparent-clipart-download-u3DWLj.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box
            onPress={() => navigation.navigate("#")}
            style={{ height: 80, width: 80, marginLeft: 20 }}
            shadow={3}
            _light={{
              backgroundColor: "gray.500",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/facebook-logo-png/photo-facebook-logo-png-hd-25.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box
            onPress={() => navigation.navigate("#")}
            style={{ height: 80, width: 80, marginLeft: 20 }}
            shadow={3}
            _light={{
              backgroundColor: "gray.500",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/twitter/bird-twitter-socialmedia-icons-png-5.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Box
            onPress={() => navigation.navigate("#")}
            style={{ height: 80, width: 80, marginLeft: 20 }}
            shadow={3}
            _light={{
              backgroundColor: "gray.500",
            }}
            _dark={{
              backgroundColor: "gray.700",
            }}
          >
            <AspectRatio ratio={1 / 1}>
              <Image
                roundedTop="lg"
                source={{
                  uri: "https://www.transparentpng.com/thumb/apple-logo/RRgURB-apple-logo-clipart-hd.png",
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
export default LoginRegister;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#371C87",
  },
  LoginText: {
    marginTop: 100,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  logoImage: {
    width: 200, // Adjust the width according to your design
    height: 200, // Adjust the height according to your design
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
  buttonStyle: {
    marginTop: 60,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#250e67",
    borderColor: "#fff",
    borderWidth: 1,
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
    borderColor: "#fff",
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
});

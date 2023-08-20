import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Dimensions,
  Platform,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import VerificationScreen from "./app/screens/VerificationScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#250E67',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  // },
  // buttonstyle : {
  //   alignItems: 'center', // Center the image horizontally
  //   backgroundColor: '#FFFFF',
  // }
});

// In App.js in a new project

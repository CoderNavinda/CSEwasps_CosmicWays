import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const ExploreDest = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleExploreDestinations = () => {
    navigation.navigate("Home"); // Navigate to the ExploreDest page
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={handleExploreDestinations}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.searchBar} />
      <ScrollView>
        <BoxContainer image="olympus-mountain" />
        <BoxContainer image="jupiter-calisto" />
        <BoxContainer image="sea-of-tranquility" />
        <BoxContainer image="great-red-spot" />
      </ScrollView>
    </View>
  );
};

const BoxContainer = ({ image }) => {
  const imagePaths = {
    "olympus-mountain": require("../assets/olympus-mountain.jpeg"),
    "jupiter-calisto": require("../assets/jupiter-calisto.jpeg"),
    "sea-of-tranquility": require("../assets/sea-of-tranquility.jpeg"),
    "great-red-spot": require("../assets/great-red-spot.webp"),
    // Add more image paths here
  };
  const imagePath = imagePaths[image];

  return (
    <View style={styles.boxContainer}>
      <Image source={imagePath} style={styles.boxImage} />
      <Text style={styles.boxDescription}>Box description goes here</Text>
      <TouchableOpacity style={styles.boxButton}>
        <Text style={styles.boxButtonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#250E67",
    paddingTop: 40,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  searchBar: {
    backgroundColor: "white",
    height: 40,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 5,
  },
  boxContainer: {
    backgroundColor: "#12092F",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  boxImage: {
    width: "100%",
    height: 150,
    borderRadius: 5,
    marginBottom: 10,
  },
  boxDescription: {
    color: "white",
    marginBottom: 5,
  },
  boxButton: {
    backgroundColor: "#250E67",
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  boxButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ExploreDest;

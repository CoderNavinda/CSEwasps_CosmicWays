import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const DestinationDetails = ({ route }) => {
  const navigation = useNavigation();
  const { title, image, description } = route.params.item;

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground source={image} style={styles.imageBackground}>
        {/* App Bar */}
        <View style={styles.appBar}>
          <TouchableOpacity style={styles.backButton} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.boxDescription}>{description}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#250E67",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    resizeMode: "cover",
    paddingTop: StatusBar.currentHeight,
  },
  appBar: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: "#12092F",
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  appBarTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 40,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  boxDescription: {
    marginTop: 10,
    color: "white",
    fontSize: 16,
    textAlign: "left",
  },
});

export default DestinationDetails;

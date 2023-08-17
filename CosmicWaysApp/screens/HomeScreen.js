import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // You need to install this package for icons
import DropdownComponent from "../components/DropDown";

const YourComponent = () => {
  const navigation = useNavigation(); // Get the navigation object

  const handleExploreDestinations = () => {
    navigation.navigate("ExploreDest"); // Navigate to the ExploreDest page
  };
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {/* Top Bar */}
        <Text style={styles.title}>COSMIC WAYS</Text>
        <View style={styles.iconsContainer}>
          <Icon name="bell" size={20} color="white" />
          <Icon name="user" size={20} color="white" />
          <Icon name="cog" size={20} color="white" />
        </View>
      </View>
      <View style={styles.whiteBox}>
        <View style={styles.row}>
          <DropdownComponent item="From" label="From" data={data1} />
          <DropdownComponent item="To" label="To" data={data1} />
        </View>
        <View style={styles.row}>
          <DropdownComponent item="Date From" label="Date From" data={data2} />
          <DropdownComponent item="Date To" label="Date To" data={data2} />
        </View>

        <TouchableOpacity style={styles.searchButton}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.column}>
        {/* Box 1 */}
        <View style={styles.box}>
          <TouchableOpacity
            style={styles.exploreDestButton}
            onPress={handleExploreDestinations}
          >
            <Text style={styles.exploreDestText}>Explore Destinations</Text>
          </TouchableOpacity>
          <Text style={styles.whiteText}>
            Some text in white. sjjdhcfkw fwkjhf kajb ckushgf kvhuggf vgf vukh
            fkhgd dkfhvg kfh gvkfg vvkjhfvgk{" "}
          </Text>
          <Text style={styles.moreLink}>more..</Text>
        </View>

        {/* Box 2 */}
        <View style={styles.box}>
          {/* Content for Box 2 */}
          <TouchableOpacity
            style={styles.exploreDestButton}
            onPress={handleExploreDestinations}
          >
            <Text style={styles.exploreDestText}>News Feed</Text>
          </TouchableOpacity>
          <Text style={styles.whiteText}>Some text in white</Text>
          <Text style={styles.moreLink}>more..</Text>
        </View>

        {/* Box 3 */}
        <View style={styles.box}>
          {/* Content for Box 3 */}
          <TouchableOpacity
            style={styles.exploreDestButton}
            onPress={handleExploreDestinations}
          >
            <Text style={styles.exploreDestText}>About Us</Text>
          </TouchableOpacity>
          <Text style={styles.whiteText}>Some text in white</Text>
          <Text style={styles.moreLink}>more..</Text>
        </View>
      </View>
    </View>
  );
};

const data1 = [
  { label: "Earth", value: "1" },
  { label: "Mars", value: "2" },
  { label: "Jupiter", value: "3" },
  { label: "Urenus", value: "4" },
  { label: "Neptune", value: "5" },
];

const data2 = [
  { label: "10:00", value: "1" },
  { label: "11:00", value: "2" },
  { label: "18:00", value: "3" },
  { label: "21:00", value: "4" },
  { label: "23:00", value: "5" },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#250E67",
    padding: 20,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  whiteBox: {
    backgroundColor: "white",
    marginTop: 15,
    padding: 15,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchButton: {
    backgroundColor: "#250E67",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  searchButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  column: {
    marginTop: 20,
  },
  box: {
    backgroundColor: "#12092F",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    paddingBottom: 30,
  },
  exploreDestButton: {
    backgroundColor: "#250E67",
    alignSelf: "flex-start", // Align to the top left corner
    paddingVertical: 10,
    paddingHorizontal: 10, // You can adjust this if needed
    borderRadius: 6,
    marginBottom: 10,
  },
  exploreDestText: {
    color: "white",
    fontWeight: "bold",
  },
  topic: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
  },
  whiteText: {
    color: "white",
  },
  moreLink: {
    marginRight: 15,
    marginTop: 15,
    position: "absolute",
    bottom: 0,
    right: 0,
    color: "white",
  },
});

export default YourComponent;

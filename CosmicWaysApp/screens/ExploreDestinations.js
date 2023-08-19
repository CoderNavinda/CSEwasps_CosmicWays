import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import items from "../data/destinations";

const ExploreDest = () => {
  const navigation = useNavigation();

  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleBackToHome = () => {
    navigation.navigate("Home");
  };

  const handleBoxPress = (item) => {
    navigation.navigate("DestinationDetails", { item });
  };

  const handleSearchChange = (text) => {
    setSearchText(text);
    const filtered = items.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <SafeAreaView style={styles.container} forceInset={{ top: "never" }}>
      {/* App Bar */}
      <View style={styles.appBar}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackToHome}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.appBarTitleContainer}>
          <Text style={styles.appBarTitle}>Destinations</Text>
        </View>
      </View>

      <View style={styles.searchBar}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={handleSearchChange}
        />
      </View>
      <ScrollView>
        {filteredItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleBoxPress(item)}>
            <BoxContainer image={item.image} title={item.title} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const BoxContainer = ({ image, title }) => {
  return (
    <View style={styles.boxContainer}>
      <Image source={image} style={styles.boxImage} />
      <View style={styles.textContainer}>
        <Text style={styles.boxDescription}>{title}</Text>
        <TouchableOpacity style={styles.boxButton}>
          <Text style={styles.boxButtonText}>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#250E67",
    paddingTop: 10,
  },
  appBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  backButton: {
    backgroundColor: "#12092F",
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginRight: 10,
  },
  appBarTitleContainer: {
    flex: 1,
    alignItems: "center",
  },
  appBarTitle: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    marginRight: 40,
  },
  searchBar: {
    backgroundColor: "#E5E5EA",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 5,
    borderColor: "white",
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: "gray",
  },
  boxContainer: {
    backgroundColor: "#12092F",
    padding: 15,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    paddingHorizontal: 0,
    paddingTop: 0,
  },
  boxImage: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginBottom: 10,
  },
  textContainer: {
    marginHorizontal: 10,
    marginTop: 10,
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

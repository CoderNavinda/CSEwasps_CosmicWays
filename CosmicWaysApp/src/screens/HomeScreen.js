import React, { useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import DropdownComponent from "../../src/components/DropDown";
import DatePick from "../../src/components/DatePicker";
import { db, collection, getDocs } from "../../firebase.config.js";

import routes from "../navigation/routes";

const SmallBox = ({ image }) => {
  return (
    <View style={styles.smallBox}>
      <Image source={{ uri: image }} style={styles.smallBoxImage} />
    </View>
  );
};

const HomeScreen = () => {
  const [items, setItems] = React.useState([]);
  const navigation = useNavigation();

  const handleExploreDestinations = () => {
    navigation.navigate(routes.EXPLORE_DESTINATIONS, { items });
  };

  async function fetchDestinations() {
    const postsCol = collection(db, "destinations");
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    return postList;
  }

  useEffect(() => {
    fetchDestinations().then((data) => {
      setItems(data);
      console.log("home", items);
    });
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <SafeAreaView style={styles.container} forceInset={{ top: "never" }}>
        <View style={styles.topBar}>
          {/* Top Bar */}
          <View style={styles.topBarContent}>
            <Image
              source={require("../../assets/logo_name.png")}
              style={styles.logoImage}
            />
            <View style={styles.iconsContainer}>
              <Icon name="bell" size={20} color="white" style={styles.icon} />
              <Icon name="user" size={20} color="white" style={styles.icon} />
              <Icon name="cog" size={20} color="white" style={styles.icon} />
            </View>
          </View>
        </View>

        <View style={styles.whiteBox}>
          <View style={styles.row}>
            <DropdownComponent item="From" label="From" data={data1} />
            <DropdownComponent item="To" label="To" data={data1} />
          </View>
          <View style={styles.row}>
            <DatePick label="Start Date" />
            <DatePick label="End Date" />
          </View>

          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          {/* Box 1 */}
          <TouchableOpacity
            style={styles.box}
            onPress={handleExploreDestinations}
          >
            <View
              style={styles.exploreDestButton}
              onPress={handleExploreDestinations}
            >
              <Text style={styles.exploreDestText}>Explore Destinations</Text>
            </View>
            <FlatList
              horizontal
              data={items.slice(0, 4)}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => <SmallBox image={item.images[0]} />}
              contentContainerStyle={styles.smallBoxesContainer}
            />
          </TouchableOpacity>

          {/* Box 2 */}
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.exploreDestButton}
              onPress={handleExploreDestinations}
            >
              <Text style={styles.exploreDestText}>News Feed</Text>
            </TouchableOpacity>
            <Text style={styles.whiteText}>Some text in white</Text>
          </View>

          {/* Box 3 */}
          <View style={styles.box}>
            <TouchableOpacity
              style={styles.exploreDestButton}
              onPress={handleExploreDestinations}
            >
              <Text style={styles.exploreDestText}>About Us</Text>
            </TouchableOpacity>
            <Text style={styles.whiteText}>Some text in white</Text>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
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
    padding: 5,
  },
  topBar: {
    backgroundColor: "#250E67",
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 2,
  },
  topBarContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoImage: {
    width: "60%",
    height: 40,
    resizeMode: "contain",
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
    alignSelf: "flex-start",
    paddingVertical: 10,
    paddingHorizontal: 10,
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
  icon: {
    marginRight: 10,
  },
  smallBox: {
    width: 90,
    height: 90,
    borderRadius: 5,
    marginRight: 5,
    overflow: "hidden",
  },
  smallBoxImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default HomeScreen;

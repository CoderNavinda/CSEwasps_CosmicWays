import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";
import TripCard from "../../src/components/tripCard";
import { db, collection, getDocs } from "../../firebase.config";
import { useEffect, useState } from "react";

const { width, height } = Dimensions.get("window");

export default function MyTrips() {
  const navigation = useNavigation();

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  async function fetchDestinations() {
    const postsCol = collection(db, "flights");
    const postSnapshot = await getDocs(postsCol);
    const postList = postSnapshot.docs.map((doc) => doc.data());
    return postList;
  }

  function generateItemList(n) {
    const itemList = [];
    for (let i = 0; i < n; i++) {
      itemList.push({ id: i, name: `Item ${i}` });
    }
    return itemList;
  }

  const handleBack = () => {
    navigation.goBack();
  };

  const [support, setSupport] = useState([]);

  const cards = [];

  for (let i = 0; i < 4; i++) {
    cards.push(
      <View style={{ top: i * 185 }}>
        <TripCard />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {/* Status bar */}
      <StatusBar style="light" />

      {/* Title */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={handleBack}>
          <View style={styles.backIcon}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>My Charts</Text>
      </View>

      <View style={{ marginTop: height * 0.125, flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={support}
          renderItem={({ item }) => (
            <View style={[styles.aitem, !item.first && styles.lst]}>
              <TripCard
                start={filteredItems[item.id]["arrival"]["planet"]}
                dest={filteredItems[item.id]["departure"]["planet"]}
                startCity={filteredItems[item.id]["arrival"]["cityId"]}
                destCity={filteredItems[item.id]["departure"]["cityId"]}
                date={filteredItems[item.id]["arrival"]["date"]}
                time={filteredItems[item.id]["arrival"]["time"]}
                flight={filteredItems[item.id]["flightNumber"]}
                durationDays={1}
                durationHours={23}
                onPress={handlePress}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aitem: {
    width: width,
    height: height * 0.26,
    bottom: height * 0.12,
  },

  lst: {
    marginTop: height * 0.08,
    bottom: height * 0.2,
  },

  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#1C0E57",
    // overflow: 'hidden',
  },
  header: {
    position: "absolute",
    left: width * 0.03,
    top: height * 0.06,
  },
  back: {
    width: width * 0.12,
    height: height * 0.06,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "#12092F",
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    display: "flex",
    shadowColor: "rgba(32, 32, 32, 0.06)",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  backIcon: {
    marginLeft: width * 0.025,
    marginTop: height * 0.01,
  },
  title: {
    position: "absolute",
    left: width * 0.24,
    top: height * 0,
    textAlign: "center",
    color: "white",
    fontSize: 30,
    fontFamily: "roboto",
    fontWeight: "700",
    letterSpacing: 3,
    overflow: "hidden",
  },
});

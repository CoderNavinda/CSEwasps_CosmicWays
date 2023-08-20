import { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  FlatList,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import TripCard from "../../src/components/tripCard";
import { db, collection, getDocs } from "../../firebase.config";
import FlatButton from "../../src/components/flatButton";
import routes from "../navigation/routes";

const { width, height } = Dimensions.get("window");

export default function FilghtList() {
  // const navigation = useNavigation();
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleBack = () => {
    navigation.navigate(routes.HOME_SCREEN);
  };

  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [dateFromValue, setDateFromValue] = useState("");
  const [dateToValue, setDateToValue] = useState("");

  const [isRoundTripTouched, setIsRoundTripTouched] = useState(false);
  const [isOneWayTouched, setIsOneWayTouched] = useState(false);
  const [isMultiCityTouched, setIsMultiCityTouched] = useState(false);

  const [support, setSupport] = useState([
    { name: "", id: "1", first: true },
    { name: "", id: "2", first: true },
    { name: "", id: "3", first: true },
    { name: "", id: "4", first: true },
    { name: "", id: "5", first: true },
    { name: "", id: "6", first: true },
    { name: "", id: "7", first: false },
  ]);

  const handleFromChange = (text) => {
    setFromValue(text);
  };

  const handleToChange = (text) => {
    setToValue(text);
  };

  const handleDateFromChange = (text) => {
    setDateFromValue(text);
  };

  const handleDateToChange = (text) => {
    setDateToValue(text);
  };

  const handleRoundTripPress = () => {
    setIsRoundTripTouched(true);
    setIsOneWayTouched(false);
    setIsMultiCityTouched(false);
  };

  const handleOneWayPress = () => {
    setIsRoundTripTouched(false);
    setIsOneWayTouched(true);
    setIsMultiCityTouched(false);
  };

  const handleMultiCityPress = () => {
    setIsRoundTripTouched(false);
    setIsOneWayTouched(false);
    setIsMultiCityTouched(true);
  };

  const handleFilter = () => {
    setFromValue("");
    setToValue("");
    setDateFromValue("");
    setDateToValue("");
  };

  const cards = [];

  for (let i = 0; i < 4; i++) {
    cards.push(
      <View style={{ top: i * 185 }}>
        <TripCard />
      </View>
    );
  }

  useEffect(() => {
    fetchDestinations().then((data) => {
      setItems(data);
      setFilteredItems(data);
      setSupport(generateItemList(data.length));
    });
  }, []);

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
        <Text style={styles.title}>Flight Details</Text>
      </View>

      {/* Filter items */}
      <View style={styles.flCard}>
        <View style={styles.flInnerCard}></View>
        <View style={styles.flDateTo}>
          <TextInput
            style={[styles.flText, styles.flDateToText]}
            placeholder="Date To"
            value={dateToValue}
            onChangeText={handleDateToChange}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.flDateFrom}>
          <TextInput
            style={[styles.flText, styles.flDateFromText]}
            placeholder="Date From"
            value={dateFromValue}
            onChangeText={handleDateFromChange}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.flTo}>
          <TextInput
            style={[styles.flText, styles.flToText]}
            placeholder="To"
            value={toValue}
            onChangeText={handleToChange}
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.flFrom}>
          <TextInput
            style={[styles.flText, styles.flFromText]}
            placeholder="From"
            value={fromValue}
            onChangeText={handleFromChange}
            underlineColorAndroid="transparent"
          />
        </View>
      </View>

      {/* Trip type select */}
      <View style={styles.tripType}>
        <TouchableOpacity onPress={handleRoundTripPress} activeOpacity={0.7}>
          <Text
            style={[styles.tripText, isRoundTripTouched && styles.underlined]}
          >
            Round Trip
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOneWayPress} activeOpacity={0.7}>
          <Text style={[styles.tripText, isOneWayTouched && styles.underlined]}>
            One-way
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMultiCityPress} activeOpacity={0.7}>
          <Text
            style={[styles.tripText, isMultiCityTouched && styles.underlined]}
          >
            Multi-city
          </Text>
        </TouchableOpacity>
      </View>

      {/* Section dividers */}
      <View style={styles.borderContainer}>
        <View style={[styles.border, styles.border1]} />
        <View style={[styles.border, styles.border2]} />
      </View>

      {/* Flight cards */}
      {/* <View style={styles.cards}>
                {cards}
            </View>
            
            LOG  [{"arrival": {"cityId": "Colombo", "date": "22/08/2023", "time": "00:30"}, "departure": {"cityId": "Mars", "date": "24/08/2023", "time": "14:30"}, "flightNumber": "AB889", "price": {"A": [Array], "B": [Array], "C": [Array], "D": [Array], "E": [Array], "F": [Array], "G": [Array], "H": [Array]}}]
             */}

      <View style={{ marginTop: height * 0.4, flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={support}
          renderItem={({ item }) => (
            <View style={[styles.aitem, !item.first && styles.lst]}>
              <TripCard
                start="Earth"
                dest="Mars"
                startCity={filteredItems[item.id]["arrival"]["cityId"]}
                destCity="Olympus Mons"
                date={filteredItems[item.id]["arrival"]["date"]}
                time={filteredItems[item.id]["arrival"]["time"]}
                flight={filteredItems[item.id]["flightNumber"]}
                durationDays={1}
                durationHours={23}
                onPress={(item) => handlePress(item.id)}
              />
            </View>
          )}
        />
      </View>

      {/* Filter items */}
      <View style={styles.filter}>
        <FlatButton text="Filter" onPress={handleFilter} />
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

  cards: {
    top: height * 0.2,
    backgroundColor: "white",
  },

  border: {
    width: width,
    height: 0,
    position: "absolute",
    borderWidth: 1.5,
    borderColor: "white",
  },
  borderContainer: {
    position: "absolute",
  },
  border1: {
    position: "absolute",
    top: height * 0.38,
  },
  border2: {
    position: "absolute",
    top: height * 0.48,
  },

  underlined: {
    textDecorationLine: "underline",
  },

  tripType: {
    position: "absolute",
    left: width * 0.03,
    top: height * 0.32,
    flexDirection: "row",
  },

  tripText: {
    marginLeft: width * 0.054,
    position: "relative",
    color: "white",
    fontSize: 16,
    fontFamily: "roboto-medium",
    fontWeight: "500",
    letterSpacing: 3,
    overflow: "hidden",
  },
  flCard: {
    left: width * 0.054,
    top: height * 0.17,
    backgroundColor: "#1C0E57",
    width: width * 0.9,
    height: height * 0.13,
    position: "relative",
  },
  flInnerCard: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
  },
  flDateTo: {
    width: width * 0.38,
    height: height * 0.052,
    left: width * 0.47,
    top: height * 0.07,
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },

  flDateToText: {
    left: width * 0.03,
    top: 0,
    position: "absolute",
    color: "#363062",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: 22,
  },
  flDateFrom: {
    width: width * 0.38,
    height: height * 0.052,
    left: width * 0.035,
    top: height * 0.07,
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  flDateFromText: {
    left: width * 0.03,
    top: 0,
    position: "absolute",
    color: "#363062",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: 22,
  },
  flTo: {
    width: width * 0.38,
    height: height * 0.052,
    left: width * 0.47,
    top: height * 0.01,
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  flToText: {
    left: width * 0.03,
    top: 0,
    position: "absolute",
    color: "#363062",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: 22,
  },
  flFrom: {
    width: width * 0.38,
    height: height * 0.052,
    left: width * 0.035,
    top: height * 0.01,
    position: "absolute",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  flFromText: {
    left: width * 0.03,
    top: 0,
    position: "absolute",
    color: "#363062",
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "400",
    lineHeight: 22,
  },

  filter: {
    position: "absolute",
    left: width * 0.35,
    top: height * 0.4,
  },
});

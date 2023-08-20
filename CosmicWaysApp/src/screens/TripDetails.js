import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import routes from "../navigation/routes";
import FlatButton from "../../src/components/flatButton";
import { db, collection, getDocs } from "../../firebase.config";
import { useEffect, useState } from "react";
const { width, height } = Dimensions.get("window");

export default function TripDetails({item}) {
  const navigation = useNavigation();
  const handleBack = () => {
      navigation.navigate(routes.HOME_SCREEN);
  }


  const handleCheckout = () => {
    console.log("working 4");
 navigation.navigate(routes.HOME_SCREEN, {item: item});
  };

  const handleCancel = () => {
    console.log("working this");
 navigation.navigate(routes.HOME_SCREEN);
  };


  useEffect(() => {
    fetchDestinations().then((data) => {
      setItems(data);
      setFilteredItems(data);
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
        <Text style={styles.title}>Trip Details</Text>
      </View>

      {/* Flight type */}
      <View style={styles.flight}>
        <Text style={styles.flightCompany}>SpaceX</Text>
        <Text style={styles.flightType}>Starship 397</Text>
      </View>

      {/* Flight time backgroud */}
      <View style={styles.blueBox} />

      {/* Section dividers */}
      <View style={styles.borderContainer}>
        <View style={[styles.border, styles.border1]} />
        <View style={[styles.border, styles.border2]} />
        <View style={[styles.border, styles.border3]} />
        <View style={[styles.border, styles.border4]} />
        <View style={[styles.border, styles.border5]} />
      </View>

      {/*Flight date details */}
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{item['arival']['time']}</Text>
      </View>

      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Earth</Text>
        <Text style={styles.airportText}>{item['arival']['cityId']} International Airport</Text>
      </View>
      <View style={[styles.timeContainer, { left: width * 0.65 }]}>
        <Text style={styles.timeText}>{item['departure']['time']}</Text>
      </View>
      <View style={[styles.locationContainer, { left: width * 0.67 }]}>
        <Text style={styles.locationText}>Mars</Text>
        <Text style={styles.airportText}>
          {item['departure']['cityId']} International Airport
        </Text>
      </View>

      {/*Flight trip icon */}
      <View style={[styles.line, styles.verticalLineLeft]} />
      <View style={[styles.line, styles.verticalLineRight]} />
      <View style={styles.rectangle}>
        <Entypo name="circle" size={60} color="white" />
        <View style={styles.innerRectangle}>
          <Ionicons name="md-airplane-outline" size={40} color="white" />
        </View>
      </View>

      {/*Flight date details */}
      <View style={styles.whiteBox}>
        <FontAwesome5 name="calendar-alt" size={26} color="white" />
      </View>

      {/*Flight date details */}
      <View style={styles.whiteBox2}>
        <MaterialIcons name="access-time" size={28} color="white" />
      </View>

      <Text style={styles.dateText}>{item['arrival']['date']}</Text>
      <Text style={styles.tText}>{item['arrival']['time']}</Text>

      {/*Flight price details */}
      <View style={styles.priceContainer}>
        <View style={styles.pc1}>
          <Text style={styles.priceText}>Business Class: </Text>
          <Text style={[styles.priceText, styles.boldText]}>$4200-$5600</Text>
        </View>
        <View style={styles.pc1}>
          <Text style={styles.priceText}>Economy Class: </Text>
          <Text style={[styles.priceText, styles.boldText]}>$2900-$4200</Text>
        </View>
      </View>

      <View style={styles.pc2}>
        <View style={styles.pc3}>
          <FlatButton text="Cancel" onPress={handleCancel} />
        </View>
        <View style={styles.pc4}>
          <FlatButton text="Checkout" onPress={handleCheckout} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#1C0E57",
    overflow: "hidden",
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
    fontWeight: "700",
    letterSpacing: 3,
    overflow: "hidden",
  },
  flight: {
    width: width,
    height: height * 0.13,
    position: "absolute",
    // Changed --> originally 141
    top: height * 0.18,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  flightCompany: {
    color: "white",
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: 3.2,
  },
  flightType: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    letterSpacing: 2,
  },

  border: {
    width: width,
    height: 0,
    position: "absolute",
    borderWidth: 1.5,
    borderColor: "white",
  },
  borderContainer: {
    position: "relative",
  },
  border1: {
    top: height * 0.16,
  },
  border2: {
    top: height * 0.68,
  },
  border3: {
    top: height * 0.8,
  },
  border4: {
    top: height * 0.32,
  },
  border5: {
    top: height * 0.56,
    left: 2,
  },

  timeContainer: {
    width: width * 0.4,
    height: height * 0.05,
    position: "absolute",
    left: width * 0.05,
    top: height * 0.34,
  },
  timeText: {
    color: "white",
    fontSize: width * 0.06,
    fontWeight: "700",
  },
  locationContainer: {
    width: width * 0.27,
    height: height * 0.14,
    position: "absolute",
    left: width * 0.05,
    top: height * 0.39,
    alignItems: "center",
  },
  locationText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 5,
  },
  airportText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
  line: {
    width: width * 0.1,
    height: height * 0.006,
    position: "absolute",
    backgroundColor: "white",
  },
  verticalLineLeft: {
    left: width * 0.3,
    top: height * 0.415,
  },
  verticalLineRight: {
    left: width * 0.58,
    top: height * 0.415,
  },
  rectangle: {
    width: width * 0.17,
    alignItems: "center",
    height: width * 0.15,
    position: "absolute",
    left: width * 0.41,
    top: height * 0.38,
  },
  innerRectangle: {
    width: width * 0.12,
    alignItems: "center",
    height: height * 0.05,
    position: "absolute",
    left: width * 0.03,
    top: height * 0.009,
  },
  blueBox: {
    flex: 1,
    width: width,
    height: height * 0.24,
    left: 0,
    top: height * 0.32,
    backgroundColor: "#12092F",
    position: "absolute",
  },
  whiteBox: {
    width: width * 0.56,
    height: height * 0.04,
    left: width * 0.42,
    top: height * 0.602,
    position: "absolute",
  },

  whiteBox2: {
    width: width * 0.41,
    height: height * 0.06,
    left: width * 0.65,
    top: height * 0.6,
    position: "absolute",
  },
  dateText: {
    width: width * 0.33,
    height: height * 0.046,
    padding: 5,
    left: width * 0.06,
    top: height * 0.6,
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
    borderWidth: 1.5,
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderColor: "white",
  },
  tText: {
    width: width * 0.21,
    padding: 5,
    height: height * 0.06,
    left: width * 0.71,
    top: height * 0.595,
    position: "absolute",
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  priceContainer: {
    left: width * 0.15,
    top: height * 0.712,
    position: "absolute",
  },

  pc1: {
    marginTop: height * 0.004,
    flexDirection: "row",
  },

  priceText: {
    color: "white",
    fontSize: 20,
    fontWeight: "400",
  },

  boldText: {
    fontWeight: "700",
  },

  pc2: {
    flexDirection: "row",
  },

  pc3: {
    left: width * 0.07,
    top: height * 0.9,
  },

  pc4: {
    left: width * 0.34,
    top: height * 0.9,
  },
});

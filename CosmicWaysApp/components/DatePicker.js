import { Text, View, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

export default function DatePick({ label }) {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate() + 1),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState(label);
  const [isFocus, setIsFocus] = useState(false);

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  const handleOnPressSubmit = () => {
    console.log(selectedStartDate);
  };

  const renderLabel = () => {
    if (isFocus || selectedStartDate) {
      return (
        <Text style={[styles.label, isFocus && { color: "blue" }]}>
          {label}
        </Text>
      );
    }
    if (!isFocus && !selectedStartDate) {
      return <Text style={styles.placeholderLabel}>{label}</Text>;
    }
    return null;
  };

  return (
    <View style={styles.inputContainer}>
      {renderLabel()}
      <View>
        <TouchableOpacity
          onFocus={() => setIsFocus(true)}
          style={[styles.inputBtn]}
          onPress={handleOnPressStartDate}
        >
          <Text>{selectedStartDate}</Text>
        </TouchableOpacity>
      </View>

      {/* Modal for date picker */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              minimumDate={startDate}
              selected={startedDate}
              onDateChanged={handleChangeStartDate}
              onSelectedChange={(date) => setSelectedStartDate(date)}
              options={{
                backgroundColor: "#371C87",
                textHeaderColor: "#9A6AD7",
                textDefaultColor: "#FFFFFF",
                selectedTextColor: "#FFF",
                mainColor: "#7536C6",
                textSecondaryColor: "#FFFFFF",
                borderColor: "#7536C6",
              }}
            />
            <TouchableOpacity
              style={styles.select}
              onPress={handleOnPressStartDate}
            >
              <Text style={{ color: "white" }}>Select</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  inputContainer: {
    backgroundColor: "white",
    width: "50%",
    padding: 10,
    justifyContent: "center",
    alignContent: "center",
  },

  inputBtn: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "white",
    height: 45,
    padding: 8,
    fontSize: 18,
    justifyContent: "center",
    marginTop: 14,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 20,
    top: 14,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 12,
  },
  placeholderLabel: {
    position: "absolute",
    left: 12,
    top: 35,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 16,
    color: "#12092F",
  },
  textHeader: {
    fontSize: 36,
    marginVertical: 60,
    color: "#111",
  },
  textSubHeader: {
    fontSize: 25,
    color: "#111",
  },

  centeredView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 140,
  },
  select: {
    marginBottom: 10,
    backgroundColor: "#12092F",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 10,
  },
  modalView: {
    margin: 5,
    backgroundColor: "#371C87",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 10,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

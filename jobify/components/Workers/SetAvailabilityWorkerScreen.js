import React, { useState } from "react";

// prettier-ignore
import { StyleSheet, Text, View, Pressable, FlatList, TouchableWithoutFeedback, Keyboard, Button } from "react-native";
import CheckBox from "react-native-checkbox";
// import Toggle from "react-toggle";
import axios from "axios";
// import DayItem from "./DaysItem";

// prettier-ignore
export default function SetAvailabilityWorkerScreen({ navigation, onPress, title = "Save", userId = 0 }) {
  const [dayAvailability, setDayAvailability] = useState([
    { text: "Monday", key: 0, available: false },
    { text: "Tuesday", key: 1, available: false },
    { text: "Wednesday", key: 2, available: false },
    { text: "Thursday", key: 3, available: false },
    { text: "Friday", key: 4, available: false },
    { text: "Saturday", key: 5, available: false },
    { text: "Sunday", key: 6, available: false },
  ]);

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.content}>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

// prettier-ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center"
  },
  menu:{
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 40,
    // alignItems: "center",
    // backgroundColor: "pink",
  },
  list: {
    flex: 1,
    marginTop: 20,
    // margin: 20,
    // backgroundColor: "yellow",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
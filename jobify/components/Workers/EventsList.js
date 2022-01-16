import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Button,
  AsyncStorage,
  Alert,
} from "react-native";
import CardItem from "./CardItem";
import axios from "axios";
import server from "../ipConfig/serverIp";

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    alignItems: "center",
    width: "100%",
    display: "flex",
  },
  scroll: {
    width: "100%",
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
  },
});

const EventList = ({ navigation }) => {
  var [events, setevents] = useState([]);

  useEffect(async () => {
    await refresh();
  }, []);

  async function refresh() {
    try {
      const connectedUser = await AsyncStorage.getItem("session");
      const URL = `${server.Ip}/events/worker/${connectedUser}`;
      const res = await axios.get(URL);
      setevents(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  var subscribe = async (eventID) => {
    const workerId = await AsyncStorage.getItem("session");
    const subscribeData = { workerId, eventID };
    const URL = `${server.Ip}/events/subscribe`;
    axios
      .post(URL, subscribeData)
      .then((res) => {
        var x = events;
        x.pop();
        setevents(x);
        console.log(
          "==============================>>>>",
          events.eventID,
          "<==================="
        );
      })
      .catch((err) => {
        console.log(err);
      });

    Alert.alert(`Success`, "Subscription passed successfully", [
      // {
      //   text: "Cancel",
      //   onPress: () => console.log("Cancel Pressed"),
      // },
      // { text: "Home", onPress: () => navigation.goBack() },
      {
        text: "Ok",
        // onPress: () => navigation.push("EventList"),
      },
    ]);
    // alert("subscription passed successfully");
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}> there is {events.length} event </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {events.map((ele, i) => (
          <CardItem key={i} event={ele} reff={refresh} sub={subscribe} />
        ))}
      </ScrollView>
    </View>
  );
};

export default EventList;

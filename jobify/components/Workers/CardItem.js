import React from "react";
import server from "../ipConfig/serverIp"
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import moment from "moment";
import axios from "axios";
const styles = StyleSheet.create({
  card_template: {
    flex: 1,
    width: 350,
    height: 250,
    marginBottom : 480,
    shadowColor: "#e3fcf9",

  },
  card_image: {
    width: 350,
    height: 250,
    borderRadius: 25,
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",

  },
  price: {
    marginTop: 10,
    fontSize: 20,
  },
  time: { fontSize: 20, paddingBottom: 10 },

  button: {
    height: 30,
    width: 150,
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
  campany_image: {
    height: 60,
    width: 100,
    borderRadius: 100,
  },
  campany: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

const CardItem = (props) => {
  var handleSubmit = () => {
    
    var URL = `${server.Ip}/events/subscribe`;
    axios
      .post(URL, { eventID: props.event.eventID, workerId: 1, companyId: 1 })
      .then((res) => {
        console.log(res);
        props.reset();
      });

    props.reff();
  };


  
  return (
    <View style={styles.card_template}>
      <Image style={styles.card_image} source={{ uri: props.event.imageUri }} />
      <View>
        <Text style={styles.card_title}>
          {props.event.eventName} {"\n"}
        </Text>
        <Text style={styles.price}>
          payment {props.event.dailyPay} Dt /day {"\n"}
        </Text>
        <Text style={styles.location}>
          location {props.event.location}
          {"\n"}{" "}
        </Text>
        <Text style={styles.time}>
          Posted at : {moment(props.event.createdAt).fromNow()}
          {"\n"}
        </Text>

        <Image
          style={styles.campany_image}
          source={{ uri: "https://bit.ly/31BkjO6" }}
        />

        <Text style={styles.campany}>{"\n"}movenpick </Text>
        <Button
          title="Subscribe"
          style={styles.submitButton}
          // disabled={isLoading}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default CardItem;

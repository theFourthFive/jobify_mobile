import React,{useEffect} from "react";
import server from "../../ipConfig/serverIp"
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Button,
  AsyncStorage

} from "react-native";
import moment from "moment";
import axios from "axios";


const styles = StyleSheet.create({
  card_template: {
    flex: 1,
    width: "100%",
    height: "80%",
    marginBottom : 480,
    marginTop: "30%",

  },
  card_image: {
    width: "100%",
    height: "60%",
    borderRadius: 30,
 
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
    height: "20%",
    width: "100%",
  },
  submitButton: {
    padding: "1%",
  },
  campany_image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  campany: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardContainer :{
    backgroundColor : "#E9E5E3",
    marginBottom : "5%",
    borderRadius : 100, 
    width : "100%"
    
  }
});

const EventWorkers = (props) => {
useEffect(()=>{
  
})



  
  return (
    <View style={styles.cardContainer}>
     <Text>HAAHAHA</Text>
    </View>
  );
};

export default EventWorkers;


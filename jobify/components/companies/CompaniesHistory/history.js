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

import axios from "axios";
import server from "../../ipConfig/serverIp";
import EventItem from "./eventItem"
function History({navigation}){  
 let [events , setevents] = useState([])
 useEffect(async()=>{
   const URL = `${server.Ip}/companyevetns/events/${37}`
   const res = await axios.get(URL);
   setevents(res.data)
 },[])
    return (
      <View style={styles.container}>
      <View>
        <Text style={styles.header}> there is {events.length} event </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {events.map((ele, i) => (
          <EventItem key={i} event={ele} nav = {navigation} />
        ))}
      </ScrollView>
    </View>
    );
  };



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


  export default History
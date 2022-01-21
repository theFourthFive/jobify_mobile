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
  SafeAreaView,
  StatusBar,
  Dimensions,
} from "react-native";

import axios from "axios";
import server from "../../ipConfig/serverIp";
import EventItem from "./eventItem";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../../assets/colors/colors";
const { width } = Dimensions.get("screen");
function History({navigation}){  
 let [events , setevents] = useState([])
 useEffect(async()=>{
   const URL = `${server.Ip}/companyevetns/events/${37}`
   const res = await axios.get(URL);
   setevents(res.data)
   console.log(res.data);
 },[])
    return (
    //   <View style={styles.container}>
    //   <View>
    //     <Text style={styles.header}> there is {events.length} event </Text>
    //   </View>
    //   <ScrollView style={styles.scroll}>
    //     {events.map((ele, i) => (
    //       <EventItem key={i} event={ele} nav = {navigation} />
    //     ))}
    //   </ScrollView>
    // </View>
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
    <StatusBar translucent={false} backgroundColor={colors.blue} />
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: colors.blue,
          height: 120,
          paddingHorizontal: 20,
         
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.headerTitle}>This is</Text>
          <Text style={styles.headerTitle}>Your History</Text>
        </View>
      </View>
      
      <Text style={styles.sectionTitle}> You have {events.length} event </Text>
      <ScrollView style={styles.scroll}>
       {events.map((ele, i) => (
          <EventItem key={i} event={ele} nav = {navigation} />
        ))}
      </ScrollView>
    </ScrollView>
  </SafeAreaView>
    );
  };



  const styles = StyleSheet.create({
    header: {
      paddingVertical: 20,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: colors.blue,
    },
    headerTitle: {
      color: colors.white,
      fontWeight: "bold",
      fontSize: 23,
      top:20,
    },
    inputContainer: {
      height: 60,
      width: "100%",
      backgroundColor: colors.white,
      borderRadius: 10,
      position: "absolute",
      top: 90,
      flexDirection: "row",
      paddingHorizontal: 20,
      alignItems: "center",
      elevation: 12,
    },
    categoryContainer: {
      marginTop: 60,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    iconContainer: {
      height: 60,
      width: 60,
      backgroundColor: colors.gold,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    },
    sectionTitle: {
      marginHorizontal: 20,
      // marginVertical: 10,
      fontWeight: "bold",
      fontSize: 20,
      color: colors.blue,
    },
    cardImage: {
      height: 220,
      width: width / 2,
      marginRight: 20,
      padding: 10,
      overflow: "hidden",
      borderRadius: 10,
    },
    rmCardImage: {
      width: width - 40,
      height: 200,
      marginRight: 20,
      borderRadius: 10,
      overflow: "hidden",
      padding: 10,
    },
  });


  export default History
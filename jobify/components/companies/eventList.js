// import React,{useState, useEffect} from 'react';
// import { View, Text, Image, ScrollView,StyleSheet,AsyncStorage, TextInput } from 'react-native';
// import OneAddedEvent from "./OneAddedEvent";
// import axios from "axios";
// import server from "../ipConfig/serverIp";
// const eventList = () => {
//     var [events, setEvents] = useState([]);
//     useEffect(async () => {
//       var URL = `${server.Ip}/eventsComp/events/${37}`;
//       var eve = await axios.get(URL);
//       console.log(eve.data);
//       setEvents(eve.data);
//     }, []);
   
//     var deleted = async (eventID) => {
       
   
//         const URL = `${server.Ip}/events/deleted/${37}`;
//         axios
//           .post(URL, eventID)
//           .then((res) => {
//              events.pop();
            
//              setEvents(events);
//             console.log("events.eventID", events.eventID);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
    
        
//       };
    
    
//     return (
//       <View style={styles.container}>
//         <View >
//           <Text style={styles.header}> you have posted {events.length} event </Text>
//         </View>
//         <ScrollView style={styles.scroll}>
//           {events.map((ele, i) => (
//             <OneAddedEvent key={i} event={ele}  del ={deleted} />
//           ))}
//         </ScrollView>
//       </View>
//     );
//   };
//   const styles = StyleSheet.create({
//     container: {
//       marginTop: 30,
//       alignItems: "center",
//       width: "100%",
//       display: "flex",
//     },
//     scroll: {
//       width: "100%",
//     },
//     header: {
//       fontSize: 25,
//       fontWeight: "bold",
//     },
//   });
  
// export default eventList;
///////////////////////////////
import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TextInput,
  ImageBackground,
  FlatList,
  Alert,
  Dimensions,
  TouchableOpacity,
  AsyncStorage,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import colors from "../../assets/colors/colors";
import OneAddedEvent from "./OneAddedEvent";
import axios from "axios";
import server from "../ipConfig/serverIp";
const { width } = Dimensions.get("screen");
const eventList = () => {
    var [events, setEvents] = useState([]);
    useEffect(async () => {
      var URL = `${server.Ip}/eventsComp/events/${37}`;
      var eve = await axios.get(URL);
      console.log(eve.data);
      setEvents(eve.data);
    }, []);
   
    var deleted = async (eventID) => {
       
   
        const URL = `${server.Ip}/events/deleted/${37}`;
        axios
          .post(URL, eventID)
          .then((res) => {
             events.pop();
            
             setEvents(events);
            console.log("events.eventID", events.eventID);
          })
          .catch((err) => {
            console.log(err);
          });
    
        
      };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={colors.white} />
        {/* <Icon name="notifications-none" size={28} color={colors.white} /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.blue,
            height: 120,
            paddingHorizontal: 20,
           
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Explore all</Text>
            <Text style={style.headerTitle}>of our Events</Text>
          </View>
        </View>
        
        <Text style={style.sectionTitle}> there is {events.length} event </Text>
        <ScrollView >
          {events.map((ele, i) => (
            <OneAddedEvent key={i} event={ele}  del ={deleted} />
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
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
export default eventList;

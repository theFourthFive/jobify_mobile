import React,{useState, useEffect} from 'react';
import { View, Text, Image, ScrollView,StyleSheet,AsyncStorage, TextInput } from 'react-native';
import OneAddedEvent from "./OneAddedEvent";
import axios from "axios";
import server from "../ipConfig/serverIp";
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
      <View style={styles.container}>
        <View >
          <Text style={styles.header}> you have posted {events.length} event </Text>
        </View>
        <ScrollView style={styles.scroll}>
          {events.map((ele, i) => (
            <OneAddedEvent key={i} event={ele}  del ={deleted} />
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
  
export default eventList;
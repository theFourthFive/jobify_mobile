import React,{useState, useEffect} from 'react';
import { View, Text, Image, ScrollView,StyleSheet, TextInput } from 'react-native';
import OneAddedEvent from "./OneAddedEvent";
import axios from "axios";
import server from "../ipConfig/serverIp";
const eventList = () => {
    var [events, setevents] = useState([]);

    useEffect(async () => {
      await refresh();
    }, []);
  
    async function refresh() {
      try {
        const connectedComp = await AsyncStorage.getItem("session");
        const URL = `${server.Ip}/eventsComp/${connectedComp}`;
        const res = await axios.get(URL);
        setevents(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    }
    var deleted = async (eventID) => {
        const companyId = await AsyncStorage.getItem("session");
        const deletedEvent = { companyId, eventID };
        const URL = `${server.Ip}/events/deleted`;
        axios
          .post(URL, deletedEvent)
          .then((res) => {
             events.pop();
            
            setevents(events);
            console.log("events.eventID", events.eventID);
          })
          .catch((err) => {
            console.log(err);
          });
    
        
      };
    
    
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}> you have posted {events.length} event </Text>
        </View>
        <ScrollView style={styles.scroll}>
          {events.map((ele, i) => (
            <OneAddedEvent key={i} event={ele} reff={refresh} del ={deleted} />
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
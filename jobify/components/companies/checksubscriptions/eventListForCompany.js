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
import axios from "axios";
import server from "../../ipConfig/serverIp";
import EventItemForCompany from "./eventItemForCompany"
import colors from '../../../assets/colors/colors'
import { FontAwesome5 } from "@expo/vector-icons";
function EventsListForCompany({navigation}){  
 let [events , setevents] = useState([])
 useEffect(async()=>{
   const URL = `${server.Ip}/companyevetns/events/${37}`
   const res = await axios.get(URL);
   setevents(res.data)
 },[])
    return (
      
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={styles.header}>
      <View style={styles.Icon}>
          <FontAwesome5
                name="history"
                size={20}
                color ={colors.white}
                onPress={()=>navigation.navigate("History")}
              />
          </View>
        
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
            <Text style={styles.headerTitle}>Explore all</Text>
            <Text style={styles.headerTitle}>Your Events</Text>
          </View>
        </View>
         {/* <Button title={"Hitory"} onPress={()=>navigation.navigate("History")}/> */}
      <View>
        <Text > there is {events.length} event </Text>
      </View>
      <ScrollView style={styles.scroll}>
        {events.map((ele, i) => (
          <EventItemForCompany key={i} event={ele} nav = {navigation} />
        ))}
      </ScrollView>
</ScrollView>
    </SafeAreaView>
       
    //   <View style={styles.container}>
        
    //     <Button title={"Hitory"} onPress={()=>navigation.navigate("History")}/>
    //   <View>
    //     <Text style={styles.header}> there is {events.length} event </Text>
    //   </View>
    //   <ScrollView style={styles.scroll}>
    //     {events.map((ele, i) => (
    //       <EventItemForCompany key={i} event={ele} nav = {navigation} />
    //     ))}
    //   </ScrollView>
    // </View>
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
    Icon: {
      // marginBottom:60,
      top:20,
      marginLeft: 350,
      height: 50,
      width: 50,
     
    },
  });


  export default EventsListForCompany
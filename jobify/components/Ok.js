import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, Alert, View, ScrollView,Image, Button,TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings'
import server from "./ipConfig/serverIp.js";
import axios from "axios";
import moment from "moment";
const b100 = "100%"

const OK =()=>{
    var [users, setusers] = useState([]);
    useEffect(() => {
    const URL1 = `${server.Ip}/workers/`;
    axios
      .get(URL1)
      .then((res) => {
        var user = res.data;
        user.sort((a, b) => {
          return b.avgRating - a.avgRating;
        });
        setusers(user);
      })
      .catch((err) => {
        console.log(err);
      });
}, []);
const deal=(u)=>{
    const URL = `${server.Ip}/hire/one`
    axios.post(URL,{from_day:u.date_time,
      duration_days:u.duration,
      dailyPayement:u.dailyPay,
      validation:"pending",
      createdAt:u.createdAt,
      updatedAt:u.updatedAt,
      companyCompanyId:38,
      workerWorkerId:u.workerId,
      eventEventID:u.eventID
    }).then((res)=>{
      console.log("invitation sent")
    }).catch((err)=>{
      console.log(err)
    })
    Alert.alert(
      "sent",
      "you picked" + " _ " + u.firstName + " " + u.LastName + " _ " + "for this event, He will recive your offer ",
      [{ text: "Okay", onPress: () => console.log("Okay Pressed") }],
      { cancelable: false }
    )
  }

return (
    <View>
        <ScrollView vertical={true}>
        <View style={styles.container1}>
            <View style={styles.alloff1}>
              {users.map((u, i) => {
                return (
                  <ScrollView key={i}>
                  <TouchableOpacity onPress={()=>deal(u)} style={styles.users}>
                    <View style={styles.user} >
                      <Image style={styles.img}  source={{ uri: u.imageUrl }}></Image>
                      <View style={styles.userr}>
                        <Text>
                          {u.firstName} {u.LastName}
                        </Text>
                        <Text>Adress.....</Text>
                      </View>
                      <AirbnbRating
                        style={styles.star}
                        count={u.avgRating}
                        isDisabled={true}
                        onFinishRating={(x) => {
                          alert("thanks for your help", x);
                        }}
                        reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
                        defaultRating={9}
                        size={25}
                        showRating={true}
                        startingValue={5}
                        ratingColor="#f94368"
                        ratingBackgroundColor="#f9b313"
                        type="custom"
                      />
                    </View>
                  </TouchableOpacity>
                    
                </ScrollView>
                );
              })}
            </View>
          </View>
          </ScrollView>
    </View>
)
}

const styles = StyleSheet.create({
    container1: {
      flex: 1,
      alignItems: "center",
    },
    usersrate: {
      alignSelf: "center",
      fontWeight: "700",
      fontSize: 14,
      lineHeight: 16,
      marginTop: 20,
      margin:20,
      width:150,
      padding:15,
      backgroundColor:'#00BFFF',
      borderRadius:8
    },
    wait:{
      alignSelf:'center',
      alignItems:'center',
      alignContent:'center',
    },
    off:{
      flex:1,
      margin:5,
      width: b100,
      height: 234,
      borderRadius:15,
      borderWidth:5
    
    },
    image:{
      flex:1,
      width: 290,
      borderRadius:15,
      
    },
    text:{
      color:'#00BFFF',
    },
    usersrate1:{
      alignSelf: "center",
      fontWeight: "700",
      fontSize: 14,
      lineHeight: 16,
      marginTop: 20,
      margin:20,
      width:150,
      padding:15,
      backgroundColor:'#00BFFF',
      borderRadius:8
    },
    pick:{
      display:'flex',
      flexDirection:'row',
      alignContent:'space-between',
      alignItems:'center',
      alignSelf:'center'
    },
    alloff1: {
      flex: 1,
      flexDirection: "column",
      marginTop: 25,
    },
    users: {
      flex: 1,
      width: 350,
      height: 84,
      marginTop: 10,
      borderWidth: 2,
      backgroundColor: "white",
      opacity: 0.8,
      borderRadius: 17,
    },
    text: {
      color: "#00BFFF",
    },
    img: {
      width: 70,
      height: 80,
      borderRadius: 15,
    },
    user: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
    },
    userr: {
      flex: 1,
      flexDirection: "column",
      marginLeft: 15,
    },
  });

  export default OK
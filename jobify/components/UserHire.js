import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, Alert , View,ScrollView,FlatList,TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings'
import { useState, useEffect } from 'react';
import server from "./ipConfig/serverIp.js";
import axios from "axios";
import moment from "moment";
const b100 = "100%"
const UserHire=(props)=> { 
    console.log("===============>",props)
    var [offers , setoffers] = useState([])
    useEffect( () =>{
      const URL = `${server.Ip}/events/`
      axios.get(URL).then((response)=>{
      setoffers(response.data)
      console.log('here is the events',response.data)
      }).catch(err=>{
      console.log(err)
      })
    },[])

    const hire=(e)=>{
      const URL = `${server.Ip}/hire/one`
      axios.post(URL,{from_day:e.date_time,
        duration_days:e.duration,
        dailyPayement:e.dailyPay,
        validation:"pending",
        createdAt:e.createdAt,
        updatedAt:e.updatedAt,
        companyCompanyId:38,
        workerWorkerId:props.route.params.workerId,
        eventEventID:e.eventID
      }).then((res)=>{
        console.log("invitation sent")
      }).catch((err)=>{
        console.log(err)
      })
      Alert.alert(
        "sent",
        "you picked" + " _ " + props.route.params.firstName + " " + props.route.params.LastName + " _ " + "for this event, He will recive your invitation ",
        [{ text: "Okay", onPress: () => console.log("Okay Pressed") }],
        { cancelable: false }
      )
    }
    return (
      <ScrollView>
      <View style={styles.users}  >
            <View style={styles.user}  >
                <Image  style={styles.img} source={{ uri: props.route.params.imageUrl }}></Image>
                <View style={styles.userr}>
                    <Text>{props.route.params.firstName} {props.route.params.LastName}</Text>
                    <Text>Adress.....</Text>
                </View>
                <AirbnbRating style={styles.star} count={props.route.params.avgRating} isDisabled={true} onFinishRating={(x)=>{alert("thanks for your help" , x)}} reviews = {['Terrible', 'Bad', 'Okay', 'Good', 'Great']} defaultRating={9} size={25} showRating={true} startingValue={5}  ratingColor='#f94368' ratingBackgroundColor='#f9b313' type='custom' />
                    
            </View>
        
        <View style={styles.center}>
        <Text style={styles.text}>
          Chose The Event That You Want This Woker To Work On In Just One Click On It
        </Text>
        </View>
        </View>
      <ScrollView >
        <View style={styles.wait}>
          {offers.filter(e=>e.companyCompanyId===38).map((e,i)=>{
            return (
                <TouchableOpacity key={i} style={styles.off} onPress={()=>hire(e)}>
                  <Image style={styles.image}  source={{ uri: e.imageUri }}></Image>
                  <Text style={styles.text}>Type : {e.eventName}</Text>
                  <Text style={styles.text}>Place : {e.location}</Text>
                  <Text style={styles.text}>Posted At : {moment(e.createdAt).fromNow()}</Text>
                </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
      </ScrollView>
        
     
    );
}

const styles = StyleSheet.create({
    users:{
        flex:1,
        width:b100,
        alignContent:'center',
        alignSelf:'center',
        
      },
      text:{
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
        
      },
      center:{
        alignItems:'center',
        alignSelf:'center',
        
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
      img:{
          width:70,
          height:80,
          borderRadius:15,
          backgroundColor:'red'
      },
      user:{
          flex:1,
          flexDirection:"row",
          alignItems:"center",
          
      },
      userr:{
        flex:1,
        flexDirection:"column",
        marginLeft:15
      },
      
      
});
export default UserHire
import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, Alert , View,ScrollView,FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings'
import { useState, useEffect } from 'react';
import server from "./ipConfig/serverIp.js";
import axios from "axios";
import moment from "moment";

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
    return (
      <ScrollView style={styles.users} >
        <View  >
            <View style={styles.user}  >
                <Image  style={styles.img} source={{ uri: props.route.params.imageUrl }}></Image>
                <View style={styles.userr}>
                    <Text>{props.route.params.firstName} {props.route.params.LastName}</Text>
                    <Text>Adress.....</Text>
                </View>
                <AirbnbRating style={styles.star} count={props.route.params.avgRating} isDisabled={true} onFinishRating={(x)=>{alert("thanks for your help" , x)}} reviews = {['Terrible', 'Bad', 'Okay', 'Good', 'Great']} defaultRating={9} size={25} showRating={true} startingValue={5}  ratingColor='#f94368' ratingBackgroundColor='#f9b313' type='custom' />
                    
            </View>
        </View>
        <View style={styles.center}>
        <Text style={styles.text}>
          Chose The Event That You Want This Woker To Work On In Just One Click On It
        </Text>
        <View>
          {offers.filter(e=>e.companyCompanyId===38).map((e,i)=>{
            return (
              <ScrollView key={i}>
                <View style={styles.off}>
                  <Image style={styles.image} source={{ uri: e.imageUri }}></Image>
                  <Text style={styles.text}>Type : {e.eventName}</Text>
                  <Text style={styles.text}>Place : {e.location}</Text>
                  <Text style={styles.text}>Posted At : {moment(e.createdAt).fromNow()}</Text>
                </View>
              </ScrollView>
            )
          })}
        </View>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    users:{
        flex:1,
        width:350,
        alignContent:'center',
        alignSelf:'center',
        
      },
      text:{
        alignSelf:'center',
      },
      center:{
        alignItems:'center',
        alignSelf:'center',
        
      },
      off:{
        flex:1,
        margin:5,
        width: 209,
        height: 234,
        borderRadius:15,
      },
      image:{
        flex:1,
        width: 195,
        borderRadius:15,
      },
      text:{
        color:'#00BFFF',
        
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
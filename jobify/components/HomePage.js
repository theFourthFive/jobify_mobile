import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';
import server from "./ipConfig/serverIp.js"
import axios from 'axios';

import EventHomePage from './EventHomePage.js';
import UsersHomePage from './UsersHomePage.js';

const HomePage=()=> {
  var [offers , setoffers] = useState([])
  var [users,setusers] = useState([])
 useEffect( () =>{
   const URL = `${server.Ip}/events/`
   const URL1 = `${server.Ip}/workers/`
  axios.get(URL).then((response)=>{
    setoffers(response.data)
  }).catch(err=>{
    console.log(err)
  })
  axios.get(URL1).then((res)=>{
    var user = res.data
    user.sort((a,b)=>{ return b.avgRating-a.avgRating})
    setusers(user)
  }).catch(err=>{
    console.log(err)
  })
 
},[])



  return (
    <View>
      <ScrollView  vertical={true} >
        <View style={styles.name} >
            <Text style={styles.namein}>Jobify</Text>
        </View>
        <View style={styles.desc}>
            <Text style={styles.descdesc}>Welcome to our website!</Text>
        </View>
        <View style={styles.search} >
            <TextInput style={styles.searchtext}  placeholder='search for a job ...' ></TextInput>
            <View style={styles.icon} ></View>
        </View>
        <Text style={styles.offername}>Some Of Offers</Text>
        <View style={styles.container} >
           <ScrollView  horizontal={true}>
            <View style={styles.alloff}>
              {offers.map((e,i)=><EventHomePage key={i} offer={e}/>)}
            </View>
          </ScrollView>
        </View>
        <Text style={styles.usersrate}>Some Of Users</Text>
        <View style={styles.container1}>
          
            <View style={styles.alloff1}>
              {users.map((e,i)=><UsersHomePage key={i} user={e}/>)}
            </View>
        </View>
          </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:310,
    alignItems: "center"
  },
  container1: {
    flex:1,
    alignItems: "center"
  },
  name:{
    position: "absolute",
    width: 131,
    height: 44,
    left: 24,
    top: 39,
    backgroundColor: "#00BFFF",
    borderRadius: 14,
  },
  namein:{
    left:23,
    top:7,
    fontSize:24,
    fontWeight:"600",
    lineHeight: 27,
    letterSpacing: 0.5,
    color:"#111417",
  },
  desc:{
    position: "absolute",
    width: 325,
    height: 72,
    left: 24,
    top: 117,
  },
  descdesc:{
    fontSize:28,
    fontWeight:"700",
    lineHeight: 26,
    letterSpacing: 0.5,
  },
  search:{
    position: "absolute",
    width: 327,
    height: 47,
    left: 24,
    top: 219,
    backgroundColor:"#00BFFF",
    borderRadius:14
    
  },
  searchtext:{
    width:250,
    height:26,
    top:10,
    left:44,
    fontWeight:"600",
    fontSize:14,
    lineHeight:16,
    // borderWidth:1
  },
  offername:{
    width:140,
    height:26,
    top:297,
    left:24,
    fontWeight:'700'
  },
  icon:{
    position: "absolute",
    width: 20,
    height: 17,
    left: 318,
    top: 234,
  },
  off:{
    flex:1,
    borderWidth:3,
    margin:5,
    width: 209,
    height: 254,
    marginLeft:25,
    borderRadius:15,
    
  },
  
  alloff:{
    flex:1,
    flexDirection:"row",
    marginTop: 10,
    marginLeft:20
  },
  usersrate:{
    fontWeight:"700",
    fontSize:14,
    lineHeight:16,
    left:25,
    marginTop:20
  },
  users:{
    flex:1,
    width: 350,
    height: 84,
    marginTop:10,
    borderWidth:2,
    backgroundColor: "white",
    opacity:0.8,
    borderRadius:17
  },
  alloff1:{
    flex:1,
    flexDirection:"column",
    marginTop: 25,
  },
});
export default HomePage
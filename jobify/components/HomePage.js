import React from 'react';
import { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import server from "./ipConfig/serverIp.js"
import axios from 'axios';
import colors from '../assets/colors/colors'
import EventHomePage from './EventHomePage.js';
import UsersHomePage from './UsersHomePage.js';
const {width} = Dimensions.get('screen');
const HomeScreen = ({navigation}) => {
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
    <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={styles.header}>
        <Icon name="sort" size={28} color={colors.white} />
       
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.blue,
            height: 120,
            paddingHorizontal: 20,
           
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.headerTitle}>Jobify</Text>
            <Text style={styles.headerTitle}>find a job Here</Text>
            <View style={styles.inputContainer}>
              <Icon name="search" size={28} color={colors.blueDark}/>
              <TextInput
                placeholder="Search place"
                style={{color: colors.grey}}
              />
            </View>
          </View>
        </View>
       
       
        <Text style={styles.sectionTitle}>Closest events</Text>
      
        <View  >
          
           <ScrollView  horizontal={true}>
          
            <View style={styles.alloff}>
              {offers.map((e,i)=><EventHomePage key={i} offer={e}/>)}
            </View>
          </ScrollView>
        </View>
        <Text style={styles.sectionTitle}>Recommended Users</Text>
        <View style={styles.container1}>
          
            <View style={styles.alloff1}>
              {users.map((e,i)=><UsersHomePage key={i} user={e}/>)}
            </View>
        </View>
          </ScrollView>
      
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
  },
  headerTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: '100%',
    backgroundColor: colors.white,
    borderRadius: 10,
    position: 'absolute',
    top: 90,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginTop:40,
    fontWeight: 'bold',
    fontSize: 20,
    color:colors.blue,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: 'hidden',
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
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
    marginTop: 20,
    marginLeft:20
  },
  usersrate:{
    fontWeight:"700",
    fontSize:14,
    lineHeight:16,
    left:25,
    marginTop:20,
    color:colors.blue,
    fontWeight: 'bold',
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
export default HomeScreen;
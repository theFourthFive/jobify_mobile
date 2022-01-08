import React , {useState , useEffect} from 'react';
import {Text,ScrollView,View,Image,StyleSheet} from 'react-native';
import CardItem from './CardItem';
import axios from 'axios';
const styles = StyleSheet.create({
 container: {
     marginTop:200,
     alignItems: "center"
 }
})

const  EventList = () => {
  var [events , setevents] = useState([])

 useEffect( () =>{
   const URL = "http://localhost:3000/events/"
  axios.get(URL).then((res)=>{
    setevents(res.data)
  
  })
 
 },[])

console.log(events);
  return (
 <View style={styles.container} >
 <ScrollView >
 {events.map((ele,i)=><CardItem key={i} event={ele} />)}

  </ScrollView>
 </View>

  );
}


export default EventList ;

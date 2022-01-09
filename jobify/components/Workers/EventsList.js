import React , {useState , useEffect} from 'react';
import {Text,ScrollView,View,Image,StyleSheet} from 'react-native';
import CardItem from './CardItem';
import axios from 'axios';
const styles = StyleSheet.create({
 container: {
     marginTop:5,
     alignItems: "center"
 }
})

const  EventList = () => {
  var [events , setevents] = useState([])

 useEffect( () =>{
   const URL = "http://192.168.1.246:3000/events/"
  axios.get(URL).then((res)=>{
    setevents(res.data)
  
  })
 
 },[])
 
function refresh(){

  const URL = "http://192.168.1.246:3000/events/"
  axios.get(URL).then((res)=>{
    setevents(res.data)  })
}


console.log(events);
  return (
 <View style={styles.container} >
 <ScrollView >
 {events.map((ele,i)=><CardItem key={i} event={ele} reff={refresh} />)}

  </ScrollView>
 </View>

  );
}


export default EventList ;

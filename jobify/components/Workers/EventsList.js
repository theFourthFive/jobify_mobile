import React , {useState , useEffect} from 'react';
import {Text,ScrollView,View,Image,StyleSheet, Button,AsyncStorage} from 'react-native';
import CardItem from './CardItem';
import axios from 'axios';
import server from "../ipConfig/serverIp"

const styles = StyleSheet.create({
 container: {
     marginTop:80,
     alignItems: "center"
  
 }
})

const  EventList = () => {

  var [events , setevents] = useState([])

 useEffect( async() =>{

  await refresh()
 
 },[])
 
async function refresh(){
  try{
    const connectedUser = await AsyncStorage.getItem("session")
    const URL = `${server.Ip}/events/worker/${connectedUser}`
    const res = await axios.get(URL)
     setevents(res.data[0])
    }catch(err){console.log(err)}

}


var subscribe = async(eventID) => {
   
  const workerId  = await AsyncStorage.getItem("session")
  const subscribeData = {workerId , eventID}
  const URL = `${server.Ip}/events/subscribe`
  axios.post(URL,subscribeData).then(res=>{
    var x = events 
    x.pop()
    setevents(x)
    console.log("==============================>>>>",events.eventID , "<===================")
  }).catch(err=>{console.log(err)})



 alert("subscription passed successfully")

}




  return (
 <View style={styles.container} >
 
 <ScrollView >

 {events.map((ele,i)=><CardItem key={i} event={ele} reff={refresh} sub={subscribe} />)}

  </ScrollView>
 </View>

  );
}


export default EventList ;

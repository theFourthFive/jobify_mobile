import React,{useEffect , useState} from "react";
import server from "../../ipConfig/serverIp"
import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  Button,
  AsyncStorage,
  TouchableOpacity

} from "react-native";
import moment from "moment";
import axios from "axios";
import WorkerRateItem from "./WorkerRateItem";
import { log } from "react-native-reanimated";


const styles = StyleSheet.create({
  subscriptionsCounter:{
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    padding: 2,
  },
  card_template: {
    flex: 1,
    width: "100%",
    height: "50%",
    marginBottom : 480,
    marginTop: "30%",

  },
  card_image: {
    width: "40%",
    height: "30%",
    borderRadius: 20,
 
  },
  card_title: {
    fontSize: 20,
    fontWeight: "bold",
    color : "white",
    margin : 5

  },
  price: {
    marginTop: 10,
    fontSize: 20,
    backgroundColor:"white"
  },
  time: { fontSize: 20, paddingBottom: 10 , color : "white" },

  button: {
    height: "20%",
    width: "100%",
  },
  submitButton: {
    padding: "1%",
  },
  campany_image: {
    
    height: "44%",
    width:"50%",
    borderRadius: 100,
  },
  campany: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardContainer :{
    backgroundColor : "#004d4f",
    marginBottom : "5%",
    borderRadius : 10, 
    width : "100%",
    height : "35%"
    
  },
  workers :{
    marginTop : "10%"
  } , 
 location : {
   color : "white" ,
  fontSize : 10 , 
  margin: 1
 }
});

const EventWorkers = ({route , navigation}) => {

var [feed , setFeed]= useState({})
var [workers , setWorkers] = useState([])

useEffect(()=>{ 
 (
  async()=>{
    await fetchWorks()
   }
 )()
},[])



 var fetchWorks = async ()=>{
  try{
    const data = route.params.data
    setFeed(()=>{return data}) 
    const result = await axios.get(`${server.Ip}/companyevetns/subscribers/${data.eventID}`)
    setWorkers(result.data[0] )
 
}
catch(err){
 console.log(err);
}
   


 }

 var hired=(id)=>{
  var nonfeedbacked = workers
  console.log(nonfeedbacked[0].workerId)
   var nonfeedbacked = nonfeedbacked.filter((ele)=>ele.workerId!==id)
   setWorkers(()=>nonfeedbacked) 
 }
 
 var denyed=(id)=>{
  var nonfeedbacked = workers
  console.log(nonfeedbacked[0].workerId)
   var nonfeedbacked = nonfeedbacked.filter((ele)=>ele.workerId!==id)
   setWorkers(()=>nonfeedbacked) 
 }
  return (
<View>
    <View style={styles.cardContainer}>
    
 
    <View>
      <Text style={styles.card_title}>
        {feed.eventName} 
        
      </Text>
      <Image
        style={styles.card_image}
        source={{ uri: feed.imageUri }}
      />

 
      <Text style={styles.location}>
        location {feed.location}
        
      </Text>
      <Text style={styles.time}>
        Posted at : {moment(feed.createdAt).fromNow()}
       
      </Text>
      <Text style={styles.subscriptionsCounter}>
      {"\n"} you have : {workers.length} subscriptions
      </Text>
      <Image
        style={styles.campany_image}
        source={{ uri: feed.imageUrl }}
      />

    <Text style={styles.card_title}>
        {feed.label} {"\n"}
      </Text>
    
    </View>

  </View>
  <ScrollView style={styles.workers} >
  {workers.map((ele,i)=>
     <WorkerRateItem key={i} eventID={feed.eventID} denyed={denyed} hired={hired} user={ele}/>
   )}
   </ScrollView>
  </View>
  );
};

export default EventWorkers;

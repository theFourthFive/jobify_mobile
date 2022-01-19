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


const styles = StyleSheet.create({
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

  },
  price: {
    marginTop: 10,
    fontSize: 20,
  },
  time: { fontSize: 20, paddingBottom: 10 },

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
    backgroundColor : "#E9E5E3",
    marginBottom : "5%",
    borderRadius : 10, 
    width : "100%",
    height : "35%"
    
  }
});

const EventWorkers = ({route , navigation}) => {

var [feed , setFeed]= useState({})
var [workers , setWorkers] = useState([])

useEffect(async ()=>{ 
  try{
       const data = route.params.data
       setFeed(data) 
       const workers = await axios.get(`${server.Ip}/companyevetns/workers/${data.eventID}`)
       setWorkers(workers.data)
  
  }
  catch(err){
    console.log(err);
  }
},[])



  return (
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

      <Image
        style={styles.campany_image}
        source={{ uri: feed.imageUrl }}
      />

<Text style={styles.card_title}>
        {feed.label} {"\n"}
      </Text>
    
    </View>

 <Text>{workers.data[0][0].firstName} </Text>

  </View>
  );
};

export default EventWorkers;

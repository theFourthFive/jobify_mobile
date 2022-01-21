import React,{useEffect , useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { Button,Image, StyleSheet, Text, TextInput, View,ScrollView,FlatList } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings'
import { log } from 'react-native-reanimated';
import colors from '../../../assets/colors/colors';
import axios from 'axios'
import server from "../../ipConfig/serverIp"

const WorkerRateItem=(props)=> {
   var [rate , setrate] = useState()
   var [feedback , setfeedback] = useState()

 useEffect(() => {
     console.log(props.eventID);
 })


    const getrating = (rating)=>{
         setrate(rating);
    }
const hire = async()=>{

   const userId = props.user.workerId
   alert("subscription for this job has been accepted")
   props.hired(props.user.workerId);
   const URL = `${server.Ip}/companyevetns/hire/${props.eventID}/${userId}`
   const res = await axios.post(URL, {rate,feedback});
  
}

const deny = async()=>{

    const userId = props.user.workerId
    alert("subscription for this job has been denied")
    props.denyed(props.user.workerId);
    const URL = `${server.Ip}/companyevetns/deny/${props.eventID}/${userId}`
    const res = await axios.post(URL, {rate,feedback});
   
 }


    return (
        <View style={styles.users}>
            <View style={styles.user}>
                <Image style={styles.img} source={{ uri: props.user.imageUrl }}></Image>
                <View style={styles.userr}>
                    <Text style={{color:colors.blue,fontWeight: 'bold',}}>{props.user.firstName} {props.user.LastName}</Text>
                    <Text style={{color:colors.blueDark}} >Adress.....</Text>
                </View>
                
                    <Rating
                    count={5}
                     showRating
                     ratingCount={5}
                     onFinishRating={getrating}
                     style={{ paddingVertical: 10 }}
                     isDisabled={true}
                     startingValue = {props.user.avgRating}
                     readonly = {true}
                     fractions = {2}
                    />
            </View>
       
            <Button
               title="Hire"
               color = "#1fb500"
               onPress={hire}
               styles={styles.hireButton}
           />
          <Button
               title="deny"
               color="#FF5733"
               onPress={deny}
               styles={styles.denyButton}
               
           />
        </View>
    );
}

const styles = StyleSheet.create({
    users:{
        
        flex:1,
        width: "100%",
        height: 300,
        marginTop:10,
        borderWidth:2,
        backgroundColor: "white",
        opacity:0.8,
        borderRadius:17,
        marginBottom : 15
      },
      text:{
        color:'#00BFFF',
      },
      img:{
          width:100,
          height:100,
          borderRadius:60
      },
      user:{
          flex:1,
          flexDirection:"row",
          alignItems:"center",
      },
      userr:{
        flex:1,
        flexDirection:"column",
        marginLeft:15,
        
      },
      star:{
          color:colors.gold,
      },
      feedbackInput : {
        margin: 5,
        height: "40%",
        borderColor: '#000',
        borderWidth: 1,
        width : "90%"

    
      } , 
      inputsContainer : {
       alignSelf : "center",
        width : "80%",
        height: 85
      },

      denyButton : {
        color : "#fff",
     borderRadius : 50
      },
      hireButton:{
        
      }
      
      
});
export default WorkerRateItem
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
    const getrating = (rating)=>{
         setrate(rating);
    }
const handlesubmit = async()=>{

   const userId = props.user.workerId
   alert("thak you for your feed back")
   props.feedbacked(props.user.workerId);
   const URL = `${server.Ip}/companyevetns/rate/${37}/${userId}`

   const res = await axios.post(URL, {rate,feedback});

   
  
  
}


    return (
        <View style={styles.users}>
            <View style={styles.user}>
                <Image style={styles.img} source={{ uri: props.user.imageUrl }}></Image>
                <View style={styles.userr}>
                    <Text style={{color:colors.blue,fontWeight: 'bold',}}>{props.user.firstName} {props.user.LastName}</Text>
                    <Text style={{color:colors.blueDark}} >Adress...</Text>
                </View>
                  
                    <Rating
                     showRating
                     ratingCount={5}
                     onFinishRating={getrating}
                     style={{ paddingVertical: 10 }}
                    />
            </View>
            <View style = {styles.inputsContainer}>
            <TextInput style={styles.feedbackInput} onChangeText={text => {setfeedback(text);}} />
            </View>
            <Button
               title="confirm Feedback"
               color="#ff7f00"
               onPress={handlesubmit}
           />
        </View>
    );
}

const styles = StyleSheet.create({
    users:{
        
        flex:1,
        width: "100%",
        height: 250,
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
          width:70,
          height:80,
          borderRadius:15
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
      }
      
      
});
export default WorkerRateItem
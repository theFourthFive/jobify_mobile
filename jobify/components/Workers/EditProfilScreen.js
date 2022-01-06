
import React, { useState } from 'react';
import axios from "axios";
import {  
   StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,} from 'react-native';


export default function EditProfilScreen() {
    const[WorkerId,setWorkerId]=useState('')
    const [FirstName,setFirstName]=useState('')
    const [LasttName,setLastName]=useState('')
    const [Email,setEmail]=useState('')
    const [phoneNumber,setphoneNumber]=useState('')
    const [imageUrl,setimageUrl]=useState('')
    const [CVUrl,setCVUrl]=useState('')
    const [availibility,setavailibility]=useState('')
    const [password,setpassword]=useState('')
    // const [avgRating,setavgRating]=useState('')
    // const [Cathegorield,setCathegorield]=useState('')
    const handelChangeWorkerId = (WorkerId)=>{
      
      setFirstName(WorkerId)
    }
    const handelChangeFirstName = (FirstName)=>{
      
      setFirstName(FirstName)
    }
    const handelChangeLasttName = (LasttName)=>{
      
      setLastName(LasttName)
    }
    const handelChangeEmail = (Email)=>{
      
      setEmail(Email)
    }
    const handelChangephoneNumber = (phoneNumber)=>{
      
      setphoneNumber(phoneNumber)
    }
    const handelChangeimageUrl = (imageUrl)=>{
      
      setimageUrl(imageUrl)
    }
    const handelChangeCVUrl = (CVUrl)=>{
      
      setCVUrl(CVUrl)
    }
    const handelChangeavailibility = (availibility)=>{
      
      setavailibility(availibility)
    }
    const handelChangepassword = (password)=>{
      
      setpassword(password)
    }
  
    const onUpdatzFormHandler = async (event) => {
      axios
        .post("/edit", {
          FirstName,
          LasttName,
          Email,
          phoneNumber,

        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
            console.log("===>");
          console.log(error);
        });}


  return (

   // <ScrollView contentContainerStyle={styles.container}>
   <View Style={styles.container}>
   <View style={styles.wrapper}>
     <Text style={styles.formHeading}>Create  new Event</Text>
   </View>
   <View style={styles.wrapper}>
     <TextInput
       placeholder="FirstName"
       placeholderTextColor= "#252526"
       style={styles.input}
       value={FirstName}
       // editable={!isLoading}
       onChangeText={handelChangeFirstName}
     />
   </View>
   <View style={styles.wrapper}>
     <TextInput
       placeholder="LasttName"
       placeholderTextColor= "#252526"
       style={styles.input}
       value={LasttName}
       // editable={!isLoading}
       onChangeText={handelChangeFirstName}
     />
   </View>
   <View style={styles.wrapper}>
     <TextInput
       placeholder="FirstName"
       placeholderTextColor= "#252526"
       style={styles.input}
       value={FirstName}
       // editable={!isLoading}
       onChangeText={handelChangeFirstName}
     />
   </View>
  
   <View>
      <Button
       title="Update"
       onPress={onUpdatzFormHandler}
       style={styles.UpdateButton}
       // disabled={isLoading}
     />
    </View >
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: "center",
    justifyContent: "center",
    // width:"100%"
    // marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
  },
  formHeading: {
    color:  "#252526",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    paddingVertical:5,
    paddingHorizontal:15,
    width:250,
    backgroundColor:'#fff',
    borderRadius:60,
    borderWidth:1,
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
    
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor:'#fff',
    borderRadius:60,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    borderWidth:1,
    
  },
  
});






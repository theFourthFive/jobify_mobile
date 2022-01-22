import axios from "axios";
import React, { useState } from "react";
// import DatePicker from "react-native-datepicker";
// import DateTimePicker from "@react-native-community/datetimepicker";

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
  Image,
  SafeAreaView,
} from "react-native";
export default function AddEvent() {
  const [companyId, setCompanyId] = useState("37");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date_time, setDate_time] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [duration, setDuration] = useState("");
  const [dailyPay, setDailyPay] = useState("");
  const [nbrWaiter, setNbrWaiter] = useState("");
  const [nbrChef, setNbrChef] = useState("");
  const [nbrCleaningWorker, setNbrCleaningWorker] = useState("");
  const [date, setDate] = useState(new Date());
  

  /* handelChange functions here*/
  
  const onChangeeventNameHandler = (eventName) => {
    setEventName(eventName);
    console.log(eventName);
  };
  const onChangelocationHandler = (location) => {
    setLocation(location);
  };
  const onChangedate_timeHandler = (date_time) => {
    setDate_time(date_time);
  };
  const onChangeimageUriHandler = (imageUri) => {
    setImageUri(imageUri);
  };
  const onChangedurationHandler = (duration) => {
    setDuration(duration);
  };
  const onChangedailyPayHandler = (dailyPay) => {
    setDailyPay(dailyPay);
  };
  const onChangenbrWaiterHandler = (nbrWaiter) => {
    setNbrWaiter(nbrWaiter);
  };
  const onChangenbrChefHandler = (nbrChef) => {
    setNbrChef(nbrChef);
  };
  const onChangenbrCleaningWorkerHandler = (nbrCleaningWorker) => {
    setNbrCleaningWorker(nbrCleaningWorker);
  };
  const onSubmitFormHandler = async (event) => {
  ;
    
    axios
      .post(`${server.Ip}/addEvent/${37}`, {
        companyId,
        eventName,
        location,
        date_time,
        imageUri,
        duration,
        dailyPay,
        nbrWaiter,
        nbrChef,
        nbrCleaningWorker,
      })
      .then(function (response) {
        
        console.log(response);
      })
      .catch(function (error) {
       
         console.log('work plz')
        console.log(error);
      });
  };
  return (
    
    <ScrollView contentContainerStyle={styles.container}>
    <View Style={styles.container}>
        
      <View style={styles.wrapper}>
        {/* {isLoading ? (
            <Text style={styles.formHeading}> Creating resource </Text>
          ) : ( */}
        <Text style={styles.formHeading}>Create new Event</Text>
      </View>

      <View style={styles.wrapper}>
        <TextInput
          placeholder="Event Name"
          placeholderTextColor="#252526"
          style={styles.input}
          value={eventName}
          // editable={!isLoading}
          onChangeText={onChangeeventNameHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Location"
          placeholderTextColor="#252526"
          style={styles.input}
          value={location}
          // editable={!isLoading}
          onChangeText={onChangelocationHandler}
        />
      </View>
     
      <View style={styles.wrapper}>
        <TextInput
          placeholder="Img"
          placeholderTextColor="#252526"
          style={styles.input}
          value={imageUri}
          // editable={!isLoading}
          onChangeText={onChangeimageUriHandler}
        />
      </View>
      
      <View style={styles.wrapper}>
        <TextInput
          placeholder=" date_time"
          placeholderTextColor="#252526"
          style={styles.input}
          value={date_time}
          // editable={!isLoading}
          onChangeText={onChangedate_timeHandler}
        />
      </View>
      
      <View style={styles.wrapper}>
        <TextInput
          placeholder=" Duration"
          placeholderTextColor="#252526"
          style={styles.input}
          value={duration}
          // editable={!isLoading}
          onChangeText={onChangedurationHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="DailyPay"
          placeholderTextColor="#252526"
          style={styles.input}
          value={dailyPay}
          // editable={!isLoading}
          onChangeText={onChangedailyPayHandler}
        />
      </View>

      <View style={styles.wrapper}>
        <TextInput
          placeholder="nbrWaiter"
          placeholderTextColor="#252526"
          style={styles.input}
          value={nbrWaiter}
          // editable={!isLoading}
          onChangeText={onChangenbrWaiterHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="nbrChef"
          placeholderTextColor="#252526"
          style={styles.input}
          value={nbrChef}
          // editable={!isLoading}
          onChangeText={onChangenbrChefHandler}
        />
      </View>
      <View style={styles.wrapper}>
        <TextInput
          placeholder="nbrCleaningWorker"
          placeholderTextColor="#252526"
          style={styles.input}
          value={nbrCleaningWorker}
          // editable={!isLoading}
          onChangeText={onChangenbrCleaningWorkerHandler}
        />
      </View>
     

      <View>
        <Button
          title="Submit"
          onPress={onSubmitFormHandler}
          style={styles.submitButton}
          // disabled={isLoading}
        />
        
      </View>
      
    </View>
   </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    // width:"100%"
    // marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
  },
  formHeading: {
    color: "#252526",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 60,
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
    
    
  },
  addWrapper: {
    width: 150,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    // borderWidth:1,
    flexDirection:'row',
  justifyContent:'space-around',
  paddingHorizontal:1,
  },
 
});

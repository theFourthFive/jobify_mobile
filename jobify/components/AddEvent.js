import axios from "axios";
import React, { useState } from "react";
import DatePicker from "react-native-datepicker";
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";
export default function AddEvent() {
  const [companyId, setCompanyId] = useState("");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date_time, setDate_time] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [duration, setDuration] = useState("");
  const [dailyPay, setDailyPay] = useState("");
  const [nbrWaiter, setNbrWaiter] = useState("");
  const [nbrChef, setNbrChef] = useState("");
  const [nbrCleaningWorker, setNbrCleaningWorker] = useState("");
  /* handelChange functions here*/
  const onChangeeventNameHandler = (eventName) => {
    setEventName(eventName);
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
//   const onSubmitFormHandler = async (event) => {
//     try {
//         const response = await axios.post("/addEvent", {
//             companyId,
//             eventName,
//             location,
//             date_time,
//             imageUri,
//             duration,
//             dailyPay,
//             nbrWaiter,
//             nbrChef,
//             nbrCleaningWorker,
//           })}
//   .then(function (response) {
//           console.log(response);
//         })
//         .catch(function (error) {
//           console.log(error);
//         });

//   }
const onSubmitFormHandler = async (event) => {
  axios
    .post("/addEvent", {
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
        console.log("===>");
      console.log(error);
    });
}
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.wrapper}>
          {/* {isLoading ? (
            <Text style={styles.formHeading}> Creating resource </Text>
          ) : ( */}
          <Text style={styles.formHeading}>Create new user</Text>
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Event Name"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={eventName}
            // editable={!isLoading}
            onChangeText={onChangeeventNameHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="Location"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={location}
            // editable={!isLoading}
            onChangeText={onChangelocationHandler}
          />
        </View>

        <View style={styles.wrapper}>
          <DatePicker
            placeholder="Date Of The Event"
            placeholderTextColor="#ffffff"
            mode="datetime"
            style={styles.input}
            value={date_time}
            onChangeText={onChangedate_timeHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder=" Duration"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={duration}
            // editable={!isLoading}
            onChangeText={onChangedurationHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="DailyPay"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={dailyPay}
            // editable={!isLoading}
            onChangeText={onChangedailyPayHandler}
          />
        </View>

        <View style={styles.wrapper}>
          <TextInput
            placeholder="nbrWaiter"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={nbrWaiter}
            // editable={!isLoading}
            onChangeText={onChangenbrWaiterHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="nbrChef"
            placeholderTextColor="#ffffff"
            style={styles.input}
            value={nbrChef}
            // editable={!isLoading}
            onChangeText={onChangenbrChefHandler}
          />
        </View>
        <View style={styles.wrapper}>
          <TextInput
            placeholder="nbrCleaningWorker"
            placeholderTextColor="#ffffff"
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
    backgroundColor: "#252526",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
  },
  formHeading: {
    color: "#ffffff",
  },
  wrapper: {
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "grey",
    minWidth: 200,
    textAlignVertical: "center",
    paddingLeft: 10,
    borderRadius: 20,
    color: "#ffffff",
  },
  submitButton: {
    backgroundColor: "gray",
    padding: 100,
  },
});

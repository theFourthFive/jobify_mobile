import React, { useState } from "react";
import axios from "axios";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
// import SelectDropdown from "react-native-select-dropdown";
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  Picker,
  TextInput,
} from "react-native";

export default function EditProfilScreen() {
  const [WorkerId, setWorkerId] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LasttName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [Location, setLocation] = useState("");
  const [CVUrl, setCVUrl] = useState("");
  const [availibility, setavailibility] = useState("");
  const [password, setpassword] = useState("");
  // const [avgRating,setavgRating]=useState('')
  // const [Cathegorield,setCathegorield]=useState('')
  const handelChangeLocation = (Location) => {
    setLocation(Location);
  };
  const handelChangeWorkerId = (WorkerId) => {
    setWorkerId(WorkerId);
  };
  const handelChangeFirstName = (FirstName) => {
    setFirstName(FirstName);
  };
  const handelChangeLasttName = (LasttName) => {
    setLastName(LasttName);
  };
  const handelChangeEmail = (Email) => {
    setEmail(Email);
  };
  const handelChangephoneNumber = (phoneNumber) => {
    setphoneNumber(phoneNumber);
  };
  const handelChangeimageUrl = (imageUrl) => {
    setimageUrl(imageUrl);
  };
  const handelChangeCVUrl = (CVUrl) => {
    setCVUrl(CVUrl);
  };
  const handelChangeavailibility = (availibility) => {
    setavailibility(availibility);
  };
  const handelChangepassword = (password) => {
    setpassword(password);
  };

  const onUpdatzFormHandler = async (event) => {
    axios
      .post("/edit", {
        WorkerId,
        Location,
        FirstName,
        LasttName,
        Email,
        phoneNumber,
        imageUrl,
        CVUrl,
        availibility,
        password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("===>");
        console.log(error);
      });
  };

  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View Style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.Img}
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
        />
        <Text style={styles.formHeading}>Edit Photo</Text>
      </View>
      <View style={styles.wrapper}>
        <FontAwesome name="user-o" color="#333333" size={20} />
        <TextInput
          placeholder="FirstName"
          placeholderTextColor="#252526"
          style={styles.input}
          value={FirstName}
          // editable={!isLoading}
          onChangeText={handelChangeFirstName}
        />
      </View>
      <View style={styles.wrapper}>
        <FontAwesome name="user-o" color="#333333" size={20} />
        <TextInput
          placeholder="LasttName"
          placeholderTextColor="#252526"
          style={styles.input}
          value={LasttName}
          // editable={!isLoading}
          onChangeText={handelChangeLasttName}
        />
      </View>
      <View style={styles.wrapper}>
        <Feather name="phone" color="#333333" size={20} />
        <TextInput
          placeholder="phoneNumber"
          placeholderTextColor="#252526"
          style={styles.input}
          value={phoneNumber}
          // editable={!isLoading}
          onChangeText={handelChangephoneNumber}
        />
      </View>
      <View style={styles.wrapper}>
        
        <TextInput
          placeholder="About_Me"
          placeholderTextColor="#252526"
          style={styles.input}
          value={phoneNumber}
          // editable={!isLoading}
          onChangeText={handelChangephoneNumber}
        />
      </View>
      <View style={styles.wrapper}>
        {/* <TextInput
          placeholder="availibility"
          placeholderTextColor="#252526"
          style={styles.input}
          value={availibility}
          // editable={!isLoading}
          onChangeText={handelChangeavailibility}
        /> */}
        <Picker
         placeholder="availibility"
          Value={availibility}
          style={styles.picker}
          // onChangeText={handelChangeavailibility}
         
        >
          <Picker.Item label={'Monday'} value="Monday" />
          <Picker.Item label={'Tuesday'} value="Tuesday" />
          <Picker.Item label={'Wednesday'} value="Tuesday" />
          <Picker.Item label={'Thursday'} valu e= "Tuesday" />
          <Picker.Item label={' Friday'} value="Tuesday" />
          <Picker.Item label={'Saturday'} value="Tuesday" />
          <Picker.Item label={'sunday'} value="Tuesday" />

        </Picker>
      </View>
      <View style={styles.wrapper}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          color="#333333"
          size={20}
        />
        <TextInput
          placeholder="Location"
          placeholderTextColor="#252526"
          style={styles.input}
          value={Location}
          // editable={!isLoading}
          onChangeText={handelChangeLocation}
        />
      </View>

      <View>
        <Button
          title="Update"
          onPress={onUpdatzFormHandler}
          style={styles.UpdateButton}
          // disabled={isLoading}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
  },
  picker:{
    paddingTop: 40,
    alignItems: "center",
    height: 50, 
    width: 150 ,
    borderRadius: 60,

  },
  formHeading: {
    color: "#252526",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
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
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
  },
  Img: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
});

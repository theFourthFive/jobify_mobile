import React, { useState } from "react";
import axios from "axios";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Picker } from "@react-native-picker/picker";
// import Icon from '@mdi/react'
// import { mdiAccount } from '@mdi/js'

import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Button,
  Platform,
  TextInput,
} from "react-native";

export default function EditProfilScreen() {
  const [WorkerId, setWorkerId] = useState("");
  const [firstName, setfirstName] = useState("");
  const [LasttName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [City, setCity] = useState("");
  const [CVUrl, setCVUrl] = useState("");
  const [availibility, setavailibility] = useState("");
  const [password, setpassword] = useState("");
  const [avgRating, setavgRating] = useState("");

  // handel change function
  const handelChangeCity = (City) => {
    setCity(City);
  };
  const handelChangeWorkerId = (WorkerId) => {
    setWorkerId(WorkerId);
  };
  const handelChangefirstName = (firstName) => {
    setfirstName(firstName);
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
        City,
        firstName,
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
    <View Style={styles.container}>
      <View style={styles.wrapper}>
        <Image
          style={styles.Img}
          source={{
            uri: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
          }}
        />
        <Text style={styles.formHeading}>Edit Photo</Text>
      </View>

      <View style={styles.action}>
        <FontAwesome name="user-o" color="#333333" size={20} />
        <TextInput
          placeholder="FirstName"
          placeholderTextColor="#252526"
          style={styles.textInput}
          value={firstName}
          onChangeText={handelChangefirstName}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#333333" size={20} />
        <TextInput
          placeholder="LasttName"
          placeholderTextColor="#252526"
          style={styles.textInput}
          value={LasttName}
          onChangeText={handelChangeLasttName}
        />
      </View>
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#333333" size={20} />

        {/* <Icon path={mdiAccount}
        title="User Profile"
        size={1}
        horizontal
        vertical
        rotate={90}
        color="red"
        spin/> */}
        <TextInput
          placeholder="Email"
          placeholderTextColor="#252526"
          style={styles.textInput}
          value={Email}
          onChangeText={handelChangeEmail}
        />
      </View>
      <View style={styles.action}>
        <Feather name="phone" color="#333333" size={20} />
        <TextInput
          placeholder="phoneNumber"
          placeholderTextColor="#252526"
          style={styles.textInput}
          value={phoneNumber}
          onChangeText={handelChangephoneNumber}
        />
      </View>
      <View style={styles.action}>
        <Ionicons name="ios-clipboard-outline" color="#333333" size={20} />
        <TextInput
          placeholder="About_Me"
          placeholderTextColor="#252526"
          style={styles.textInput}
          value={phoneNumber}
          onChangeText={handelChangephoneNumber}
        />
      </View>

      <View style={styles.action}>
        <Picker
          placeholder="availibility"
          placeholderTextColor="#252526"
          Value={availibility}
          style={styles.picker}
          onChangeText={handelChangeavailibility}
        >
          <Picker.Item label={"Monday"} value="Monday" />
          <Picker.Item label={"Tuesday"} value="Tuesday" />
          <Picker.Item label={"Wednesday"} value="Tuesday" />
          <Picker.Item label={"Thursday"} valu e="Tuesday" />
          <Picker.Item label={" Friday"} value="Tuesday" />
          <Picker.Item label={"Saturday"} value="Tuesday" />
          <Picker.Item label={"sunday"} value="Tuesday" />
        </Picker>
      </View>

      <View style={styles.action}>
        <MaterialCommunityIcons
          name="map-marker-outline"
          color="#333333"
          size={20}
        />
        <TextInput
          placeholder="City"
          placeholderTextColor="#252526"
          style={styles.textInput}
          value={City}
          onChangeText={handelChangeCity}
        />
      </View>

      <View>
        <Button
          title="Update"
          onPress={onUpdatzFormHandler}
          style={styles.UpdateButton}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    marginTop: Platform.Version === "android" ? 0 : -20,
    paddingLeft: 9,
    paddingRight: 182,
    color: "#333333",
  },
  picker: {
    paddingTop: 40,
    alignItems: "center",
    height: 50,
    width: 150,
    borderRadius: 60,
  },
  formHeading: {
    color: "#252526",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 105,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 8,
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
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 105,
  },
});

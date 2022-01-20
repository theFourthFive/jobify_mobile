import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Alert, TextInput } from "react-native";

import { useState } from "react";
import Axios from "axios";
// import server from "./ipConfig/serverIp";
import server from "./ipConfig/serverIp";

export default function Signup({ navigation }) {
  const sendmsg = () => {
    var mailOptions = {
      from: "bob479402@gmail.com",
      to: email,
      subject: "jobify",
      text: "bob",
    };

    Axios.post(`${server.url}/nodemailer/nodemailer`, mailOptions)
      .then((data) => {
        console.log(data);
        console.log("==========", email);
      })
      .catch((error) => {
        console.error("/////////////////////////////////////////", error);
      });
  };

  const post = () => {
    // Axios.post('http://localhost:4000/worker/signup/',data,(req,res)=>{
    //   console.log(req.body)
    //   res.send(data)
    // })
    const role = "worker";
    var worker = { firstName, lastName, email, password, phoneNumber, role };
    console.log(worker);
    // Axios.post(`${server.Ip}/workers/signup`, worker)
    Axios.post(`${server.Ip}/worker/signup`, worker)
      .then((response) => {
        console.log(response.data, "<==================================");
        if (response.data === "user exists") {
          console.log(response.data);
          Alert.alert("user already exists");
        } else {
          console.log(response.data, "<============== USER CREATED");
          Alert.alert("you has been registred successfuly");
          navigation.navigate("Login");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [firstName, onChangeFirstName] = useState(null);
  const [lastName, onChangeLastName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [phoneNumber, onChangePhoneNumber] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>

      <View style={styles.blockInput}>
        <TextInput
          placeholder="First name"
          onChangeText={onChangeFirstName}
          value={firstName}
          style={styles.inputs}
        ></TextInput>
      </View>

      <View style={styles.blockInput}>
        <TextInput
          placeholder="Last name"
          onChangeText={onChangeLastName}
          value={lastName}
          style={styles.inputs}
        ></TextInput>
      </View>

      <View style={styles.blockInput}>
        <TextInput
          placeholder="Email"
          onChangeText={onChangeEmail}
          value={email}
          style={styles.inputs}
        ></TextInput>
      </View>

      <View style={styles.blockInput}>
        <TextInput
          placeholder="Phone number"
          onChangeText={onChangePhoneNumber}
          value={phoneNumber}
          secureTextEntry={true}
          style={styles.inputs}
        ></TextInput>
      </View>

      <View style={(styles.blockInput, styles.one)}>
        <TextInput
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          style={styles.inputs}
        ></TextInput>
      </View>

      <Button color="#5FCFFF" title="Sign Up" onPress={() => post()} />

      {/* <StatusBar style="auto" /> */}
      <Text style={styles.signuptext}>Or You Can Singup Using</Text>

      <View style={styles.passport}>
        <Button
          color="#5FCFFF"
          title="Facebook"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          color="#5FCFFF"
          title="Google"
          onPress={() => navigation.navigate("Login")}
        />
      </View>

      <Text onPress={() => navigation.navigate("Login")} style={styles.text}>
        I Already Have An Account
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  inputs: {
    height: 50,
    width: 300,
    borderRadius: 20,
    backgroundColor: "#EFEFEF",
    padding: 15,
  },
  blockInput: {
    margin: 10,
  },
  signup: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 24,
    marginBottom: 60,
    color: "white",
  },
  one: {
    marginBottom: 30,
    marginTop: 10,
  },
  passport: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignSelf: "stretch",
    marginBottom: 30,
  },
  signuptext: {
    marginTop: 40,
    marginBottom: 20,
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
  },
  text: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "white",
    textDecorationLine: "underline",
  },
});

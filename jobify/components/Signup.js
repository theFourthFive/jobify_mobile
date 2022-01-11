import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View,Alert,TextInput } from "react-native";

import { useState } from "react";
import Axios from "axios";
import server from "./ipConfig/serverIp"
export default function Signup({ navigation }) {

  const [FirstName, onChangeFirstName] = useState(null);
  const [LastName, onChangeLastName] = useState(null);
  const [Email, onChangeEmail] = useState(null);
  const [Password, onChangePassword] = useState(null);
  const [PhoneNumber, onChangePhoneNumber] = useState(null);

  const sendmsg=()=>{
    var mailOptions = {
      from:"bob479402@gmail.com",
      to: Email,
      subject:"jobify",
      text: "bob"
  }
    Axios.post(`${server.Ip}/nodemailer/nodemailer,mailOptions`).then(data=>{
      console.log(data)
      console.log('==========',Email)
    })
    .catch(error=>{
      console.error('/////////////////////////////////////////',error)
    })
  }
  const post = () => {
    // Axios.post('http://localhost:4000/worker/signup/',data,(req,res)=>{
    //   console.log(req.body)
    //   res.send(data)
    // })
    var worker = { firstName:FirstName, LastName: LastName, Email: Email, password: Password, phoneNumber: PhoneNumber };
    
    Axios.post(`${server.Ip}/workers/signup`,worker)
      .then((response)=>{
        if(response.data === "user exists")
          
          {
            console.log(response.data)
            Alert.alert("user already exists")
          
         }
          else
          {
            console.log(response.data, "<============== USER CREATED");
            Alert.alert(
              "Confirm",
              "Are You Sure About Your Informations ?",  
              [
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                { text: "Confirme", onPress: () => navigation.navigate("Login") }
              ],
              { cancelable: false }
            )
          }
        
      })
      .catch((error)=>{
        console.log(error);
      });
      

      
      
      sendmsg()
  };

  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Sign Up</Text>
      <View style={styles.blockInput}>
        <TextInput placeholder="First Name" onChangeText={onChangeFirstName} value={FirstName} style={styles.inputs}></TextInput>
      </View>
      <View style={styles.blockInput}>
        <TextInput placeholder="Last Name" onChangeText={onChangeLastName} value={LastName} style={styles.inputs}></TextInput>
      </View>
      <View style={styles.blockInput}>
        <TextInput placeholder="Email" onChangeText={onChangeEmail} value={Email} style={styles.inputs}></TextInput>
      </View>
      <View style={styles.blockInput}>
        <TextInput placeholder="Phone Number" onChangeText={onChangePhoneNumber} value={PhoneNumber} secureTextEntry={true} style={styles.inputs}></TextInput>
      </View>
      <View style={(styles.blockInput, styles.one)}>
        <TextInput placeholder="Password" onChangeText={onChangePassword} value={Password} secureTextEntry={true} style={styles.inputs}></TextInput>
      </View>

      <Button color="#5FCFFF" title="Sign Up" onPress={() => post()} />
      <StatusBar style="auto" />
      <Text style={styles.signuptext}>Or You Can Singup With</Text>
      <View style={styles.passport}>
        <Button color="#5FCFFF" title="Facebook" onPress={() => navigation.navigate("Login")} />
        <Button color="#5FCFFF" title="Google" onPress={() => navigation.navigate("Login")} />
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

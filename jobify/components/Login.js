import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
} from "react-native";
import { useState } from "react";
import server from "./ipConfig/serverIp";
import axios from "axios";

export default function Login({ navigation }) {
  const login = async () => {
    const URL = `${server.Ip}/workers/login`;
    console.log(URL);
    const worker = { Email: Email, password: Password };
    try {
      const { data } = await axios.post(URL, worker);
      if (!String(data).includes("false")) {
        const workerId = JSON.stringify(data.id);
        await AsyncStorage.setItem("session", workerId);
        alert("Welcome" + " " + data.firstName);
        navigation.navigate("Routes");
      } else {
        alert("Login ERROR");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [Email, onChangeEmail] = useState(null);
  const [Password, onChangePassword] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Login</Text>
      <View style={styles.blockInput}>
        <TextInput
          placeholder="Email"
          onChangeText={onChangeEmail}
          value={Email}
          style={styles.inputs}
        ></TextInput>
      </View>
      <View style={(styles.blockInput, styles.one)}>
        <TextInput
          placeholder="Password"
          onChangeText={onChangePassword}
          value={Password}
          secureTextEntry={true}
          style={styles.inputs}
        ></TextInput>
      </View>
      <Button color="#5FCFFF" title="Login" onPress={() => login()} />
      <StatusBar style="auto" />
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
});

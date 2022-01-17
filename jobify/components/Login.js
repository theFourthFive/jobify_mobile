import { StatusBar } from "expo-status-bar";

// import server from "./ipConfig/serverIp";
import server from "../settings";

// prettier-ignore
import { Button, StyleSheet, Text, View, TextInput, AsyncStorage, Alert } from "react-native";
import { useState } from "react";
import axios from "axios";

export default function Login({ navigation }) {
  const login = async () => {
    const URL = `${server.url}/auth/login`;
    console.log(URL);
    const worker = { email_or_PhoneNumber, password };
    try {
      console.log("ASASASAS");
      // const { data } = await axios.post(URL, worker);
      const { data } = await axios.post(URL, worker);
      console.log("DATA", data);

      // if the response is not a string (not an error message)
      if (typeof data !== "string") {
        // then it's an object containing data

        // the provided login, belongs to a registered company or to a registered worker
        const { workerId, companyId } = data;
        const userId = companyId ?? workerId;

        // save the id of the user into the local storage
        await AsyncStorage.setItem("session", JSON.stringify(userId));

        // this is how to get data from the local storage:
        // const value = await AsyncStorage.getItem("session");

        // identify the role of the user, in order to know to which screen to redirect:
        // company screen
        // or
        // a worker screen
        let role;
        if (workerId) {
          role = "Worker";
        } else if (companyId) {
          role = "Company";
        } else {
          role = "admin";
        }

        Alert.alert(
          `Welcome ${data.firstName}`,
          "You're now connected to your account",
          [
            // {
            //   text: "Cancel",
            //   onPress: () => console.log("Cancel Pressed"),
            // },
            // { text: "Home", onPress: () => navigation.goBack() },
            {
              text: "Continue",
              onPress: () => navigation.navigate(`Home${role}`),
            },
          ]
        );
      } else {
        // Possible error messages:
        // "Wrong login and password combination"
        // "If you are a company, please enter your email"
        // "(500) Internal Server Error"

        // prettier-ignore
        let title, content, leftButtonLabel, rightButtonLabel, leftButtonAction, rightButtonAction;

        if (data === "Wrong login and password combination") {
          title = "Incorrect login & password combination";
          content = `Please try again, or click on forgot password`;
          leftButtonLabel = "Forgot password";
          leftButtonAction = () => {
            // navigation.navigate("forgotPassword")
          };
          rightButtonLabel = "Ok";
          rightButtonAction = () => {};
        } else if (data === "If you are a company, please enter your email") {
          title = "Incorrect login / password";
          content = `${data}.\nPlease try again, or click on forgot password`;
          leftButtonLabel = "Forgot password";
          leftButtonAction = () => {
            // navigation.navigate("forgotPassword")
          };
          rightButtonLabel = "Close";
          rightButtonAction = () => {};
        } else if (data === "(500) Internal Server Error") {
          title = "Network Error";
          content = `${data}.\nPlease check your network connection`;
          leftButtonLabel = "";
          leftButtonAction = () => {
            // navigation.navigate("forgotPassword")
          };
          rightButtonLabel = "Ok";
          rightButtonAction = () => {};
        }

        Alert.alert(title, content, [
          {
            text: leftButtonLabel,
            onPress: leftButtonAction,
          },
          { text: "", onPress: () => null },
          {
            text: rightButtonLabel,
            onPress: rightButtonAction,
          },
        ]);
        console.log(data);
      }

      if (!String(data).includes("false")) {
        const workerId = JSON.stringify(data.id);
        await AsyncStorage.setItem("session", workerId);
        Alert.alert(
          `Welcome ${data.firstName}`,
          "You're now connected to your account",
          [
            // {
            //   text: "Cancel",
            //   onPress: () => console.log("Cancel Pressed"),
            // },
            // { text: "Home", onPress: () => navigation.goBack() },
            {
              text: "Continue",
              onPress: () => navigation.navigate("HomeWorker"),
            },
          ]
        );
        // alert("Welcome" + " " + data.firstName);
        // navigation.navigate("HomeWorker");
      } else {
        alert("Login ERROR");
      }
    } catch (error) {
      Alert.alert("Network Error", "Please check your network connection", [
        {
          text: "",
          onPress: () => {},
        },
        { text: "", onPress: () => null },
        {
          text: "ok",
          onPress: () => {},
        },
      ]);
    }
  };

  const handlePressLogin = () => {
    if (!email_or_PhoneNumber) {
      Alert.alert("Missing Field", "Please enter your login", [
        {
          text: "",
          onPress: () => {},
        },
        { text: "", onPress: () => null },
        {
          text: "ok",
          onPress: () => {},
        },
      ]);
    } else if (!password) {
      Alert.alert("Missing Field", "Please enter your password", [
        {
          text: "",
          onPress: () => {},
        },
        { text: "", onPress: () => null },
        {
          text: "ok",
          onPress: () => {},
        },
      ]);
    } else {
      login();
    }
  };

  const [email_or_PhoneNumber, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  return (
    <View style={styles.container}>
      <Text style={styles.signup}>Login</Text>
      <View style={styles.blockInput}>
        <TextInput
          placeholder="Email"
          onChangeText={onChangeEmail}
          value={email_or_PhoneNumber}
          style={styles.inputs}
        />
      </View>
      <View style={(styles.blockInput, styles.one)}>
        <TextInput
          placeholder="Password"
          onChangeText={onChangePassword}
          value={password}
          secureTextEntry={true}
          style={styles.inputs}
        />
      </View>
      <Button color="#5FCFFF" title="Login" onPress={handlePressLogin} />
      <View style={styles.space} />
      <Button
        color="#5FCFFF"
        title="Signup"
        onPress={() => navigation.navigate("FilterPage")}
      />
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
  space: {
    height: 20,
  },
  button: {
    marginBottom: 20,
    padding: 30,
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

import React , {useState , useEffect} from "react";
import axios from "axios";
import server from "../ipConfig/serverIp"
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// const Stack = createNativeStackNavigator();

// prettier-ignore
import { Text, StyleSheet, Image, View, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
export default function ProfilScreen({ navigation }) {

  var [profile , setProfile]= useState()
  useEffect(() => {
    getInfo(1)
  })

function getInfo(id) {
  var  URL = `${server.Ip}/workers/profile/${id}`
  axios.get(URL).catch((res)=> {
     setProfile(res)
  })
}

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <View>

          <Text style={styles.formHeading}>helloooooooooo</Text>
          <Text style={styles.aboutuser}>hello ggggg</Text>

          <View style={styles.userBtnWrapper}>
            <TouchableOpacity style={styles.userbtn}>
              <Text style={styles.userbtntxt}>follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("EditProfile")}
              style={styles.userbtn}
            >
              <Text style={styles.userbtntxt}>Edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text>FirstName:</Text>
            <Text>LastName:</Text>
            <Text>Email:</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Img: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginLeft: 285,
  },
  // userName: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginTop: 10,
  //   marginBottom: 10,
  // },
  formHeading: {
    color: "#252526",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 105,
  },
  aboutuser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 10,
  },
  userbtn: {
    borderColor: "#2e64e5",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userbtntxt: {
    color: "#2e64e5",
  },
});

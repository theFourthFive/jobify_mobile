import React, { useState, useEffect } from "react";
import axios from "axios";
import server from "../ipConfig/serverIp";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import {
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
export default function ProfilScreen({ navigation }) {
  var [profile, setProfile] = useState({});
  useEffect(async () => {
    var URL = `${server.Ip}/workers/profile/${10}`;
    var prof = await axios.get(URL);
    console.log(prof.data);
    setProfile(prof.data);
  }, []);
;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ backgroundColor: "#fff" }}>
        <View>
          <View style={styles.Icon}>
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              onPress={() => navigation.navigate("EditProfile")}
            />
          </View>

          <ImageBackground
            source={{
              uri: profile.imageUrl,
            }}
            style={{ height: 100, width: 100, marginLeft: 25 }}
            imageStyle={{ borderRadius: 15 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </ImageBackground>

          <Text style={styles.formHeading}></Text>

          <View style={styles.userBtnWrapper}>
            <TouchableOpacity style={styles.userbtn}>
              <Text style={styles.userbtntxt}>follow</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
              onPress={() => getInfo(10)}
              style={styles.userbtn}
            >
              <Text style={styles.userbtntxt}>Edit</Text>
            </TouchableOpacity> */}
          </View>
          <View>
            <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <Text>FirstName:       {profile.firstName}</Text>
            </View>

            <View style={styles.action}>
            <FontAwesome name="user-o" size={20} />
            <Text>LastName:        {profile.LastName}</Text>
            </View>
           
            <View style={styles.action}>
            <FontAwesome name="envelope-o"  size={20} />
            <Text>Email:           {profile.Email}</Text>
            </View>
           
            <View style={styles.action}>
            <Feather name="phone"  size={20} />
            <Text>PhoneNumber:     {profile.phoneNumber}</Text>
            </View>
           
            <View style={styles.action}>
            <Text>updatedAt:           {profile.updatedAt}</Text>
            </View>
           

          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  Img: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginLeft: 285,
  },
  Icon: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    color: "#000",
  },

  formHeading: {
    color: "#252526",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 105,

    color: "#1C0D33",
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

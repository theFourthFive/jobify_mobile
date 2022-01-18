import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, Alert, View, ScrollView,Image, Button,TouchableOpacity } from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings'
import server from "./ipConfig/serverIp.js";
import axios from "axios";

const Hire = ({ navigation }) => {
  var [users, setusers] = useState([]);
  var [hire, sethire] = useState(false);
  useEffect(() => {
    const URL1 = `${server.Ip}/workers/`;
    axios
      .get(URL1)
      .then((res) => {
        var user = res.data;
        user.sort((a, b) => {
          return b.avgRating - a.avgRating;
        });
        setusers(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <View>
      <ScrollView vertical={true}>
        <Text style={styles.usersrate}>Here Our Works That You Can Hire!!</Text>
        <View style={styles.container1}>
          <View style={styles.alloff1}>
            {users.map((u, i) => {
              return (
                <ScrollView key={i}>
                <TouchableOpacity onPress={()=>navigation.navigate("UserHire",u)}  style={styles.users}>
                  <View style={styles.user} onPress={()=>sethire(!hire)}>
                    <Image style={styles.img}  source={{ uri: u.imageUrl }}></Image>
                    <View style={styles.userr}>
                      <Text>
                        {u.firstName} {u.LastName}
                      </Text>
                      <Text>Adress.....</Text>
                    </View>
                    <AirbnbRating
                      style={styles.star}
                      count={u.avgRating}
                      isDisabled={true}
                      onFinishRating={(x) => {
                        alert("thanks for your help", x);
                      }}
                      reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
                      defaultRating={9}
                      size={25}
                      showRating={true}
                      startingValue={5}
                      ratingColor="#f94368"
                      ratingBackgroundColor="#f9b313"
                      type="custom"
                    />
                  </View>
                </TouchableOpacity>
                  
              </ScrollView>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: "center",
  },
  usersrate: {
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 20,
  },
  alloff1: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,
  },
  users: {
    flex: 1,
    width: 350,
    height: 84,
    marginTop: 10,
    borderWidth: 2,
    backgroundColor: "white",
    opacity: 0.8,
    borderRadius: 17,
  },
  text: {
    color: "#00BFFF",
  },
  img: {
    width: 70,
    height: 80,
    borderRadius: 15,
    backgroundColor: "red",
  },
  user: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  userr: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 15,
  },
});

export default Hire;

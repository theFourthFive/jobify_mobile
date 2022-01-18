import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
// prettier-ignore
import { Button, StyleSheet,ScrollView, Text,Image, View,AsyncStorage, TouchableWithoutFeedback, Alert} from 'react-native';
import { Rating, AirbnbRating } from "react-native-ratings";
import moment from "moment";
import server from "../ipConfig/serverIp";
import axios from "axios";
const b10 = "10%";
const b3 = "3%";
const b20 = "20%";
const b25 = "25%";
const b30 = "30%";
const b40 = "40%";
const b50 = "50%";
const b60 = "60%";
const b70 = "70%";
const b75 = "75%";
const b80 = "80%";
const b90 = "90%";
const b100 = "100%";

const Workerhistory = ({ navigation }) => {
  var [events, setevents] = useState([]);
  var [user, setuser] = useState([]);
  useEffect(() => {
    (async () => {
      getuser();
      refresh();
    })();
  }, []);

  var getuser = async () => {
    try {
      const connectedUser = await AsyncStorage.getItem("session");
      const URL = `${server.Ip}/workers/profile/${connectedUser}`;
      const res = await axios.get(URL);
      setuser(res.data);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };
  async function refresh() {
    try {
      const connectedUser = await AsyncStorage.getItem("session");
      const URL = `${server.Ip}/events/worker/history/${connectedUser}`;
      const res = await axios.get(URL);
      setevents(res.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  var unsubscribe = async (id) => {
    try {
      const connectedUser = await AsyncStorage.getItem("session");
      const URL = `${server.Ip}/events/unsubscribe/${id}/${connectedUser}`;
      Alert.alert(`Success`, "This subscription will be canceled", [
        // {
        //   text: "Cancel",
        //   onPress: () => console.log("Cancel Pressed"),
        // },
        // { text: "Home", onPress: () => navigation.goBack() },
        {
          text: "Continue",
          onPress: () => navigation.push("Workerhistory"),
        },
      ]);
      // alert("this subscription will be canceled");
      axios
        .delete(URL)
        .then((res) => {
          refresh();
        })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <View style={styles.userrrr}>
          <Image style={styles.img} source={{ uri: user.imageUrl }}></Image>
          <View style={styles.userr}>
            <Text>{user.firstName}</Text>
            <Text>{user.LastName}</Text>
          </View>
          <Text>{user.avgRating}/5</Text>
          <AirbnbRating
            style={styles.star}
            count={1}
            size={30}
            showRating={false}
            startingValue={1}
            ratingColor="#f94368"
            ratingBackgroundColor="#f9b313"
            type="custom"
          />
        </View>
      </View>
      <ScrollView style={styles.userhis} vertical={true}>
        {events.map((ele, i) => (
          <View style={styles.userhiss} key={i}>
            <View style={styles.alloff1}>
              <Image style={styles.imgg} source={{ uri: ele.imageUri }}></Image>
              <View style={styles.userrhis}>
                <Text>name:{ele.eventName}</Text>
                <Text>FROM:{moment(ele.createdAt).fromNow()}</Text>
                <Text>location:{ele.location}</Text>
              </View>
              <View style={styles.userrhis}>
                <Text> {ele.label}</Text>
                <Image
                  style={styles.imgggg}
                  source={{ uri: ele.imageUrl }}
                ></Image>
                <TouchableWithoutFeedback
                  onPress={() => unsubscribe(ele.eventID)}
                >
                  <Image
                    style={styles.imggg}
                    source={{
                      uri: "https://pngset.com/images/cancel-icon-first-aid-symbol-text-logo-transparent-png-1419157.png",
                    }}
                  ></Image>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <Text style={styles.line}>__________________________________</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  line: {
    alignSelf: "center",
    marginBottom: 30,
  },
  user: {
    height: b25,
    width: b100,
    backgroundColor: "#E7E7E7",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  userhis: {
    height: b25,
    width: b100,
    marginBottom: 50,
    backgroundColor: "#e1f5fc",
  },
  userhiss: {},
  container: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    color: "#00BFFF",
  },
  alloff1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // marginTop: b10,
    height: 150,
    marginBottom: 10,
  },
  img: {
    width: b40,
    height: b70,
    borderRadius: 250,
  },
  imgg: {
    width: b30,
    height: b100,
  },
  imggg: {
    width: b20,
    height: b20,
    borderRadius: 50,
  },
  imgggg: {
    width: b60,
    height: b50,
    borderRadius: 50,
  },
  userrrr: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  userr: {
    flex: 1,
    flexDirection: "column",
    marginLeft: b10,
  },
  userrhis: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    margin: b3,
  },
});

export default Workerhistory;

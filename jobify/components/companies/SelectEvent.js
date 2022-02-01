// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   TextInput,
//   StyleSheet,
// } from "react-native";

// export default function UserHire({ navigation }) {
//   return (
//     <View>
//       <View>
//         <Text>User</Text>
//       </View>
//     </View>
//   );
// }

import { AsyncStorage } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import ButtonToggleGroup from "react-native-button-toggle-group";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import server from "../ipConfig/serverIp";
import axios from "axios";
import moment from "moment";
// import OK from "./Ok.js";
import colors from "../../assets/colors/colors.js";
// import * as Animatable from "react-native-animatable";
const b100 = "100%";

const UserHire = (props) => {
  const navigation = props.navigation;
  const selectedWorker = props.route.params;
  console.log("User:", selectedWorker);
  const [toggleValue, setToggleValue] = useState(false);
  // const [companyId, setCompanyId] = useState("");
  // setCompanyId(async () => await AsyncStorage.getItem("session"));

  var [users, setusers] = useState([]);
  const [events, setEvents] = useState([]);
  var [hire, sethire] = useState(false);
  var [pick, setpick] = useState(true);
  var [offers, setoffers] = useState([]);
  // const [value, setValue] = useState("Light");
  useEffect(async () => {
    const companyId = 37 || (await AsyncStorage.getItem("session"));
    // company/
    // eventsComp/events/
    console.log("------------", companyId);
    const workersURL = `${server.Ip}/workers/`;
    const eventsCompany = `${server.Ip}/eventsComp/events/${companyId}`;
    var { data } = await axios.get(eventsCompany); // only the event of the connected company
    setEvents(() => data);

    // const URL = `${server.Ip}/events/`;
    var { data } = await axios.get(workersURL); // list of all workers

    setusers(() =>
      data.sort((a, b) => {
        return b.avgRating - a.avgRating;
      })
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={styles.header}></View>

      <ScrollView vertical={true}>
        <View style={styles.container1}>
          <View style={styles.alloff1}>
            <Text style={styles.headerTitle}>Selected User :</Text>
            <View style={styles.users}>
              <View style={styles.user} onPress={() => sethire(!hire)}>
                <Image
                  style={styles.img}
                  source={{ uri: selectedWorker.imageUrl }}
                />
                <View style={styles.userr}>
                  <Text>
                    {selectedWorker.firstName} {selectedWorker.LastName}
                  </Text>
                  <Text>
                    {selectedWorker.phoneNumber.toString().slice(0, 2) +
                      " " +
                      selectedWorker.phoneNumber.toString().slice(2, 5) +
                      " " +
                      selectedWorker.phoneNumber.toString().slice(5)}
                  </Text>
                  <Text>
                    Joined {moment(selectedWorker.createdAt).fromNow()}
                  </Text>
                </View>
                <AirbnbRating
                  style={styles.star}
                  count={selectedWorker.avgRating}
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
            </View>
          </View>
        </View>
        {/* <ButtonToggleGroup
          highlightBackgroundColor={"blue"}
          highlightTextColor={"white"}
          inactiveBackgroundColor={"transparent"}
          inactiveTextColor={"grey"}
          values={["Auto", "Light", "Dark"]}
          value={value}
          onSelect={(val) => setValue(val)}
        /> */}

        <View style={styles.container1}>
          <View style={styles.alloff1}>
            {events.map((event, i) => {
              console.log(selectedWorker);

              const param = {
                selectedWorker,
                selectedEvent: event,
              };

              return (
                <ScrollView key={i}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SelectPayment", param)}
                    style={styles.users}
                  >
                    <View style={styles.user} onPress={() => sethire(!hire)}>
                      <Image
                        style={styles.img}
                        source={{ uri: event.imageUri }}
                      />
                      <View style={styles.userr}>
                        <Text>{event.eventName}</Text>
                        <Text>{event.location}</Text>
                        <Text>{`Posted ${moment(
                          event.createdAt
                        ).fromNow()}`}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.blue,
  },
  headerTitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 23,
  },
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
    margin: 20,
    width: 150,
    padding: 15,
    backgroundColor: colors.gray,
    borderRadius: 8,
    color: colors.white,
    borderTopLeftRadius: 20,
  },
  wait: {
    alignSelf: "center",
    alignItems: "center",
    alignContent: "center",
  },
  off: {
    flex: 1,
    margin: 5,
    width: b100,
    height: 234,
    borderRadius: 15,
    borderWidth: 5,
  },
  image: {
    flex: 1,
    width: 290,
    borderRadius: 15,
  },
  text: {
    color: colors.gray,
  },
  usersrate1: {
    alignSelf: "center",
    fontWeight: "700",
    fontSize: 14,
    lineHeight: 16,
    marginTop: 20,
    margin: 20,
    width: 150,
    padding: 15,
    backgroundColor: colors.gray,
    borderRadius: 8,
    color: colors.white,
    borderTopLeftRadius: 20,
  },
  pick: {
    display: "flex",
    flexDirection: "row",
    alignContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
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
    color: colors.blueDark,
  },
  img: {
    width: 70,
    height: 80,
    borderRadius: 15,
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

export default UserHire;

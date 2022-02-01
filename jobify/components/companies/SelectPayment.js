import { AsyncStorage, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import ButtonToggleGroup from "react-native-button-toggle-group";
import {
  StyleSheet,
  Text,
  Alert,
  Label,
  View,
  ScrollView,
  Image,
  Button,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import server from "../ipConfig/serverIp";
import axios from "axios";
import moment from "moment";
import colors from "../../assets/colors/colors.js";
const b100 = "100%";

const UserHire = (props) => {
  const navigation = props.navigation;
  const { selectedWorker, selectedEvent } = props.route.params; // we already have the data here !!!!

  const [events, setEvents] = useState([]);
  const [inputCardCode, setInputCardCode] = useState("");
  var [hire, sethire] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={styles.header}></View>

      <ScrollView vertical={true}>
        <View style={styles.container1}>
          <View style={styles.alloff1}>
            <Text style={styles.headerTitle}>Worker to hire :</Text>

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

            <Text style={styles.headerTitle}></Text>
            <Text style={styles.headerTitle}>In this Event :</Text>

            <View style={styles.users}>
              <View style={styles.user} onPress={() => sethire(!hire)}>
                <Image
                  style={styles.img}
                  source={{ uri: selectedEvent.imageUri }}
                />
                <View style={styles.userr}>
                  <Text>{selectedEvent.eventName}</Text>
                  <Text>{selectedEvent.location}</Text>
                  <Text>{`Posted ${moment(
                    selectedEvent.createdAt
                  ).fromNow()}`}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container1}>
          <View style={styles.alloff1}>
            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
              Card Number
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setInputCardCode}
              value={inputCardCode}
              placeholder="Card Number"
            />

            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
              Expire Date
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setInputCardCode}
              value={inputCardCode}
              placeholder="01/2099"
            />

            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
              Last 3 digits
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={setInputCardCode}
              value={inputCardCode}
              placeholder="Last 3 digits"
            />
            <Pressable
              onPress={() => {
                alert("Success");
              }}
            >
              <View style={styles.logBox}>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  Pay {selectedEvent.dailyPay * selectedEvent.duration} Dinars
                </Text>
              </View>
            </Pressable>
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
  input: {
    width: 340,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#00B74A",
    backgroundColor: "#00B74A",
    borderRadius: 10,
    marginBottom: 60,
  },
});

export default UserHire;

import axios from "axios";
import React, { useState } from "react";
import { useTheme } from "react-native-paper";
import server from "../ipConfig/serverIp";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import colors from "../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import ourcolors from "../../assets/colors/colors";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
// import DatePicker from "react-native-datepicker";
// import DateTimePicker from "@react-native-community/datetimepicker";

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  View,
  Platform,
  TextInput,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function AddEvent() {
  const [companyId, setCompanyId] = useState("37");
  const [eventName, setEventName] = useState("");
  const [location, setLocation] = useState("");
  const [date_time, setDate_time] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [duration, setDuration] = useState("");
  const [dailyPay, setDailyPay] = useState("");
  const [nbrWaiter, setNbrWaiter] = useState("");
  const [nbrChef, setNbrChef] = useState("");
  const [nbrCleaningWorker, setNbrCleaningWorker] = useState("");
  const [date, setDate] = useState(new Date());

  /* handelChange functions here*/

  const onChangeeventNameHandler = (eventName) => {
    setEventName(eventName);
    console.log(eventName);
  };
  const onChangelocationHandler = (location) => {
    setLocation(location);
  };
  const onChangedate_timeHandler = (date_time) => {
    setDate_time(date_time);
  };
  const onChangeimageUriHandler = (imageUri) => {
    setImageUri(imageUri);
  };
  const onChangedurationHandler = (duration) => {
    setDuration(duration);
  };
  const onChangedailyPayHandler = (dailyPay) => {
    setDailyPay(dailyPay);
  };
  const onChangenbrWaiterHandler = (nbrWaiter) => {
    setNbrWaiter(nbrWaiter);
  };
  const onChangenbrChefHandler = (nbrChef) => {
    setNbrChef(nbrChef);
  };
  const onChangenbrCleaningWorkerHandler = (nbrCleaningWorker) => {
    setNbrCleaningWorker(nbrCleaningWorker);
  };
  const onSubmitFormHandler = async (event) => {
    axios
      .post(`${server.Ip}/addEvent/${37}`, {
        companyId,
        eventName,
        location,
        date_time,
        imageUri,
        duration,
        dailyPay,
        nbrWaiter,
        nbrChef,
        nbrCleaningWorker,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log("work plz");
        console.log(error);
      });

    const { colors } = useTheme();

    //    const renderInner = () => (
    //     <View style={styles.panel}>
    //       <View style={{ alignItems: "center" }}>
    //         <Text style={styles.panelTitle}>Upload Photo</Text>
    //         <Text style={styles.panelSubtitle}>Choose Your Event Picture</Text>
    //       </View>

    //       <TouchableOpacity style={styles.panelButton}>
    //         <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity
    //         style={styles.panelButton}
    //         onPress={() => bs.current.snapTo(1)}
    //       >
    //         <Text style={styles.panelButtonTitle}>Cancel</Text>
    //       </TouchableOpacity>
    //     </View>
    //   );

    //  const  renderHeader = () => (
    //     <View style={styles.header}>
    //       <View style={styles.panelHeader}>
    //         <View style={styles.panelHandle} />
    //       </View>
    //     </View>
    //   );

    // const bs = React.createRef();
    // const  fall = new Animated.Value(1);
  };
  return (
    // <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      {/* <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      /> */}
      {/* <Animated.View
       style={{
        margin: 20,
        opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
      }} */}
      {/* > */}
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 15,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ImageBackground
              source={{
                uri: "data:image/png;base64,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",
              }}
              style={{ height: 100, width: 100 }}
              imageStyle={{ borderRadius: 26 }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon
                  name="camera"
                  size={35}
                  color={ourcolors.blue}
                  style={{
                    opacity: 0.7,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 1,
                    borderColor: ourcolors.blue,
                    borderRadius: 10,
                  }}
                />
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
        <Text
          style={{
            marginTop: 8,
            marginBottom:20,
            fontSize: 18,
            fontWeight: "bold",
            color: ourcolors.blue,
          }}
        >
          Add New Event
        </Text>
      </View>

      <View style={styles.action}>
        {/* <FontAwesome name="user-o" size={20} /> */}

        <TextInput
          placeholder=" Event Name"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
          value={eventName}
          onChangeText={onChangeeventNameHandler}
        />
      </View>
      <View style={styles.action}>
        {/* <Icon
            name="map-marker-outline"
            color={colors.text}
            size={20}
          /> */}
        <TextInput
          placeholder=" Location"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
          value={location}
          onChangeText={onChangelocationHandler}
        />
      </View>
      <View style={styles.goupp1} >
      <View style={styles.action}>
        {/* <Icon name="calendar-outline"></Icon> */}
        <TextInput
          placeholder=" Date_time"
          placeholderTextColor="#666666"
          style={[
            styles.textInputG1,
            {
              color: colors.text,
            },
          ]}
          value={date_time}
          onChangeText={onChangedate_timeHandler}
        />
      </View>

      <View style={styles.action}>
        <TextInput
          placeholder=" Duration"
          placeholderTextColor="#666666"
          style={[
            styles.textInputG1,
            {
              color: colors.text,
            },
          ]}
          value={duration}
          onChangeText={onChangedurationHandler}
        />
      </View>
      </View>
      <View style={styles.action}>
        <TextInput
          placeholder=" DailyPay"
          placeholderTextColor="#666666"
          style={[
            styles.textInputpayday,
            {
              color: colors.text,
            },
          ]}
          value={dailyPay}
          onChangeText={onChangedailyPayHandler}
        />
      </View>
      <View style={styles.group2}>
      <View style={styles.action}>
        <TextInput
          placeholder=" nbrWaiter"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={[
            styles.textInputnbr,
            {
              color: colors.text,
            },
          ]}
          value={nbrWaiter}
          onChangeText={onChangenbrWaiterHandler}
        />
      </View>
      <View style={styles.action}>
        <TextInput
          placeholder=" nbrChef"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={[
            styles.textInputnbr,
            {
              color: colors.text,
            },
          ]}
          value={nbrChef}
          onChangeText={onChangenbrChefHandler}
        />
      </View>
      </View>
      <View style={styles.action}>
        <TextInput
          placeholder=" nbrCleaningWorker"
          placeholderTextColor="#666666"
          keyboardType="number-pad"
          autoCorrect={false}
          style={[
            styles.textInputclean,
            {
              color: colors.text,
            },
          ]}
          value={nbrCleaningWorker}
          onChangeText={onChangenbrCleaningWorkerHandler}
        />
      </View>
      <View style={styles.action}>
        <TextInput
          placeholder=" Img"
          placeholderTextColor="#666666"
          style={[
            styles.textInput,
            {
              color: colors.text,
            },
          ]}
          value={imageUri}
          onChangeText={onChangeimageUriHandler}
        />
      </View>
      <TouchableOpacity style={styles.commandButton}>
        <Text style={styles.panelButtonTitle} onPress={onSubmitFormHandler}>
          Submit
        </Text>
      </TouchableOpacity>
      {/* </Animated.View> */}
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F2F2F2",
    // alignItems: "center",
    justifyContent: "center",
    // width:"100%"
    // marginTop: Platform.OS === "android" ? 0 : Constants.statusBarHeight,
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.blue,
    alignItems: "center",
    marginTop: 10,
    width: 200,
    marginLeft: 100,
  },
  textInput: {
    // flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    // color: "#05375a",
    // marginBottom:20,
    marginLeft:60,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width:300,
  },
  textInputG1:{
    // flex: 1,
    flexDirection:'row',
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    // color: "#05375a",
    marginLeft:10,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    width:190,
  },
  goupp1:{
    flexDirection:'row',
  },
  textInputpayday:{
    marginTop: Platform.OS === "ios" ? 0 : -12,
    // paddingLeft: 90,
    // color: "#05375a",
    marginLeft:100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width:190,
    marginBottom:10,
  },
  textInputclean:{
    marginTop: Platform.OS === "ios" ? 0 : -12,
    // paddingLeft: 90,
    // color: "#05375a",
    marginLeft:100,
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    width:190,
    marginBottom:10,
  },
  textInputnbr:{
    // flex: 1,
    flexDirection:'row',
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    // color: "#05375a",
    marginLeft:10,
    paddingVertical: 5,
    paddingHorizontal: 30,
    backgroundColor: "#fff",
    borderRadius: 10,
    width:190,
  },
  group2:{
    flexDirection:'row',
  },
  
  formHeading: {
    color: "#252526",
  },
  addWrapper: {
    width: 150,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    // borderWidth:1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 1,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  panel: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    paddingTop: 20,
  },
  header: {
    backgroundColor: "#FFFFFF",
    shadowColor: "#333333",
    shadowOffset: { width: -1, height: -3 },
    shadowRadius: 2,
    shadowOpacity: 0.4,

    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: "center",
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#00000040",
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: "gray",
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
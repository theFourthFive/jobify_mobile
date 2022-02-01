// import { AsyncStorage, Pressable } from "react-native";
// import { StatusBar } from "expo-status-bar";
// import { useState, useEffect } from "react";
// import ButtonToggleGroup from "react-native-button-toggle-group";
// import {
//   StyleSheet,
//   Text,
//   Alert,
//   Label,
//   View,
//   ScrollView,
//   Image,
//   Button,
//   TouchableOpacity,
//   SafeAreaView,
//   TextInput,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { Rating, AirbnbRating } from "react-native-ratings";
// import server from "../ipConfig/serverIp";
// import axios from "axios";
// import moment from "moment";
// import colors from "../../assets/colors/colors.js";
// const b100 = "100%";

// const UserHire = (props) => {
//   const navigation = props.navigation;
//   const { selectedWorker, selectedEvent } = props.route.params; // we already have the data here !!!!

//   const [events, setEvents] = useState([]);
//   const [inputCardCode, setInputCardCode] = useState("");
//   var [hire, sethire] = useState(false);

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
//       <StatusBar translucent={false} backgroundColor={colors.blue} />
//       <View style={styles.header}></View>

//       <ScrollView vertical={true}>
//         <View style={styles.container1}>
//           <View style={styles.alloff1}>
//             <Text style={styles.headerTitle}>Worker to hire :</Text>

//             <View style={styles.users}>
//               <View style={styles.user} onPress={() => sethire(!hire)}>
//                 <Image
//                   style={styles.img}
//                   source={{ uri: selectedWorker.imageUrl }}
//                 />
//                 <View style={styles.userr}>
//                   <Text>
//                     {selectedWorker.firstName} {selectedWorker.LastName}
//                   </Text>
//                   <Text>
//                     {selectedWorker.phoneNumber.toString().slice(0, 2) +
//                       " " +
//                       selectedWorker.phoneNumber.toString().slice(2, 5) +
//                       " " +
//                       selectedWorker.phoneNumber.toString().slice(5)}
//                   </Text>
//                   <Text>
//                     Joined {moment(selectedWorker.createdAt).fromNow()}
//                   </Text>
//                 </View>
//                 <AirbnbRating
//                   style={styles.star}
//                   count={selectedWorker.avgRating}
//                   isDisabled={true}
//                   onFinishRating={(x) => {
//                     alert("thanks for your help", x);
//                   }}
//                   reviews={["Terrible", "Bad", "Okay", "Good", "Great"]}
//                   defaultRating={9}
//                   size={25}
//                   showRating={true}
//                   startingValue={5}
//                   ratingColor="#f94368"
//                   ratingBackgroundColor="#f9b313"
//                   type="custom"
//                 />
//               </View>
//             </View>

//             <Text style={styles.headerTitle}></Text>
//             <Text style={styles.headerTitle}>In this Event :</Text>

//             <View style={styles.users}>
//               <View style={styles.user} onPress={() => sethire(!hire)}>
//                 <Image
//                   style={styles.img}
//                   source={{ uri: selectedEvent.imageUri }}
//                 />
//                 <View style={styles.userr}>
//                   <Text>{selectedEvent.eventName}</Text>
//                   <Text>{selectedEvent.location}</Text>
//                   <Text>{`Posted ${moment(
//                     selectedEvent.createdAt
//                   ).fromNow()}`}</Text>
//                 </View>
//               </View>
//             </View>
//           </View>
//         </View>

//         <View style={styles.container1}>
//           <View style={styles.alloff1}>
//             <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
//               Card Number
//             </Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={setInputCardCode}
//               value={inputCardCode}
//               placeholder="Card Number"
//             />

//             <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
//               Expire Date
//             </Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={setInputCardCode}
//               value={inputCardCode}
//               placeholder="01/2099"
//             />

//             <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
//               Last 3 digits
//             </Text>
//             <TextInput
//               style={styles.input}
//               onChangeText={setInputCardCode}
//               value={inputCardCode}
//               placeholder="Last 3 digits"
//             />
//             <Pressable
//               onPress={() => {
//                 alert("Success");
//               }}
//             >
//               <View style={styles.logBox}>
//                 <Text
//                   style={{
//                     textAlign: "center",
//                     fontSize: 20,
//                     color: "white",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Pay {selectedEvent.dailyPay * selectedEvent.duration} Dinars
//                 </Text>
//               </View>
//             </Pressable>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   header: {
//     paddingVertical: 20,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     backgroundColor: colors.blue,
//   },
//   headerTitle: {
//     color: "black",
//     fontWeight: "bold",
//     fontSize: 23,
//   },
//   container1: {
//     flex: 1,
//     alignItems: "center",
//   },
//   usersrate: {
//     alignSelf: "center",
//     fontWeight: "700",
//     fontSize: 14,
//     lineHeight: 16,
//     marginTop: 20,
//     margin: 20,
//     width: 150,
//     padding: 15,
//     backgroundColor: colors.gray,
//     borderRadius: 8,
//     color: colors.white,
//     borderTopLeftRadius: 20,
//   },
//   wait: {
//     alignSelf: "center",
//     alignItems: "center",
//     alignContent: "center",
//   },
//   off: {
//     flex: 1,
//     margin: 5,
//     width: b100,
//     height: 234,
//     borderRadius: 15,
//     borderWidth: 5,
//   },
//   image: {
//     flex: 1,
//     width: 290,
//     borderRadius: 15,
//   },
//   text: {
//     color: colors.gray,
//   },
//   usersrate1: {
//     alignSelf: "center",
//     fontWeight: "700",
//     fontSize: 14,
//     lineHeight: 16,
//     marginTop: 20,
//     margin: 20,
//     width: 150,
//     padding: 15,
//     backgroundColor: colors.gray,
//     borderRadius: 8,
//     color: colors.white,
//     borderTopLeftRadius: 20,
//   },
//   pick: {
//     display: "flex",
//     flexDirection: "row",
//     alignContent: "space-between",
//     alignItems: "center",
//     alignSelf: "center",
//   },
//   alloff1: {
//     flex: 1,
//     flexDirection: "column",
//     marginTop: 25,
//   },
//   users: {
//     flex: 1,
//     width: 350,
//     height: 84,
//     marginTop: 10,
//     borderWidth: 2,
//     backgroundColor: "white",
//     opacity: 0.8,
//     borderRadius: 17,
//   },
//   text: {
//     color: colors.blueDark,
//   },
//   img: {
//     width: 70,
//     height: 80,
//     borderRadius: 15,
//   },
//   user: {
//     flex: 1,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   userr: {
//     flex: 1,
//     flexDirection: "column",
//     marginLeft: 15,
//   },
//   input: {
//     width: 340,
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     borderRadius: 10,
//   },
//   logBox: {
//     padding: 20,
//     margin: 10,
//     borderWidth: StyleSheet.hairlineWidth,
//     borderColor: "#00B74A",
//     backgroundColor: "#00B74A",
//     borderRadius: 10,
//     marginBottom: 60,
//   },
// });

// export default UserHire;


import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";
import { Rating, AirbnbRating } from 'react-native-ratings'
import server from "../ipConfig/serverIp";
import axios from "axios";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated, { set } from "react-native-reanimated";
import ourcolors from "../../assets/colors/colors";
import colors from "../../assets/colors/colors";
import * as ImagePicker from 'expo-image-picker';
export default function EditProfileScreen(props) {
 
  const [imageUrl, setimageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );


  const [update, setUpdated] = useState("");
  const [imageUri, setImageUri] = useState("");
  const [worker , setworker] = useState({});
  const [event , setEvent] = useState({});

  // useEffect(() => {
  //   UpdateInfo(1);
  // }, []);

  function UpdateInfo(id) {
    var URL = `${server.Ip}/workers/updateprofile/${1}`;
    var info = {
      WorkerId,
      City,
      firstName,
      LasttName,
      Email,
      phoneNumber,
      imageUrl,
      CVUrl,
      availibility,
      password,
    };
    axios
      .put(URL, info)

      .then((result) => {
        setUpdated(result.data.update);
        console.log("work work work ");
      })
      .catch((err) => {
        console.log(err, "there is an err");
      });
  }

  const { colors } = useTheme();

  useEffect(() => {
    const navigation = props.navigation;
    const { selectedWorker, selectedEvent } = props.route.params; 
    setImageUri(()=>selectedWorker.imageUrl)
    setworker(()=>selectedWorker)
    setEvent(()=>selectedEvent)
  },[])


  const renderInner = () => (
    <View style={styles.panel}>
     <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
             Card Number
             </Text>
             <TextInput
              style={styles.input}
             
        
              placeholder="Card Number"
            />

            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
              Expire Date
            </Text>
            <TextInput
              style={styles.input}
   
        
              placeholder="01/2099"
            />

            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
              Last 3 digits
            </Text>
            <TextInput
    
              placeholder="Last 3 digits"
            />
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  const bs = React.createRef();
  const fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
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
                source={   imageUri? {
                  uri:imageUri
                }:
                {
                  uri:"data:image/png;base64,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",
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >

              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: "bold",
              color: ourcolors.blue,
            }}
          >
           {worker.firstName+" " + worker.LastName} 
          </Text>
          <Rating
                    count={5}
                     showRating
                     ratingCount={5}
                     style={{ paddingVertical: 5 }}
                     isDisabled={true}
                     startingValue = {worker.avgRating}
                     readonly = {true}
                     fractions = {2}
              
                    />

        </View>


 
        <View style={styles.button}>


          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: ourcolors.gold,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
            onPress={() => bs.current.snapTo(0)}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: ourcolors.gold,
                },
              ]}
            >
              Pay {event.dailyPay * event.duration} DT 
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    marginTop: 30,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  color_textPrivate: {
    color: colors.gray,
  },
  commandButtonOne: {
    padding: 10,
    borderRadius: 10,
    borderTopLeftRadius: 30,
    backgroundColor: colors.blueDark,
    alignItems: "center",
    marginTop: 10,
    width: "50%",
  },
  commandButtonTwo: {
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 30,
    backgroundColor: colors.blueDark,
    alignItems: "center",
    marginTop: 20,
    width: "50%",
    left: 150,
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
    color: ourcolors.blueDark,
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
    backgroundColor: "#539c44",
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtono: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: ourcolors.white,
    alignItems: "center",
    marginVertical: 7,
    borderColor: "#539c44",
    borderWidth: 1,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
  panelButtonTitleo: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#539c44",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  picker: {
    paddingTop: 40,
    alignItems: "center",
    height: 50,
    width: 150,
    borderRadius: 60,
  },
});


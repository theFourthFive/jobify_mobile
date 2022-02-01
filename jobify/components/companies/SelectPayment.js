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
                    <ImageBackground
                source={   
                {
                  uri:"data:image/jpeg;base64,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",
                }}
                style={{ height: 80, width: 120 }}
                imageStyle={{ borderRadius: 15 }}
              >

              </ImageBackground>
     <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 }}>
             Card Number
             </Text>
             <TextInput
              style={styles.input}
             
        
              placeholder="Card Number"
            />

            <Text style={{ fontSize: 20, marginLeft: 15, marginTop: 10 , whidth : 20}}>
              Expire Date
            </Text>
            <TextInput
              style={styles.input}
              placeholder="01/20"
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

<TouchableOpacity onPress={() => bs.current.snapTo(0)}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 155,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ImageBackground
                source={   imageUri? {
                  uri:event.imageUri
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
           {event.eventName} 
          </Text>

          <Text
            style={{
              marginTop: 10,
              fontSize: 18,
              fontWeight: "bold",
              color: ourcolors.blue,
            }}
          >
            {"\n"}
           hiring duration : {event.duration} days {"\n"}{"\n"}
           daily payment   : {event.dailyPay} TND {"\n"}{"\n"}
           Total                    : {event.duration * event.dailyPay }  TND


          </Text>

        </View>

 
   
 
        <View style={styles.button}>


          <TouchableOpacity
            style={[
              styles.signIn,
              {
                borderColor: "#539c44",
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
                  color: "#539c44",
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
    width: "60%",
    height: 60,
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
    backgroundColor: "#539c44",
    alignItems: "center",
    marginTop: 10,
    width: "50%",
  },
  commandButtonTwo: {
    padding: 10,
    borderRadius: 10,
    borderTopRightRadius: 30,
    backgroundColor: "#539c44",
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


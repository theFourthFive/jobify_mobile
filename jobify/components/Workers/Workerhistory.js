import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
// prettier-ignore
import { Button, StyleSheet,ScrollView,Dimensions,SafeAreaView, Text,Image, View,AsyncStorage, TouchableWithoutFeedback,TouchableOpacity, Alert} from 'react-native';
import { Rating, AirbnbRating } from "react-native-ratings";
import moment from "moment";
import server from "../ipConfig/serverIp";
import axios from "axios";
import colors from "../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { FontAwesome5 } from "@expo/vector-icons";
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
const { width } = Dimensions.get("screen");
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
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={style.header}>
      <View style={style.Icon}>
         
         <FontAwesome5
                   name="briefcase"
                   size={20}
                   color ={colors.white}
                   onPress={() => navigation.navigate("HiringOffers")}
                 />
                 </View>
        {/* <Button title="got to my offers" onPress={()=>navigation.push("HiringOffers")}/> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.blue,
            height: 110,
            paddingHorizontal: 20,
            
          }}
        >
         
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>My</Text>
            <Text style={style.headerTitle}>History</Text>
          </View>
        </View>
    <View style={style.container}>
      <View style={style.user}>
        <View style={style.userrrr}>
          {/* <Image style={style.img} source={{ uri: user.imageUrl }}/> */}
          <View style={style.userr}>
            {/* <Text>{user.firstName}</Text> */}
            <Text>My rating is :</Text>
          </View>
          <Text>{user.avgRating}/5</Text>
          <AirbnbRating
            style={style.star}
            count={1}
            size={30}
            showRating={false}
            startingValue={1}
            ratingColor={colors.gold}
            ratingBackgroundColor={colors.gold}
            type="custom"
          />
        </View>
      </View>
      <View style={style.userhis} vertical={true}>
        {events.map((ele, i) => (
          <View style={style.userhiss} key={i}>
            <View style={style.alloff1}>
              {/* <Image style={style.imgg} source={{ uri: ele.imageUri }}/>  */}
              <View style={{flexDirection: 'row'}}>
              <View>
              <TouchableOpacity onPress={()=>navigation.navigate("MapComp")}>
                <Image
                  style={style.imgggg}
                  source={{ uri: ele.imageUrl }}
                ></Image>
                </TouchableOpacity>
                <Text style={{top:-35,left:20,color:colors.blueDark,fontSize:15,fontWeight: "bold",}}> {ele.label}</Text>
               </View>
              </View>
              <View>
                <Text style={style.textevent}>{ele.eventName}</Text>
                <Text style={style.textevent}>{moment(ele.createdAt).fromNow()}</Text>
              </View>
              <TouchableWithoutFeedback
                  onPress={() => unsubscribe(ele.eventID)}
                  style={style.iconf}
                >
                  
                  <FontAwesome name="trash" color={'black'} size={20} />
                </TouchableWithoutFeedback>
            </View>
            
          </View>
        ))}
      </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  line: {
    alignSelf: "center",
    marginBottom: 30,
  },
  user: {
    height: 100,
    width: b100,
    backgroundColor: '#E5E5E5',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginBottom:20,
  },
  userhis: {
    height: b25,
    width: b100,
    marginBottom: 50,
    backgroundColor: colors.white,
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
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // marginTop: b10,
    height: 120,
    marginBottom: 10,
    backgroundColor:'#E5E5E5',
    borderRadius:30,
    width:b90,
    left:20,
    
  },
  imgcompnam:{
    // flex: 1,
    flexDirection: "row",
  },
  img: {
    width: b30,
    height: b50,
    borderRadius: 20,
  },
  imgg: {
    width: b40,
    height: b70,
    
  },
  imggg: {
    width: b10,
    height: b20,
    borderRadius: 50,
  },
  imgggg: {
    width: b60,
    height: b60,
    borderRadius:50,
    left:-40,
    top:20
  },
  Icon: {
    marginBottom:40,
    marginLeft: 350,
    height: 30,
    width: 50,
    top:20,
   
  },
  IconText:{
    marginLeft: -50 ,
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
  textevent:{
    fontSize:10,
    left:-90,
    top:10,
  },
  iconf:{
    left:-30,
    
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.blue,
  },
  headerTitle: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 23,
  },
  inputContainer: {
    height: 60,
    width: "100%",
    backgroundColor: colors.gold,
    borderRadius: 10,
    position: "absolute",
    top: 90,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    elevation: 12,
  },
  categoryContainer: {
    marginTop: 60,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconContainer: {
    height: 60,
    width: 60,
    backgroundColor: colors.gold,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  sectionTitle: {
    marginHorizontal: 20,
    // marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    color: colors.blue,
  },
  cardImage: {
    height: 220,
    width: width / 2,
    marginRight: 20,
    padding: 10,
    overflow: "hidden",
    borderRadius: 10,
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
    padding: 10,
  },
});


export default Workerhistory;

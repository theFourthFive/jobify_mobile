import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
// prettier-ignore
import { Button, StyleSheet,ScrollView,Dimensions,SafeAreaView, Text,Image, View,AsyncStorage , Animated,TouchableWithoutFeedback,Alert, TouchableOpacity} from 'react-native';
import { Rating, AirbnbRating } from "react-native-ratings";
import moment from "moment";
import server from "../ipConfig/serverIp";
import axios from "axios";
import colors from "../../assets/colors/colors";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "react-native/Libraries/NewAppScreen";
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
const HiringOffers = ({ navigation }) => {
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
      const URL = `${server.Ip}/events/offers/${connectedUser}`;
      const res = await axios.get(URL);
      setevents(()=>res.data[0]);
    } catch (err) {
      console.log(err);
    }
  }

  const accept = async(event,company)=>{
   const newState = events.filter((ele)=>{return ele.eventID!==event})
   setevents(()=>newState) 
  const connectedUser = await AsyncStorage.getItem("session");
  console.log(event);
 const URL = `${server.Ip}/events/offers/accept/${connectedUser}/${event}/${company}`;
 await axios.post(URL)

  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={style.header}>
        <Icon name="sort" size={28} color={colors.white} />
        {/* <Icon name="notifications-none" size={28} color={colors.white} /> */}
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.blue,
            height: 120,
            paddingHorizontal: 20,
            
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={style.headerTitle}>Your</Text>
            <Text style={style.headerTitle}>Offers</Text>
          </View>
        </View>
    <View style={style.container}>
      <View style={style.user}>
        <View style={style.userrrr}>
          <Image style={style.img} source={{ uri: user.imageUrl }}></Image>
          <View style={style.userr}>
            <Text>{user.firstName}</Text>
            <Text>{user.LastName}</Text>
          </View>
          <Text>{user.avgRating}/5</Text>
          <AirbnbRating
            style={style.star}
            count={1}
            size={30}
            showRating={false}
            startingValue={1}
            ratingColor="#f94368"
            ratingBackgroundColor={Colors.gold}
            type="custom"
          />
        </View>
      </View>
      <View style={style.userhis} vertical={true}>
        {events.map((ele, i) => (
          <View style={style.userhiss} key={i}>
            <View style={style.alloff1}>
              <TouchableOpacity onPress={()=>navigation}>
              <Image style={style.imgg} source={{ uri: ele.imageUri }}></Image>
              </TouchableOpacity>
              <View style={style.userrhis}>
                <Text>Name:{ele.eventName}</Text>
                <Text>Form:{moment(ele.createdAt).fromNow()}</Text>
                <Text>Location:{ele.location}</Text>
              </View>
              <View style={style.userrhis}>
                <Text> {ele.label}</Text>
                <Image
                  style={style.imgggg}
                  source={{ uri: ele.imageUrl }}
                ></Image>
              </View>
              
            </View>
            <Button 
                 title ="accept"
                 color= {"#228B22"}
                 onPress={()=>accept(ele.eventEventID , ele.companyCompanyId)}
                 />
                 
                 <Button 
                 title ="deny"
                 color= {"#ff6347"}
                 
                 />
            <Text style={style.line}>_________________________________________________</Text>
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // marginTop: b10,
    height: 150,
    marginBottom: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 150,
  },
  imgg: {
    width: b40,
    height: b70,
    
  },
  imggg: {
    width: b20,
    height: b20,
    borderRadius: 50,
  },
  imgggg: {
    width: 120,
    height: 120,
    borderRadius: 150,
    marginBottom : 25
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


export default HiringOffers;

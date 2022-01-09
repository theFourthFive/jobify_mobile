import React , {useState , useEffect} from "react";
import axios from "axios";
import moment from "moment";
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// const Stack = createNativeStackNavigator();
import {
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
export default function ProfilScreen({ navigation}) {
 
  var [worker,setworker] = useState({workerId : 1})

  useEffect(() => {
    const URL  =  `http://192.168.1.246:3000/workers/profile/${worker.workerId}`;
    axios.get(URL).then(res=>{setworker(res.data)}).catch(err=>{
      console.log(err);
    })
  },[])

console.log(worker);
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View>
      <Image source={{uri: 'https://scontent.ftun2-1.fna.fbcdn.net/v/t39.30808-6/248023235_10215346462573249_509336240872393244_n.jpg?_nc_cat=104&cb=c578a115-7e291d1f&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DXNav1tJONcAX_QnsV2&_nc_ht=scontent.ftun2-1.fna&oh=00_AT_8RpZbJ07yc7BZ3TsZV93MjOQbW9B1tS2RYzGnfoEzOQ&oe=61DE96C9'}}
       style={styles.Img} />

        <Text style={styles.formHeading}>{worker.firstName }</Text>
        <Text style={styles.aboutuser}> </Text>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userbtn}>
            <Text style={styles.userbtntxt}>follow</Text>
          </TouchableOpacity>
          <TouchableOpacity   onPress={() => navigation.navigate("EditProfile")} style={styles.userbtn}>
            <Text style={styles.userbtntxt}>Edit</Text>
         </TouchableOpacity>

        </View>
        <View >
           <Text>Email: {worker.Email}</Text>
          <Text>phoneNumber: {worker.phoneNumber}</Text>
          <Text>joined from : {moment(worker.createdAt).fromNow()}</Text>
          </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    bottom:75,
    alignItems: "center"
  },
  Img: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginLeft: 285,
  },
  // userName: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginTop: 10,
  //   marginBottom: 10,
  // },
  formHeading: {
    color: "#252526",
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 310,
  },
  aboutuser: {
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  userBtnWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,
  },
  userbtn: {
    borderColor: '#2e64e5',
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  
  },
  userbtntxt: {
    color: '#2e64e5',
  },
});

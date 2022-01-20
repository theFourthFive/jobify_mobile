import React, { useState, useEffect } from "react";
import axios from "axios";
import server from "../ipConfig/serverIp";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Animated from "react-native-reanimated";
import {
  TextInput,
  Text,
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import colors from "../../assets/colors/colors";
export default function ProfilScreen({ navigation }) {
  var [profile, setProfile] = useState({});
  useEffect(async () => {
    var URL = `${server.Ip}/workers/profile/${10}`;
    var prof = await axios.get(URL);
    console.log(prof.data);
    setProfile(prof.data);
  }, []);




  return (
    <View style={styles.container}>
          <View style={styles.Icon}>
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              onPress={() => navigation.navigate("EditProfile")}
            />
          </View>
   
<View style={styles.header}>

        </View>
      <Animated.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: colors.white,
          },
        ]}
      >
          
        <View>
          <ImageBackground
            source={{
              uri: profile.imageUrl,
            }}
            style={{
              height: 140,
              width: 140,
              marginLeft: 90,
              marginTop: -100,
              alignItems: "center",
            }}
            imageStyle={{ borderRadius: 100 }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </ImageBackground>
      

          <Text style={styles.formHeading}>
          
            {profile.firstName} {profile.LastName}
          </Text>

          <View>
            {/* <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <Text>FirstName: {profile.firstName}</Text>
            </View>

            <View style={styles.action}>
              <FontAwesome name="user-o" size={20} />
              <Text>LastName: {profile.LastName}</Text>
            </View> */}

            <View style={styles.action}>
              <FontAwesome name="envelope-o" size={20} />
              <Text
                style={[
                  styles.text_footer,
                  {
                    color: colors.blue,
                  },
                ]}
              >
                Email: {profile.Email}
              </Text>
            </View>

            <View style={styles.action}>
              <Feather name="phone" size={20} />
                <Text
                style={[
                  styles.text_footer,
                  {
                    color: colors.blue,
                  },
                ]}
              >PhoneNumber: {profile.phoneNumber}</Text>
            </View>

            <View style={styles.action}>
                <Text
                style={[
                  styles.text_footer,
                  {
                    color: colors.blue,
                  },
                ]}
              >updatedAt: {profile.updatedAt}</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  
},
  text_footer: {
    color: '#05375a',
    fontSize: 18
},
  footer: {
    flex: 3,
    backgroundColor: "#252526",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    paddingBottom: 50,
  },

  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 10,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  Img: {
    width: 100,
    height: 100,
    borderRadius: 80,
    marginLeft: 285,
  },
  Icon: {
    // marginTop:300,
    marginLeft: 300,
    height: 50,
    width: 50,
    color: "#252526",
  },

  formHeading: {
    color: "#252526",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 100,
    color: "#1C0D33",
  },
  aboutuser: {
    fontSize: 12,
    fontWeight: "600",
    color: "#666",
    textAlign: "center",
    marginBottom: 10,
  },

  userbtn: {
    borderColor: "#2e64e5",
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
  },
  userbtntxt: {
    color: "#2e64e5",
  },
});

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from "react-native";
import server from "../ipConfig/serverIp";
import axios from "axios";
import { useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";
import ourcolors from "../../assets/colors/colors";
import colors from "../../assets/colors/colors";
import * as ImagePicker from 'expo-image-picker';
export default function EditProfileScreen({ navigation }) {
  const [WorkerId, setWorkerId] = useState("");
  const [firstName, setfirstName] = useState();
  const [LasttName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [imageUrl, setimageUrl] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [City, setCity] = useState("");
  const [CVUrl, setCVUrl] = useState("");
  const [availibility, setavailibility] = useState("");
  const [password, setpassword] = useState("");
  const [avgRating, setavgRating] = useState("");

  const [update, setUpdated] = useState("");
  const [imageUri, setImageUri] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const handelChangeWorkerId = (WorkerId) => {
    setWorkerId(WorkerId);
  };
  const handelChangefirstName = (firstName) => {
    setfirstName(firstName);
  };
  const handelChangeLasttName = (LasttName) => {
    setLastName(LasttName);
  };
  const handelChangeEmail = (Email) => {
    setEmail(Email);
  };
  const handelChangephoneNumber = (phoneNumber) => {
    setphoneNumber(phoneNumber);
  };
  const handelChangeimageUrl = (imageUrl) => {
    setimageUrl(imageUrl);
  };
  const handelChangeCVUrl = (CVUrl) => {
    setCVUrl(CVUrl);
  };

  const handelChangepassword = (password) => {
    setpassword(password);
  };
  const handelChangeCity = (City) => {
    setCity(City);
  };
  const handelChangeavailibility = (availibility) => {
    setavailibility(availibility);
  };

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

  const upload = (image)=>{

    var data = new FormData()
    data.append('file', image);
    data.append('upload_preset', "jobifiy");
    data.append('cloud_name','jobify')
  
    fetch("https://api.cloudinary.com/v1_1/jobify/image/upload" ,{
      method: "post",
      body: data
    }).then(res=>res.json()).then(res=>{
       setImageUri(()=>res.url)
       console.log(res);
    })
  
  }

  const pickImage = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 3],
        quality: 1,
    });
  
    const picked =  result
  
    console.log('picked',picked)
  let newFile= {uri : picked.uri,type : `test/${picked.uri.split(".")[3]}`  , name : `test.${picked.uri.split(".")[3]}`  }
   upload(newFile)
   bs.current.snapTo(1)
    if (!result.cancelled) {
    
    }
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButtono}>
        <Text style={styles.panelButtonTitleo} onPress={pickImage}>Choose From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => bs.current.snapTo(1)}
      >
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
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
      {/* <ImageBackground style={styles.background} source={require('../../assets/business-3d-good-job-1.png')}/> */}

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
                  uri:imageUrl,
                }}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
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
                    color={ourcolors.white}
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: ourcolors.white,
                      borderRadius: 10,
                    }}
                  />
                </View>
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
            Edit Image
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={ourcolors.blue} size={20} />
          <TextInput
            placeholder="First Name"
            placeholderTextColor="#666666"
            onChangeText={handelChangefirstName}
            value={firstName}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Last Name"
            placeholderTextColor="#666666"
            onChangeText={handelChangeLasttName}
            value={LasttName}
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
            onChangeText={handelChangephoneNumber}
            value={phoneNumber}
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#666666"
            onChangeText={handelChangeEmail}
            value={Email}
            keyboardType="email-address"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="password "
            placeholderTextColor="#666666"
            onChangeText={handelChangepassword}
            value={password}
            // keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>

        <View style={styles.action}>
          <Ionicons
            name="ios-clipboard-outline"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="About_Me"
            placeholderTextColor="#666666"
            style={styles.textInput}
            // value={phoneNumber}
            autoCorrect={false}
            // onChangeText={handelChangephoneNumber}
          />
        </View>
        <View style={styles.action}>
          <Ionicons name="map-marker-outline" color={colors.text} size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="#666666"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.signIn, { backgroundColor: ourcolors.gold }]}
            onPress={() => navigation.navigate("SetAvailabilityWorker")}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: ourcolors.white,
                },
              ]}
            >
              Availability
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            style={[
              styles.signIn,
              {
                borderColor: ourcolors.gold,
                borderWidth: 1,
                marginTop: 15,
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: ourcolors.gold,
                },
              ]}
            >
              Update
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
  background:{
    flex:1,
    width:400,
    height:700,
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
    backgroundColor: ourcolors.gold,
    alignItems: "center",
    marginVertical: 7,
  },
  panelButtono: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: ourcolors.white,
    alignItems: "center",
    marginVertical: 7,
    borderColor: colors.gold,
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
    color: ourcolors.gold,
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

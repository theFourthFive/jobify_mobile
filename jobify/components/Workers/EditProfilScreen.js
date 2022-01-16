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
// import { Picker } from "@react-native-picker/picker";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomSheet from "reanimated-bottom-sheet";
import Animated from "react-native-reanimated";

export default function EditProfileScreen({ navigation }) {
  const [WorkerId, setWorkerId] = useState("");
  const [firstName, setfirstName] = useState("");
  const [LasttName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [City, setCity] = useState("");
  const [CVUrl, setCVUrl] = useState("");
  const [availibility, setavailibility] = useState("");
  const [password, setpassword] = useState("");
  const [avgRating, setavgRating] = useState("");

  const handelChangeCity = (City) => {
    setCity(City);
  };
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
  const handelChangeavailibility = (availibility) => {
    setavailibility(availibility);
  };
  const handelChangepassword = (password) => {
    setpassword(password);
  };

  useEffect(() => {
    UpdateInfo(1);
  }, []);

  function UpdateInfo(id) {
    var URL = `${server.Ip}/workers/updateprofile/${1}`;
    axios
      .post(URL)
      .then((result) => {
        // setProfile(result.data)
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
          console.log(profile, "===============");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const onUpdateFormHandler = async (event) => {
  //   axios
  //     .post("/update", {
  //       WorkerId,
  //       City,
  //       firstName,
  //       LasttName,
  //       Email,
  //       phoneNumber,
  //       imageUrl,
  //       CVUrl,
  //       availibility,
  //       password,
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log("===>");
  //       console.log(error);
  //     });
  // };

  const { colors } = useTheme();

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose Your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Choose From Gallery</Text>
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
                source={{
                  uri: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
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
                    color="#fff"
                    style={{
                      opacity: 0.7,
                      alignItems: "center",
                      justifyContent: "center",
                      borderWidth: 1,
                      borderColor: "#fff",
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}>
            Edit Image
          </Text>
        </View>

        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="First Name"
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
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="Last Name"
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
        <View style={styles.action}>
          <Feather name="phone" color={colors.text} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="#666666"
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
          <Ionicons
            name="ios-clipboard-outline"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="About_Me"
            placeholderTextColor="##666666"
            style={styles.textInput}
            // value={phoneNumber}
            autoCorrect={false}
            // onChangeText={handelChangephoneNumber}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={colors.text} size={20} />
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

        {/* <View style={styles.action}  >
  <Icon name="map-marker-outline" color={colors.text} size={20} />
        <Picker
           placeholder="City"
            placeholderTextColor="#666666"
          style={styles.picker}
        
        >
          <Picker.Item label={"Tunis"} value="Tunis" />
          <Picker.Item label={"sfax"} value="sfax" />
        </Picker>
      </View> */}

        <TouchableOpacity
          style={styles.commandButton}
          onPress={() => navigation.navigate("SetAvailabilityWorker")}
        >
          <Text style={styles.panelButtonTitle}>Availability</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  commandButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#000",
    alignItems: "center",
    marginTop: 10,
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

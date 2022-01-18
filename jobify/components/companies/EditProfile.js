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

export default function EditProfile({ navigation }) {
  const [companyId, setcompanyId] = useState("");
  const [Bussinessfield, setBussinessfield] = useState(null);
  const [label, setlabel] = useState(null);
  const [Email, setEmail] = useState(null);
  const [phoneNumber, setphoneNumber] = useState(null);
  const [imageUrl, setimageUrl] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  const [password, setpassword] = useState(null);
  const [update,setUpdated]=useState("")

  const handelChangecompanyId = (companyId) => {
    setcompanyId(companyId);
  };
  const handelChangeBussinessfield = (Bussinessfield) => {
    setBussinessfield(Bussinessfield);
  };
  const handelChangelabel = (label) => {
    setlabel(label);
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
  const handelChangepassword = (password) => {
    setpassword(password);
  };
  
   useEffect(() => {

    handelChange(1)
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  },[])

  const handelChange = async (id) => {
    var  URL = `${server.Ip}/company/updateprofile/${37}`
    var info={  
      companyId,
      Bussinessfield,
      label,
      Email,
      phoneNumber,
      imageUrl,
      password,}
    axios
      .put(URL,info )
      .then((response) =>
       
      setUpdated(response.data.update),
      console.log(response,'it workes')
      ).catch((err)=> console.log("nooooo",err)
      )
  };

 

  // useEffect(() => {
    // PUT request using axios inside useEffect React hook
  //   var info={  
  //     companyId,
  //     Bussinessfield,
  //     label,
  //     Email,
  //     phoneNumber,
  //     imageUrl,
  //     password,}
  //   var URL = `${server.Ip}/company/updateprofile/${1}`;
  //   axios.put(URL,info).then((response) => setUpdated(response.data.updated));
  // }, []);

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
                  uri: imageUrl,
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
            placeholder="Legal Business"
            placeholderTextColor="#666666"
            onChangeText={handelChangelabel}
            value={label}
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
            placeholder="Bussinessfield"
            placeholderTextColor="#666666"
            onChangeText={handelChangeBussinessfield}
            value={Bussinessfield}
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
            placeholder="Phone_Number "
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
            placeholderTextColor="##666666"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>

        <View style={styles.action}>
        <Icon
            name="map-marker-outline"
            color={colors.text}
            size={20}
          />
          <TextInput
            placeholder="Location "
            placeholderTextColor="##666666"
            style={styles.textInput}
            autoCorrect={false}
          />
        </View>
        

        <TouchableOpacity style={styles.commandButton} onPress={() => {}}>
          <Text style={styles.panelButtonTitle}
          onPress={handelChange}>Update</Text>
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

import * as React from "react";

import {
  SafeAreaView,
  Picker,
  View,
  Animated,
  Text,
  Button,
  BackHandler,

  StyleSheet,

} from "react-native";

import { WebView } from "react-native-webview";
import * as Location from 'expo-location';
const MAP =
"https://www.google.tn/maps/dir/36.8942605,10.1870804/M%C3%B6venpick+Hotel+Du+Lac+Tunis,+Rue+du+Lac+Huron,+Tunis/@36.8537801,10.1798939,13z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x12fd3543273b5a57:0x52b17bbbc7671af4!2m2!1d10.24847!2d36.835514!3e0?hl=fr";
export default function NotificationScreen() {
  const { errorMsg, setErrorMsg } = React.useState('')
  const [longitude, setLongitude] = React.useState('')
  const [latitude, setLatitude] = React.useState('')
  const [selectedValue, setSelectedValue] = React.useState("java");
  React.useEffect(() => {
    (
      Location.requestForegroundPermissionsAsync().then(({ status }) => {
        if (status !== "granted") {
          setErrorMsg("Permission to access location was denied");
          return;
        }
      }).catch(() => { }).then(() => {
        Location.getCurrentPositionAsync({}).catch(() => { }).then((location) => {
          setLongitude(location.coords.longitude);
          setLatitude(location.coords.latitude);
        })                                          
      }).catch(err => { console.log(err) })
    );
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "red" }}>
      <View style={{ width: 420, height: 740 }}>
        <WebView source={{ uri: MAP }} onLoad={console.log("Loaded!")} />
        
      
      </View>

      <View style={{ marginTop: 420, width: 100 }}>

      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  headerInfoWrapStyle: {
    flexDirection: "row",
    // paddingLeft: Sizes.fixPadding,
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartItemCountWrapStyle: {
    position: "absolute",
    right: -8.0,
    height: 17.0,
    width: 17.0,
    borderRadius: 8.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue",
    elevation: 10.0,
  },
  searchButtonStyle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    // borderRadius: Sizes.fixPadding - 5.0,
    // paddingHorizontal: Sizes.fixPadding,
    // paddingVertical: Sizes.fixPadding + 1.0,
    // marginTop: Sizes.fixPadding + 5.0,
  },
});
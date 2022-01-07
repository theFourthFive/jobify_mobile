import React  from "react";
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
export default function ProfilScreen() {
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Image
          style={styles.Img}
          source={{
            uri: "https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg",
          }}
        />
        <Text style={styles.formHeading}>hello</Text>
        <Text style={styles.aboutuser}>hello again </Text>

        <View style={styles.userBtnWrapper}>
          <TouchableOpacity style={styles.userbtn}>
            <Text style={styles.userbtntxt}>follow</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={styles.userbtn}>
            <Text style={styles.userbtntxt}>Edit</Text>
         </TouchableOpacity>

        </View>
        <View >
           <Text>FirstName:</Text>
          <Text>LastName:</Text>
          <Text>Email:</Text>
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
  },
  Img: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginLeft: 60,
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
    marginLeft: 80,
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

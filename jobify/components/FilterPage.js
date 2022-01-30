import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import colors from "../assets/colors/colors";
import { Button, StyleSheet, Text, View, Image,Alert, TextInput,SafeAreaView,ScrollView,TouchableOpacity } from "react-native";
// import { RadioButton } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FilterPage({ navigation }) {
  const [woker, setworker] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const Bobify = () => {
    if (woker && !shouldShow) {
      navigation.navigate("Signup");
    } else if (!woker && shouldShow) {
      navigation.navigate("SignupCompany");
    } else if (!woker && !shouldShow) {
      Alert.alert(
        "Warning",
        "Please Pick What You Are",
        [{ text: "Okay", onPress: () => console.log("Okay Pressed") }],
        { cancelable: false }
      );
    } else if (woker && shouldShow) {
      Alert.alert(
        "Warning",
        "You Can't Pick Both",
        [{ text: "Okay", onPress: () => console.log("Okay Pressed") }],
        { cancelable: false }
      );
    }
  };
  return (
     <SafeAreaView style={{flex: 1, backgroundColor: colors.white}}>
         
      <StatusBar translucent={false} backgroundColor={colors.blue} />
      <View style={styles.header}>
        
    
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: colors.blue,
            height: 250,
            paddingHorizontal: 20,
            borderBottomLeftRadius:35,
            borderBottomRightRadius:35,
           
          }}>
          <View style={{flex: 1}}>
            <Text style={styles.headerTitle}>Choose which  </Text>
            <Text style={styles.headerTitle}>One are you! </Text>
            <View style={styles.inputContainer}>
              
              <View style={styles.pick}>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")} >
                <Image style={styles.workerImg} source={require('../assets/business-3d-man-standing-1.png')}/>
              <Text style={styles.workername}>I'm a worker</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() =>  navigation.navigate("SignupCompany")} >
                <Image style={styles.employerImg} source={require('../assets/business-3d-new-conquered-peak-man.png')}/>
                <Text style={styles.employername}>I'm an Employer</Text>
              </TouchableOpacity>
        {/* <Button title="Im A Worker" onPress={() => setworker(!woker)} /> */}
        {/* <Button
          title="Im An Employee"
          onPress={() => setShouldShow(!shouldShow)}
        /> */}
      </View>
      {woker ? (
        <View style={styles.added}>
          <Text style={styles.added}>
            As A Worker You Will Find A Lot Of Opportunities To Get Job And Also
            You Can See Other Works Posting The Advantures In Your Field
          </Text>
        </View>
      ) : null}
      {shouldShow ? (
        <View style={styles.added}>
          <Text style={styles.added}>
            As An Employee You Will Be Able To Find The Best Workers For You And
            Also You Can Post Jobs And You Will Recive Notifications With Every
            Worker Cv And Rate Hes/Her Informations
          </Text>
        </View>
      ) : null}
            </View>
          </View>
        </View>
       
        <TouchableOpacity
          style={styles.commandButtonOne}
          onPress={() => Bobify()}
        >
          <Text style={styles.panelButtonTitle}></Text>
        </TouchableOpacity>
        
          </ScrollView>
      
      
    </SafeAreaView>
     
    // <View style={styles.container}>
    //   <Text style={styles.signup}>Welcome To Our Application</Text>
    //   <View style={styles.pick}>
    //     <Button title="Im A Worker" onPress={() => setworker(!woker)} />
    //     <Button
    //       title="Im An Employee"
    //       onPress={() => setShouldShow(!shouldShow)}
    //     />
    //   </View>
    //   {woker ? (
    //     <View style={styles.added}>
    //       <Text>
    //         As A Worker You Will Find A Lot Of Opportunities To Get Job And Also
    //         You Can See Other Works Posting The Advantures In Your Field
    //       </Text>
    //     </View>
    //   ) : null}
    //   {shouldShow ? (
    //     <View style={styles.added}>
    //       <Text>
    //         As An Employee You Will Be Able To Find The Best Workers For You And
    //         Also You Can Post Jobs And You Will Recive Notifications With Every
    //         Worker Cv And Rate Hes/Her Informations
    //       </Text>
    //     </View>
    //   ) : null}

    //   <Button color="#5FCFFF" title="Next Step!" onPress={() => Bobify()} />
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  pick: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    // alignSelf: "stretch",
   
    
  },
  added: {
    top:100,
    marginLeft:20,
    marginRight:10,
    color:'black',
    fontSize: 15,
    backgroundColor: colors.white,
    borderRadius:20,
  },
  nextStep:{
    marginBottom:400,
    top:200,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
  },
  headerTitle: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 23,
    // top:20,
  },
  commandButtonOne: {
    padding: 10,
    borderRadius: 10,
    borderTopLeftRadius:30,
    backgroundColor: colors.white,
    alignItems: "center",
    marginTop: 250,
    width:'50%',
    left:100,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
    
  },
  employerImg:{
    width:180,
    height:240,
    left:20,
    top:90,
    // backgroundColor:"red"
  },
  workerImg:{
    width:180,
    height:240,
    left:-15,
    // backgroundColor:"blue",
    top:100,
  },
  workername:{
    top:70,
   
  },
employername:{
  top:80,
  color:colors.blueDark,
 left:50,
},

});

import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState} from "react";
import { Button, StyleSheet, Text, View,Alert } from 'react-native';
export default function FilterPage({ navigation }) {
    const [woker, setworker] = useState(false);
    const [shouldShow, setShouldShow] = useState(false);
    const Bob = ()=>{
      if(woker&&!shouldShow){
        navigation.navigate('Signup')
      }else if(!woker&&shouldShow){
        navigation.navigate('SignupCompany')
      }else if(!woker&&!shouldShow){
        Alert.alert(
          "Warning",
          "Please Pick What You Are",  
          [
            { text: "Okay", onPress: () => console.log("Okay Pressed") }
          ],
          { cancelable: false }
        )
      }else if(woker&&shouldShow){
        Alert.alert(
          "Warning",
          "You Can't Pick Both",  
          [
            { text: "Okay", onPress: () => console.log("Okay Pressed") }
          ],
          { cancelable: false }
        )
      }
    }
  return (
    <View style={styles.container}>
        <Text style={styles.signup} >Welcome To Our Application</Text>
    <View style={styles.pick}>
        <Button 
          title="Im A Worker"
          onPress={() => setworker(!woker)}
        />
        <Button
          title="Im An Employee"
          onPress={() => setShouldShow(!shouldShow)}
          />
    </View>
          {woker ?
          (
            <View style={styles.added} ><Text>As A Worker You Will Find A Lot Of Opportunities To Get Job And Also You Can See Other Works Posting The Advantures In Your Field</Text></View>
            
            ) : null}
            {shouldShow ?
            (
              <View style={styles.added} ><Text>As An Employee You Will Be Able To Find The Best Workers For You And Also You Can Post Jobs And You Will Recive Notifications With Every Worker Cv And Rate Hes/Her Informations</Text></View>
              ) : null}

      <Button
        color= '#5FCFFF'
        title="Next Step!"
        onPress={() => Bob()}
      />
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00BFFF',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  pick:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignSelf:'stretch',
    margin: 30
  },
  added:{
    margin:20
  }
})
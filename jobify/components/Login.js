import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TextInput } from 'react-native-gesture-handler';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import axios from 'axios';
export default function Login({ navigation }) {
  const enter=()=>{
    axios.post("http://localhost:4000/worker/login",{Email:Email,password:Password} ).then(data=>{
      console.log(data)
})
    .catch(error=>{
      console.error(error)
    })
    navigation.navigate('Routes')
  }
  const [Email, onChangeEmail] = useState(null);
  const [Password, onChangePassword] = useState(null);
  return (
    <View style={styles.container}>
        <Text style={styles.signup} >Login</Text>
        <View style={styles.blockInput}>
            <TextInput placeholder='Email' onChangeText={onChangeEmail} value={Email} style={styles.inputs}></TextInput>
        </View>
        <View style={styles.blockInput,styles.one}>
            <TextInput placeholder='Password' onChangeText={onChangePassword} value={Password} secureTextEntry={true} style={styles.inputs}></TextInput>
        </View>
      <Button
        color= '#5FCFFF'
        title="Login"
        onPress={() => enter()}
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
  inputs: {
    height: 50,
    width: 300,
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
    padding:15
  },
  blockInput:{
      margin:10
  },
  signup:{
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize:24,
    lineHeight:24,
    marginBottom:60,
    color:'white'
  },
  one:{
    marginBottom:30,
    marginTop:10
  },
})
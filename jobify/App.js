import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEvent from './components/AddEvent';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello aziz!</Text>
      <Text>this is the home screen !</Text>
      <AddEvent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
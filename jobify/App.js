import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,ScrollView  , View } from 'react-native';
import AddEvent from './components/AddEvent'; 
import EventList from './components/EventsList';

export default function App(navigation) {
  return (
    <View  style={styles.container}>
     
      <EventList/>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddEvent from './components/AddEvent';



export default function App(navigation) {
  return (
    <View style={styles.container}>
      <Text>hello aziz!</Text>
      <Text>this is the home screen !</Text>
      {/* <Button
        title="Go to AddEvent"
        onPress={() => navigation.navigate('AddEvent')}
      /> */}
      <AddEvent/>
      <StatusBar style="auto" />
    </View>
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

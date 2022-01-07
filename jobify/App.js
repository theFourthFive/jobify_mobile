import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddEvent from './components/AddEvent';
import ProfilScreen from './components/Workers/ProfilScreen';
import EditProfilScreen  from './components/Workers/EditProfilScreen'



export default function App(navigation) {
  return (
    <View style={styles.container}>
      {/* <Text>hello aziz!</Text>
      <Text>this is the home screen !</Text> */}
      {/* <Button
        title="Go to AddEvent"
        onPress={() => navigation.navigate('AddEvent')}
      /> */}
      {/* <AddEvent/> */}
      {/* <ProfilScreen/> */}
      <EditProfilScreen/>
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F2F2F2",
    alignItems: 'center',
    justifyContent: 'center',
    bottom:50,
  },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  ProfilScreen from './components/Workers/ProfilScreen'
import EditProfilScreen from './components/Workers/EditProfilScreen';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>your are fucked but it's okay </Text> */}
      <EditProfilScreen />
    
      <View>
      
      <ProfilScreen/>
      </View>
      
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

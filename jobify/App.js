import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Router from './router/router';

const App=()=> {
  return (
    <View>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
  },
});
export default App

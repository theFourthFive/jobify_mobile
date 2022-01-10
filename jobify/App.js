import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //
import Router from "./router/router";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Router></Router>
    </NavigationContainer>
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

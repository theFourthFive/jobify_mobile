import React, { useState } from "react";

import { Button, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./componetOnboarding/Home";
import Onboarding from "./componetOnboarding/Onboarding";

import AllRoutes from "./_navigator/_stacks/AllRoutes";
import Authentication from "./_navigator/_stacks/Authentication";
import Workers from "./_navigator/_tabs/Worker";
console.warn = () => {};

const Stack = createNativeStackNavigator();

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
    // <>
    //   {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
    //   {!showOnboard && <Home />}
    // </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center",
    bottom: 50,
  },
});
export default App;

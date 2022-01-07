import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native"; //
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //

import AddEvent from "./components/AddEvent";
import ProfilScreen from "./components/Workers/ProfilScreen";
import EditProfilScreen from "./components/Workers/EditProfilScreen";
import RoutesMenuScreen from "./components/RoutesMenuScreen";
import SetAvailabilityWorkerScreen from "./components/SetAvailabilityWorkerScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Routes"
          component={RoutesMenuScreen}
          options={{ title: "Routes Menu Screen" }}
        />
        <Stack.Screen
          name="SetAvailabilityWorker"
          component={SetAvailabilityWorkerScreen}
          options={{ title: "My availabilities" }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfilScreen}
          options={{ title: "Edit your Profile" }}
        />
        <Stack.Screen
          name="Profil"
          component={ProfilScreen}
          options={{ title: "My profile" }}
        />
        <Stack.Screen
          name="AddEvent"
          component={AddEvent}
          options={{ title: "Add Event" }}
        />
      </Stack.Navigator>
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

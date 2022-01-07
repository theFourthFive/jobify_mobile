import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import AddEvent from "./components/AddEvent";

import { NavigationContainer } from "@react-navigation/native"; //
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});

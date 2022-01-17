import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

import Signup from "../../components/Signup.js";
import Login from "../../components/Login.js";
import FilterPage from "../../components/FilterPage.js";
import SignupCompany from "../../components/SignupCompany.js";
import RoutesMenuScreen from "../../components/RoutesMenuScreen";
import Onboarding from "../../componetOnboarding/Onboarding";
// import SetAvailabilityWorker from "../../components/Workers/SetAvailabilityWorkerScreen";
import Worker from "../_tabs/Worker";

const AuthStack = createNativeStackNavigator();

const Authentication = () => {
  return (
    <AuthStack.Navigator initialRouteName="Onboarding">
      {/* <AuthStack.Navigator initialRouteName="SetAvailabilityWorker"> */}
      {/* <AuthStack.Screen
        name="SetAvailabilityWorker"
        component={SetAvailabilityWorker}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      /> */}
      <AuthStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <AuthStack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <AuthStack.Screen
        name="Routes"
        component={RoutesMenuScreen}
        options={{
          headerShown: false,
          title: "Routes Menu Screen",
        }}
      />
      <AuthStack.Screen
        name="SignupCompany"
        component={SignupCompany}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />

      <AuthStack.Screen
        name="HomeWorker"
        component={Worker}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
    </AuthStack.Navigator>
  );
};
export default Authentication;

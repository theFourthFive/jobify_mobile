import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

import ProfileScreen from "../../components/Workers/ProfilScreen";
import Login from "../../components/Login.js";
import FilterPage from "../../components/FilterPage.js";
import SignupCompany from "../../components/SignupCompany.js";
import RoutesMenuScreen from "../../components/RoutesMenuScreen";
import Onboarding from "../../componetOnboarding/Onboarding";
import Worker from "../_tabs/Worker";

const ProfileStack = createNativeStackNavigator();

const WorkerProfile = () => {
  return (
    <ProfileStack.Navigator initialRouteName="ProfileScreen">
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "My profile",
          headerLeft: () => <View />,
        }}
      />
      {/* <ProfileStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <ProfileStack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <ProfileStack.Screen
        name="Routes"
        component={RoutesMenuScreen}
        options={{
          headerShown: false,
          title: "Routes Menu Screen",
        }}
      />
      <ProfileStack.Screen
        name="SignupCompany"
        component={SignupCompany}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <ProfileStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <ProfileStack.Screen
        name="HomeWorker"
        component={Worker}
        options={{
          headerShown: false,
          title: "About us",
        }}
      /> */}
    </ProfileStack.Navigator>
  );
};
export default WorkerProfile;

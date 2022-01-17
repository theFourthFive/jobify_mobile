import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

import ProfileScreen from "../../components/Workers/ProfilScreen";
import Login from "../../components/Login.js";
import FilterPage from "../../components/FilterPage.js";
import SignupCompany from "../../components/SignupCompany.js";
import RoutesMenuScreen from "../../components/RoutesMenuScreen";
import Onboarding from "../../componetOnboarding/Onboarding";
import Worker from "../_tabs/Worker";
import EditProfilScreen from "../../components/Workers/EditProfilScreen";
import SetAvailabilityWorkerScreen from "../../components/Workers/SetAvailabilityWorkerScreen";
import ProfilScreen from "../../components/Workers/ProfilScreen";

const WorkerProfileStack = createNativeStackNavigator();

const WorkerProfile = () => {
  return (
    <WorkerProfileStack.Navigator initialRouteName="ProfileScreen">
      <WorkerProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: true,
          title: "My profile",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerProfileStack.Screen
        name="EditProfile"
        component={EditProfilScreen}
        options={{
          // headerShown: false,
          title: "My profile",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerProfileStack.Screen
        name="SetAvailabilityWorker"
        component={SetAvailabilityWorkerScreen}
        options={{
          // headerShown: false,
          title: "My availabilities",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerProfileStack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          headerShown: false,
          title: "My profile",
        }}
      />
      {/* <WorkerProfileStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <WorkerProfileStack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <WorkerProfileStack.Screen
        name="Routes"
        component={RoutesMenuScreen}
        options={{
          headerShown: false,
          title: "Routes Menu Screen",
        }}
      />
      <WorkerProfileStack.Screen
        name="SignupCompany"
        component={SignupCompany}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <WorkerProfileStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <WorkerProfileStack.Screen
        name="HomeWorker"
        component={Worker}
        options={{
          headerShown: false,
          title: "About us",
        }}
      /> */}
    </WorkerProfileStack.Navigator>
  );
};
export default WorkerProfile;

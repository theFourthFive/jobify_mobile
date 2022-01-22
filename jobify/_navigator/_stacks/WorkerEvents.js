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
import HomePage from "../../components/HomePage";
import EventList from "../../components/Workers/EventsList";

const WorkerEventsStack = createNativeStackNavigator();

const WorkerEvents = () => {
  return (
    <WorkerEventsStack.Navigator initialRouteName="EventList">
      <WorkerEventsStack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          title: "Home page",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerEventsStack.Screen
        name="EventList"
        component={EventList}
        options={{
          headerShown: false,
          title: "Events list",
        }}
      />
      <WorkerEventsStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          title: "My profile",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerEventsStack.Screen
        name="EditProfile"
        component={EditProfilScreen}
        options={{
          headerShown: false,
          title: "My profile",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerEventsStack.Screen
        name="SetAvailabilityWorker"
        component={SetAvailabilityWorkerScreen}
        options={{
          // headerShown: false,
          title: "My availabilities",
          // headerLeft: () => <View />,
        }}
      />
      <WorkerEventsStack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          headerShown: false,
          title: "My profile",
        }}
      />
      {/* <WorkerEventsStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <WorkerEventsStack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <WorkerEventsStack.Screen
        name="Routes"
        component={RoutesMenuScreen}
        options={{
          headerShown: false,
          title: "Routes Menu Screen",
        }}
      />
      <WorkerEventsStack.Screen
        name="SignupCompany"
        component={SignupCompany}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <WorkerEventsStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <WorkerEventsStack.Screen
        name="HomeWorker"
        component={Worker}
        options={{
          headerShown: false,
          title: "About us",
        }}
      /> */}
    </WorkerEventsStack.Navigator>
  );
};
export default WorkerEvents;

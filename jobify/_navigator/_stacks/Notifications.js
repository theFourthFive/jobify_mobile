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
import Workerhistory from "../../components/Workers/Workerhistory";

const NotificationsStack = createNativeStackNavigator();

const Notifications = () => {
  return (
    <NotificationsStack.Navigator initialRouteName="Workerhistory">
      <NotificationsStack.Screen
        name="Workerhistory"
        component={Workerhistory}
        options={{
          headerShown: false,
          title: "Home page",
          headerLeft: () => <View />,
        }}
      />
      {/* <NotificationsStack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <NotificationsStack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <NotificationsStack.Screen
        name="Routes"
        component={RoutesMenuScreen}
        options={{
          headerShown: false,
          title: "Routes Menu Screen",
        }}
      />
      <NotificationsStack.Screen
        name="SignupCompany"
        component={SignupCompany}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <NotificationsStack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <NotificationsStack.Screen
        name="HomeWorker"
        component={Worker}
        options={{
          headerShown: false,
          title: "About us",
        }}
      /> */}
    </NotificationsStack.Navigator>
  );
};
export default Notifications;

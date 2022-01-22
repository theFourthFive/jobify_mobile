import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";

import Signup from "../../components/Signup.js";
import Login from "../../components/Login.js";
import FilterPage from "../../components/FilterPage.js";
import HomePage from "../../components/HomePage.js";
import SignupCompany from "../../components/companies/authCompanie/signupCompany";
import RoutesMenuScreen from "../../components/RoutesMenuScreen";
import AddEvent from "../../components/companies/AddEvent";
import ProfilScreen from "../../components/Workers/ProfilScreen";
import EditProfilScreen from "../../components/Workers/EditProfilScreen";
import SetAvailabilityWorkerScreen from "../../components/Workers/SetAvailabilityWorkerScreen";
import EventList from "../../components/Workers/EventsList";
import AboutUs from "../../components/AboutUs";
import MapComp from "../../components/MapComp";
import Onboarding from "../../componetOnboarding/Onboarding";
import Hire from "../../components/Hire.js";
import UserHire from "../../components/UserHire.js";
import HomePageCompany from '../../components/HomePageCompany.js'
import OK from "../../components/Ok.js";

import History from "../../components/companies/CompaniesHistory/history.js";
import EventWorker from "../../components/companies/CompaniesHistory/EventWorkers.js";
import companieProfileScreen from "../../components/companies/companieProfileScreen.js";
import EditProfile from "../../components/companies/EditProfile";

import eventList from "../../components/companies/eventList"

import EventListForCompany from "../../components/companies/checksubscriptions/eventListForCompany"
import EventWorkerForComapny from "../../components/companies/checksubscriptions/EventWorkersForCompany"
import loginCompany from "../../components/companies/authCompanie/loginCompanie"

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Routes">
      <Stack.Screen
        name="FilterPage"
        component={FilterPage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <Stack.Screen
        name="Routes"
        component={RoutesMenuScreen}
        options={{
          headerShown: false,
          title: "Routes Menu Screen",
        }}
      />
      <Stack.Screen
        name="SetAvailabilityWorker"
        component={SetAvailabilityWorkerScreen}
        options={{
          headerShown: false,
          title: "My availabilities",
          headerLeft: () => <View />,
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfilScreen}
        options={{
          headerShown: false,
          title: "Edit your Profile",
        }}
      />
      <Stack.Screen
        name="companyEditProfile"
        component={EditProfile}
        options={{
          headerShown: false,
          title: "Edit your Profile",
        }}
      />
      <Stack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          headerShown: false,
          title: "My profile",
        }}
      />

      <Stack.Screen
        name="companyProfile"
        component={companieProfileScreen}
        options={{
          headerShown: false,
          title: "My profile",
          headerLeft: () => <View />,
        }}
      />

      <Stack.Screen
        name="AddEvent"
        component={AddEvent}
        options={{
          headerShown: false,
          title: "Add Event",
        }}
      />
      <Stack.Screen
        name="EventList"
        component={EventList}
        options={{
          headerShown: false,
          title: "EventList",
        }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{
          headerShown: false,
          title: "About us",
        }}
      />
      <Stack.Screen
        name="OK"
        component={OK}
        options={{
          headerShown: false,
          title: "OK",
        }}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ title: "Onboarding" }}
      />

      <Stack.Screen
        name="eventList"
        component={eventList}
        options={{
          headerShown: false,
          title: "eventList",
        }}
      />
    <Stack.Screen
        name="CHistory"
        component={History}
        options={{
          headerShown: false,
          title: "history",
        }}
      />
       <Stack.Screen
        name="EventWorker"
        component={EventWorker}
        options={{
          headerShown: false,
          title: "workers",
        }}
      />
      <Stack.Screen
        name="Hire"
        component={Hire}
        options={{
          headerShown: false,
          title: "Rename me",
        }}
      />
      <Stack.Screen
        name="UserHire"
        component={UserHire}
        options={{
          headerShown: false,
          title: "UserHire",}}
      />
      <Stack.Screen
        name="HomePageCompany"
        component={HomePageCompany}
        options={{
          headerShown: false,
          title: "HomePageCompany",}}
      />
      
        


      <Stack.Screen
        name="EventListForCompany"
        component={EventListForCompany}
        options={{
          headerShown: false,
          title: "Events List",
        }}
      />
       <Stack.Screen
        name="EventWorkerForComapny"
        component={EventWorkerForComapny}
        options={{
          headerShown: false,
          title: "Events List",
        }}
      />
      
    <Stack.Screen
        name="SignupCompany"
        component={SignupCompany}
        options={{
          headerShown: false,
          title: "Events List",
        }}
      />
    <Stack.Screen
        name="loginCompany"
        component={loginCompany}
        options={{
          headerShown: false,
          title: "loginCompany",
        }}
      />


    </Stack.Navigator>


  );
};
export default Router;

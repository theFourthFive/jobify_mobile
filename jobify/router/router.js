import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signup from "../components/Signup.js";
import Login from "../components/Login.js";
import FilterPage from "../components/FilterPage.js";
import HomePage from "../components/HomePage.js";
import SignupCompany from "../components/SignupCompany.js";
import RoutesMenuScreen from '../components/RoutesMenuScreen'
import AddEvent from "../components/companies/AddEvent";
import ProfilScreen from "../components/Workers/ProfilScreen";
import EditProfilScreen from "../components/Workers/EditProfilScreen";
import RoutesMenuScreen from "../components/RoutesMenuScreen";
import SetAvailabilityWorkerScreen from "../components/Workers/SetAvailabilityWorkerScreen";
import EventList from "../components/Workers/EventsList";
import AboutUs from "../components/AboutUs";
import MapComp from "../components/mapComp.js";
import RoutesMenuScreen from '../components/RoutesMenuScreen'
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    // >
    <Stack.Navigator initialRouteName="Routes">
      <Stack.Screen name="FilterPage" component={FilterPage} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomePage" component={HomePage} />
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
      <Stack.Screen
        name="EventList"
        component={EventList}
        options={{ title: "EventList" }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: "About us" }}
      /> 
       <Stack.Screen
        name="MapComp"
        component={MapComp}
        options={{ title: "Map" }}
      /> 
       <Stack.Screen
        name="RoutesMenuScreen"
        component={RoutesMenuScreen}
        options={{ title: "router" }}
      /> 
     
      <Stack.Screen name="SignupCompany" component={SignupCompany} />
    </Stack.Navigator>
  );
};
export default Router;

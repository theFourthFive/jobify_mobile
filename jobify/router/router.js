import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AddEvent from "../components/AddEvent";
import ProfilScreen from "../components/Workers/ProfilScreen";
import EditProfilScreen from "../components/Workers/EditProfilScreen";
import RoutesMenuScreen from "../components/RoutesMenuScreen";
import SetAvailabilityWorkerScreen from "../components/SetAvailabilityWorkerScreen";
import EventList from "../components/EventsList";
import AboutUs from "../components/AboutUs";

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    // <Stack.Navigator
    //   screenOptions={{
    //     headerShown: false,
    //   }}
    // >
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
    </Stack.Navigator>
    // </Stack.Navigator>
  );
};
export default Router;

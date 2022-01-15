import { useRef } from "react";
import { View, StyleSheet, Image, Animated } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const TabWorker = createBottomTabNavigator();

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import getWidth from "./utils/getWidth";
import SearchScreen from "./components/screens/Search";
import NotificationScreen from "./components/screens/Notification";
import CustomTabButton from "./components/buttons/CustomTab";
import plus from "../../assets/plus.png";

// import tabBarIcon from "./utils/tabBarIcon";

import RoutesMenuScreen from "../../components/RoutesMenuScreen";
import AllRouter from "../_stacks/AllRoutes"; // home
import HomePage from "../../components/HomePage"; // new Home now

import EventsList from "../../components/Workers/EventsList";

import AddEvent from "../../components/companies/AddEvent";
import ProfileScreen from "../../components/Workers/ProfilScreen";
import WorkerProfile from "../_stacks/WorkerProfile";
import WorkerHome from "../_stacks/HomeWorker";
import WorkerEvents from "../_stacks/WorkerEvents";
import Notification from "../_stacks/Notifications";

const Worker = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <TabWorker.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        style: styles.bottomTab, // Floating Tab Bar...
      }}
    >
      <TabWorker.Screen
        name={"HomeWorker"}
        // component={AllRouter}
        // component={HomePage}
        component={WorkerHome}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name={"home"}
                size={20}
                color={focused ? "blue" : "gray"}
              />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 1, // it was : 0
              useNativeDriver: true,
            }).start();
          },
        })}
      />

      <TabWorker.Screen
        name={"Event list"}
        // component={SearchScreen}
        component={WorkerEvents}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? "blue" : "gray"}
              ></FontAwesome5>
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true,
            }).start();
          },
        })}
      />

      <TabWorker.Screen
        name={"AddEvent"}
        component={AddEvent}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Image source={plus} resizeMode="contain" style={styles.plusIcon} />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2, // it was : 0
              useNativeDriver: true,
            }).start();
          },
        })}
      />

      <TabWorker.Screen
        name={"Notifications"}
        component={Notification}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="bell"
                size={20}
                color={focused ? "blue" : "gray"}
              />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true,
            }).start();
          },
        })}
      />

      <TabWorker.Screen
        name={"Profile"}
        component={WorkerProfile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? "blue" : "gray"}
              />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true,
            }).start();
          },
        })}
      />
      {/* <TabWorker.Screen
        name={"Routes"}
        component={AllRouter}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.icon}>
              <Ionicons
                name="settings"
                size={24}
                color={focused ? "blue" : "gray"}
              />
            </View>
          ),
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true,
            }).start();
          },
        })}
      /> */}
    </TabWorker.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomTab: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 40,
    marginHorizontal: 20,
    // Max Height...
    height: 60,
    borderRadius: 10,
    // Shadow...
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    paddingHorizontal: 20,
  },
  icon: {
    // centring Tab Button...
    position: "absolute",
    top: 20,
  },
  plusIcon: {
    width: 22,
    height: 22,
    tintColor: "white",
  },
});

export default Worker;

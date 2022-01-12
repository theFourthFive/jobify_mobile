// import React from 'react';
// import {SafeAreaView, Text} from 'react-native';

// const Home = () => {
//   return (
//     <SafeAreaView>
//       <Text>Welcome to the Home page!</Text>
//     </SafeAreaView>
//   );
// };

// export default Home;
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import {Animated,Navigator, Dimensions, Image, Platform, Button, StyleSheet,TouchableOpacity, Text, View } from 'react-native';
// import Router from './router/router';
import 'react-native-gesture-handler';
import AddEvant from '../components/companies/AddEvent'
import plus from '../assets/plus.png'
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
/*


import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus...
import plus from './assets/plus.png'

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';
*/
const Tab = createBottomTabNavigator();
const CustomTabButton = ({children,onPress})=>(
  <TouchableOpacity style={{
    top : -10,
    justifyContent:'center',
    alignItems:'center',
    ...styles.shadow
  }}
  onPress={onPress}
  >
    <View style={{
      width:50,
      height:50,
      borderRadius:35,
      backgroundColor:'blue',
    }}>{children}</View>
  </TouchableOpacity>
)
const Home=()=> {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 40,
          marginHorizontal: 20,
          // Max Height...
          height: 60,
          borderRadius: 10,
          // Shadow...
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
          paddingHorizontal: 20,
        }
      }}>

        {
          // Tab Screens....

          // Tab ICons....
        }
        <Tab.Screen name={"Home"} component={HomeScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="home"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Search"} component={SearchScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="search"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>
        <Tab.Screen name={"AddEvent"} component={AddEvent} options={{
          tabBarIcon: ({ focused }) => (

            
                <Image source={plus}
                resizeMode='contain'
                style={{
                  width: 22,
                  height: 22,
                  tintColor: 'white',
                }}/>
        ),
        tabBarButton:(props)=>(
          <CustomTabButton{...props}/>
        )
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="bell"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

        <Tab.Screen name={"Settings"} component={SettingsScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{
              // centring Tab Button...
              position: 'absolute',
              top: 20
            }}>
              <FontAwesome5
                name="user-alt"
                size={20}
                color={focused ? 'blue' : 'gray'}
              ></FontAwesome5>
            </View>
          )
        }} listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: e => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 4,
              useNativeDriver: true
            }).start();
          }
        })}></Tab.Screen>

      </Tab.Navigator>
      {/* <Router></Router> */}
    </NavigationContainer>
 );
} 
function getWidth() {
  let width = Dimensions.get("window").width

  // Horizontal Padding = 20...
  width = width - 80

  // Total five Tabs...
  return width / 5
}

function AddEvent() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <Text>hello</Text>
     <AddEvant/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      
      
    </View>
  );
}

function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function SearchScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Search!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Home

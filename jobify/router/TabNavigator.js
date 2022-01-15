import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
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
      }}
    >
      {
        // Tab Screens....
        // Tab ICons....
      }
      <Tab.Screen
        name={"Home"}
        component={RoutesMenuScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="home"
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
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Search"}
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
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
      ></Tab.Screen>
      <Tab.Screen
        name={"AddEvent"}
        component={AddEvent}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={plus}
              resizeMode="contain"
              style={{
                width: 22,
                height: 22,
                tintColor: "white",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabButton {...props} />,
        }}
        listeners={({ navigation, route }) => ({
          // Onpress Update....
          tabPress: (e) => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Notifications"}
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="bell"
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
              toValue: getWidth() * 3,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>

      <Tab.Screen
        name={"Settings"}
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                // centring Tab Button...
                position: "absolute",
                top: 20,
              }}
            >
              <FontAwesome5
                name="user-alt"
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
              toValue: getWidth() * 4,
              useNativeDriver: true,
            }).start();
          },
        })}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigator;

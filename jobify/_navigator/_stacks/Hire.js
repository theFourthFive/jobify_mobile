import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import Hire from "../../components/Hire"
import Ok from "../../components/Ok"
const CompanyHomeStack = createNativeStackNavigator();

const HireStack = () => {
  return (
    <CompanyHomeStack.Navigator initialRouteName="Hire">      
      <CompanyHomeStack.Screen
        name="Hire"
        component={Hire}
        options={{
          headerShown: false,
          title: "Home page",
          // headerLeft: () => <View />,
        }}
      />
    <CompanyHomeStack.Screen
        name="Ok"
        component={Ok}
        options={{
          headerShown: false,
          title: "Ok",
          // headerLeft: () => <View />,
        }}
      />
    </CompanyHomeStack.Navigator>
  );
};
export default Hire;

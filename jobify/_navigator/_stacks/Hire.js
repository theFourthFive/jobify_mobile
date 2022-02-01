import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import Hire from "../../components/Hire";
import Ok from "../../components/Ok";
import SelectEvent from "../../components/companies/SelectEvent";
import SelectPayment from "../../components/companies/SelectPayment";
const CompanyHireStack = createNativeStackNavigator();

const HireStack = () => {
  return (
    <CompanyHireStack.Navigator initialRouteName="Hire">
      <CompanyHireStack.Screen
        name="Hire"
        component={Hire}
        options={{
          headerShown: false,
          title: "Home page",
          // headerLeft: () => <View />,
        }}
      />
      <CompanyHireStack.Screen
        name="Ok"
        component={Ok}
        options={{
          headerShown: false,
          title: "Ok",
          // headerLeft: () => <View />,
        }}
      />
      <CompanyHireStack.Screen
        name="SelectEvent"
        component={SelectEvent}
        options={{
          headerShown: false,
          title: "Hire worker",
          // headerLeft: () => <View />,
        }}
      />
      <CompanyHireStack.Screen
        name="SelectPayment"
        component={SelectPayment}
        options={{
          headerShown: false,
          title: "Hire worker",
          // headerLeft: () => <View />,
        }}
      />
    </CompanyHireStack.Navigator>
  );
};
export default HireStack;

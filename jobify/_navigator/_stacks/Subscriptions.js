import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import EventsListForCompany from "../../components/companies/checksubscriptions/eventListForCompany";
const CompanyHomeStack = createNativeStackNavigator();
import EventWorkerForComapny from "../../components/companies/checksubscriptions/EventWorkersForCompany"
import EventWorker from "../../components/companies/CompaniesHistory/EventWorkers"
import History  from "../../components/companies/CompaniesHistory/history";
const Subscriptions = () => {
  return (
    <CompanyHomeStack.Navigator initialRouteName="EventsListForCompany">      
      <CompanyHomeStack.Screen
        name="Hire"
        component={EventsListForCompany}
        options={{
          headerShown: false,
          title: "My events",
          // headerLeft: () => <View />,
        }}
      />
    <CompanyHomeStack.Screen
        name="EventWorkerForComapny"
        component={EventWorkerForComapny}
        options={{
          headerShown: false,
          title: "EventWorkerForComapny",
          // headerLeft: () => <View />,
        }}
      />

   <CompanyHomeStack.Screen
        name="EventWorker"
        component={EventWorker}
        options={{
          headerShown: false,
          title: "workers of this event",
          // headerLeft: () => <View />,
        }}
      />

<CompanyHomeStack.Screen
        name="History"
        component={History}
        options={{
          headerShown: false,
          title: "History",
          // headerLeft: () => <View />,
        }}
      />

    </CompanyHomeStack.Navigator>
  );
};
export default Subscriptions;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
import HomePageCompany from "../../components/HomePageCompany";

const CompanyHomeStack = createNativeStackNavigator();

const CompanyHome = () => {
  return (
    <CompanyHomeStack.Navigator initialRouteName="HomePageCompany">
      <CompanyHomeStack.Screen
        name="HomePageCompany"
        component={HomePageCompany}
        options={{
          headerShown: false,
          title: "Home page",
          // headerLeft: () => <View />,
        }}
      />
    </CompanyHomeStack.Navigator>
  );
};
export default CompanyHome;

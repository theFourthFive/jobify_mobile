import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../components/Signup.js';
import Login from '../components/Login.js';
import FilterPage from '../components/FilterPage.js';
import HomePage from '../components/HomePage.js';
import SignupCompany from '../components/SignupCompany.js'
const Stack = createNativeStackNavigator();

const Router=()=> {
  return (
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="FilterPage" component={FilterPage} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="SignupCompany" component={SignupCompany} />
    </Stack.Navigator>
  );
}
export default Router
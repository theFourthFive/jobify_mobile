
import React, {useState} from 'react';
import Home from './componetOnboarding/Home';
import Onboarding from './componetOnboarding/Onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './router/router';

const Stack = createNativeStackNavigator();



const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    // <>
    //   {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
    //   {!showOnboard && <Home />}
    // </>
  );
};

export default App;
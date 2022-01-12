
import React, {useState} from 'react';
import Home from './componet onboarding/Home';
import Onboarding from './componet onboarding/Onboarding';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard && <Onboarding handleDone={handleOnboardFinish} />}
      {!showOnboard && <Home />}
    </>
  );
};

export default App;
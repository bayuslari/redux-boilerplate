import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Login from './components/Login';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" hideNavBar type="replace">
          <Scene key="login" component={Login} title="Login" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;

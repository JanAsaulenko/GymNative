import React from 'react';
import {Provider} from 'react-redux';
import store from './client/redux/store';
import {Router} from './src/screens';
import {NavigationContainer} from '@react-navigation/native';
import {ServerProvider} from './src/contexts/ServerContext';
import {navigationRef} from './src/service/NavigationService';
export default () => {
  return (
    <ServerProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef}>
          <Router />
        </NavigationContainer>
      </Provider>
    </ServerProvider>
  );
};

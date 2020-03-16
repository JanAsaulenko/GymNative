import React from 'react';
import {Provider} from 'react-redux';
import store from './client/redux/store';
import {Router} from './src/screens';
import {NavigationContainer, useLinking} from '@react-navigation/native';
import {ServerProvider} from './src/contexts/ServerContext';
export default () => {
  const navigationRef = React.useRef();

  let [initialState, setIninitialState] = React.useState();

  return (
    <ServerProvider>
      <Provider store={store}>
        <NavigationContainer ref={navigationRef} initialState={initialState}>
          <Router />
        </NavigationContainer>
      </Provider>
    </ServerProvider>
  );
};

import React from 'react';
import {Provider} from 'react-redux';
import store from './client/redux/store';
import {Router} from './src/screens';
import {Text} from 'react-native';
import {NavigationContainer, useLinking} from '@react-navigation/native';
import {getCurrentPageTitle} from './src/utils/routerUtils';
import {ServerProvider} from './src/contexts/ServerContext';
import {q, server} from './src/server/firebaseconfig';
export default () => {
  const navigationRef = React.useRef();

  let [initialState, setIninitialState] = React.useState();

  let context = {
    name: 'john',
  };

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

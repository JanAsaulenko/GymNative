import React from 'react';
import {Provider} from 'react-redux';
import store from './client/redux/store';
import {Router} from './src/screens';
import {Item} from './src/components/Item';
import {NavigationContainer, useLinking} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {getCurrentPageTitle} from './src/utils/routerUtils';
export default () => {
  const navigationRef = React.useRef();

  let [initialState, setIninitialState] = React.useState();

  return (
    <Provider store={store}>
      {/* <SafeAreaProvider> */}
      <NavigationContainer
        ref={navigationRef}
        initialState={initialState}
        onStateChange={state => getCurrentPageTitle(state)}>
        <Router />
      </NavigationContainer>
      {/* </SafeAreaProvider> */}
    </Provider>
  );
};

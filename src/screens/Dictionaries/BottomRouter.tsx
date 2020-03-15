import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import {DictionaryRouter} from './DictionaryRouter';
import {Directories} from '../Directories/Directories';
import {ElseRouter} from '../Else/ElseRouter';
import {TabNavigation} from 'src/components';
const Tab = createBottomTabNavigator();

export const BottomRouter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        key="dictioaries"
        name="Dictionaries"
        component={DictionaryRouter}
      />

      <Tab.Screen key="directories" name="Directories">
        {properties => {
          return <Directories {...properties} />;
        }}
      </Tab.Screen>
      <Tab.Screen key="else" name="Else">
        {properties => {
          return <ElseRouter {...properties} />;
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

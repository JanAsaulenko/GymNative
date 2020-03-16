import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {DictionaryRouter} from './DictionaryRouter';
import {Directories, ElseRouter, RootDrawerNavigationList} from '../index';

type RootDrawerNavigation = {
  Main: undefined;
};

type Props = {
  navigation: DrawerNavigationProp<RootDrawerNavigationList, 'Main'>;
  route: RouteProp<RootDrawerNavigation, 'Main'>;
};

export type BottomRouterList = {
  Dictionaries: undefined;
  Directories: undefined;
  Else: undefined;
};

const Tab = createBottomTabNavigator<BottomRouterList>();

export const BottomRouter = (props: Props) => {
  return (
    <>
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
    </>
  );
};

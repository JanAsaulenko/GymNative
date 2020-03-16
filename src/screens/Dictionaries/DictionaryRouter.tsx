import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {Header} from '../../components/shared/Header';
import {ButtonAdd} from '../../components/ButtonAdd';

import {Photos, MakePhotoScreen, Camera} from '../BodyPhotoScreen';
import {BottomRouterList} from './BottomRouter';
import {DictionaryScreen} from '../Dictionaries';
import {RootDrawerNavigationList} from '../Router';
const styles = StyleSheet.create({
  main: {
    position: 'relative',
    flex: 1,
    height: 40,
  },
  text: {
    fontSize: 42,
  },
});

let Stack = createStackNavigator();

export const Trainings = props => {
  return (
    <View style={{flex: 1}}>
      <Text>"sdsd"</Text>
      <View style={styles.main}>
        <ButtonAdd {...props} destinationScreen={'Training'} />
      </View>
    </View>
  );
};

type DictionaryRouterProp = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<RootDrawerNavigationList>,
    BottomTabNavigationProp<BottomRouterList, 'Dictionaries'>
  >;
  route: RouteProp<BottomRouterList, 'Dictionaries'>;
};

export const DictionaryRouter = (props: DictionaryRouterProp) => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Dictionary"
        key="Dictionary"
        options={{
          header: properties => (
            <Header title={props.route.name} goBack={props.navigation} />
          ),
        }}
        component={DictionaryScreen}
      />
      <Stack.Screen
        name="Trainings"
        key="Trainings"
        options={{
          headerTitle: _ => {
            return (
              <View>
                <Text style={{fontSize: 18}}>"Trainings"</Text>
                <Text>{props.route.name}</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Trainings}
      />
      <Stack.Screen
        name="BodyPhotos"
        key="BodyPhoto"
        options={{
          headerTitle: _ => {
            return (
              <View>
                <Text style={{fontSize: 18}}>Body Photos</Text>
                <Text>{props.route.name}</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Photos}
      />
      <Stack.Screen
        name="MakePhotoScreen"
        key="MakePhotoScreen"
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={MakePhotoScreen}
      />

      <Stack.Screen
        name="Camera"
        key="Camera"
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Camera}
      />
      <Stack.Screen
        name="Training"
        key="Training"
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={MakePhotoScreen}
      />
    </Stack.Navigator>
  );
};

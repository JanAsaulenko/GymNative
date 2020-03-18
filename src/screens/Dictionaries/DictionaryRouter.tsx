import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {Header} from '../../components/shared/Header';
import {Photos, MakePhotoScreen, Camera} from '../BodyPhotoScreen';
import {BottomRouterList} from './BottomRouter';
import {DictionaryScreen} from '../Dictionaries';
import {RootDrawerNavigationList} from '../Router';
import {Trainings} from './Trainings';
import {Photo} from '../BodyPhotoScreen/Photo';
let Stack = createStackNavigator();

type DictionaryRouterProp = {
  navigation: CompositeNavigationProp<
    DrawerNavigationProp<RootDrawerNavigationList>,
    BottomTabNavigationProp<BottomRouterList, 'Dictionaries'>
  >;
  route: RouteProp<BottomRouterList, 'Dictionaries'>;
};

export const DictionaryRouter = (props: DictionaryRouterProp) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dictionary"
        key="Dictionary"
        options={{
          header: _ => (
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
                <Text style={{fontSize: 18}}>Trainings</Text>
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
        name="Photo"
        key="Photo"
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Photo}
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

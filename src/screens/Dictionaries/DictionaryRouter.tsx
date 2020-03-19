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
import {Screens, ScreensEnum} from '../../service/NavigationService';
import {Notes} from '../Dictionaries/Notes';
import {Note} from '../Dictionaries/Note';
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
        name={ScreensEnum.Dictionary}
        key={ScreensEnum.Dictionary}
        options={{
          header: _ => (
            <Header title={props.route.name} goBack={props.navigation} />
          ),
        }}
        component={DictionaryScreen}
      />
      <Stack.Screen
        name={ScreensEnum.Trainings}
        key={ScreensEnum.Trainings}
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
        name={ScreensEnum.BodyPhotos}
        key={ScreensEnum.BodyPhotos}
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
        name={ScreensEnum.MakePhotoScreen}
        key={ScreensEnum.MakePhotoScreen}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={MakePhotoScreen}
      />

      <Stack.Screen
        name={ScreensEnum.Camera}
        key={ScreensEnum.Camera}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Camera}
      />
      <Stack.Screen
        name={ScreensEnum.Photo}
        key={ScreensEnum.Photo}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Photo}
      />
      <Stack.Screen
        name={ScreensEnum.Training}
        key={ScreensEnum.Training}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={MakePhotoScreen}
      />

      <Stack.Screen
        name={ScreensEnum.Notes}
        key={ScreensEnum.Notes}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Notes}></Stack.Screen>
      <Stack.Screen
        name={ScreensEnum.Note}
        key={ScreensEnum.Note}
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Note}></Stack.Screen>
    </Stack.Navigator>
  );
};

import React, {useState} from 'react';
import {View, Text, Button, SectionList, Image} from 'react-native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Programs, Photos} from './index';
import {Item} from '../components/Item';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {BottomRouter} from './Dictionaries/BottomRouter';
const Stack = createStackNavigator();

const CustomDrawerContent = (props: any) => {
  const DATA = [
    {
      title: 'Dictionaries',
      data: ['Trainings', 'Programs', 'BodyPhotos'],
    },
    {
      title: 'Directories',
      data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
    },
    {
      title: 'Drinks',
      data: ['Water', 'Coke', 'Beer'],
    },
    {
      title: 'Settings',
      data: ['Cheese Cake', 'Ice Cream'],
    },
  ];

  return (
    <View>
      <Image
        style={{height: 190, backgroundColor: 'red'}}
        source={{
          uri:
            'https://cdn4.vectorstock.com/i/1000x1000/48/58/sport-inspiring-workout-and-fitness-gym-motivation-vector-20914858.jpg',
        }}
      />
      <View style={{paddingLeft: 20}}>
        <SectionList
          sections={DATA}
          renderItem={({item}) => {
            return <Item value={item} nav={props.navigation} />;
          }}
          keyExtractor={(item, index) => {
            return item;
          }}
          renderSectionHeader={prop => {
            return (
              <View style={{height: 60, justifyContent: 'center'}}>
                <Text>{prop.section.title}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export const Router = () => {
  const Drawer = createDrawerNavigator();
  let [targetPage, setTargetPage] = React.useState('Main');

  return (
    <Drawer.Navigator drawerContent={smth => <CustomDrawerContent {...smth} />}>
      <Drawer.Screen name="Main" key="Main">
        {props => {
          return (
            <BottomRouter
              {...props}
              targetPage={targetPage}
              setTargetPage={setTargetPage}
            />
          );
        }}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

import React from 'react';
import {View, Text, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {ButtonAdd} from '../../components/ButtonAdd';
export const Trainings = props => {
  return (
    <View>
      <Button title="back" onPress={() => props.navigation.goBack()} />
      <Text>Training</Text>
      <ButtonAdd {...props} destinationScreen={'secondScreen'} />
    </View>
  );
};

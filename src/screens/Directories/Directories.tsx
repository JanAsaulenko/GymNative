import React from 'react';
import {View} from 'react-native';
import {Header} from '../../components/shared/Header';
export const Directories = props => {
  return (
    <View>
      <Header title={props.route.name} goBack={props.navigation} />
    </View>
  );
};

import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';
import {navigationRef} from '../../../App';
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

export const Photos = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Text>Photos</Text>

      <View style={styles.main}>
        <ButtonAdd
          handlePress={navigation.navigate}
          destinationScreen={'MakePhotoScreen'}
        />
      </View>
    </View>
  );
};

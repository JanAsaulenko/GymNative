import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';
import {Screens, navigate, ScreensEnum} from '../../service/NavigationService';
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

export const Notes = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Photos</Text>

      <View style={styles.main}>
        <ButtonAdd
          handlePress={navigate}
          destinationScreen={ScreensEnum.Note}
        />
      </View>
    </View>
  );
};

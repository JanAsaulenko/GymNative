import React from 'react';
import {TextInput, View} from 'react-native';

export const Form = () => {
  const textHandler = (text: any): void => {
    console.log(text);
  };
  return (
    <View>
      <TextInput placeholder="type here" onChangeText={textHandler} />
    </View>
  );
};

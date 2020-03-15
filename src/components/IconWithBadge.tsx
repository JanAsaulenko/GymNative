import React from 'react';
import {View, Button} from 'react-native';

export const IconWithBadge = (props: any) => {
  return (
    <View>
      <Button title={props.title} onPress={props.handler} />
    </View>
  );
};

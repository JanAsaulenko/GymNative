import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    height: 40,
    alignItems: 'flex-start',
  },
  button: {
    backgroundColor: 'white',
  },
});
export const Item = (props: any) => {
  return (
    <View style={styles.item}>
      <Button
        title={props.value}
        onPress={() => props.nav.navigate(props.value)}
      />
    </View>
  );
};

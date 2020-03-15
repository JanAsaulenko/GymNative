import React from 'react';
import {Button, View} from 'react-native';

export const TabNavigation = ({navigation, pages}) => {
  return (
    <View>
      {pages.map((page: string, number: any) => {
        return (
          <Button
            key={number}
            title={page}
            onPress={() => navigation.navigate(page)}
          />
        );
      })}
    </View>
  );
};
А;

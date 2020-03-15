import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {HeaderTitle} from '@react-navigation/stack';
import {Humburger} from '../../components/HeaderHumburger';

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: 'orange',
    height: 50,
    alignItems: 'center',
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  header__title: {
    flex: 6,
  },
});

export const Header = ({title, goBack}) => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Humburger open={goBack} />
      </View>
      <HeaderTitle style={styles.header__title}>{title}</HeaderTitle>
    </View>
  );
};

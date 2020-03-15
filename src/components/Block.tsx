import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  title: {
    flex: 4,
    fontWeight: 'bold',
  },
  header__button: {
    color: 'red',
  },
  main: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  emptyContent: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

interface IBlock {
  label: string;
  handleEvent: () => void;
}

export const Block: React.FC<IBlock> = ({label, children, handleEvent}) => {
  const TEXT = 'Empty...';
  const ELSE = 'Else';
  return (
    <View>
      <TouchableOpacity onPress={() => handleEvent()}>
        <View style={styles.header}>
          <Text style={styles.title}>{label}</Text>
          <Text style={styles.header__button}>{ELSE.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.main}>
        {children ? (
          children
        ) : (
          <View style={styles.emptyContent}>
            <Text>{TEXT}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

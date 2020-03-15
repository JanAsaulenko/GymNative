import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Clipboard,
  TextInput,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
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
export const Training = proper => {
  const [value, setValue] = useState(null);

  const handler = data => {
    console.log(data);

    setValue(data);
  };

  const debouncer = (func: any, debounceTime: number) => {
    let timer = 0;
    return (data: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(data);
      }, debounceTime);
    };
  };

  const throttleFunction = (func, ms) => {
    let isThrotled = false,
      savedArguments,
      savedContext;

    function wrapper(...rest: []) {
      console.log(this);

      if (isThrotled) {
        (savedArguments = arguments), (savedContext = this);
      }

      // func.apply(this, arguments);
      func(rest);

      let timer = setTimeout(() => {
        console.log(this);
      }, ms);
    }
    return wrapper;
  };
  const throttle = (func: (value: string) => void, time: number) => {
    let timer = 0;

    return (value: string) => {
      if (timer !== 0) {
        return;
      }
      timer = setTimeout(() => {
        func(value);
        clearTimeout(timer);
        timer = 0;
      }, time);
    };
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.main}></View>
      {value && <Text>{value}</Text>}
    </View>
  );
};

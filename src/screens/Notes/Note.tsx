import React, {useState} from 'react';
// import {Lens} from 'ramda';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Screens, navigate, ScreensEnum} from '../../service/NavigationService';
import {ButtonAdd} from '../../components/ButtonAdd';
import {State} from 'react-native-gesture-handler';
import {IDateState} from '../../components/DatePickerInput';
import DateTimePicker from '@react-native-community/datetimepicker';
import {DatePickerInput} from '../../components/DatePickerInput';
import {lens, path, lensProp, lensPath} from 'ramda';
const styles = StyleSheet.create({
  main: {
    position: 'relative',
    flex: 1,
    height: 40,
  },
  text: {
    fontSize: 42,
  },
  input: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    marginBottom: 10,
  },
  input__active: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: 'red',
    marginBottom: 10,
  },
});

type IComment = {
  name: {
    text: string;
    status: boolean;
  };
  note: {
    text: string;
    status: boolean;
  };
  date: Date;
  time: Date;
};

export const Note = () => {
  const [comment, setComment] = React.useState<IComment>({
    name: {text: '', status: false},
    note: {text: '', status: false},
    date: new Date(),
    time: new Date(),
  });

  const handleStatus = (value: 'name' | 'note') => {
    setComment((prevState: IComment) => {
      return {
        ...prevState,
        comment: {
          ...prevState,
          [value]: {
            ...prevState[value],
            status: !prevState[value].status,
          },
        },
      };
    });
  };
  return (
    <View style={{flex: 1, margin: 10}}>
      <Text>Name</Text>
      <TextInput
        onFocus={() => handleStatus('name')}
        onBlur={() => handleStatus('name')}
        style={
          !comment.name.status ? styles.input : styles.input__active
        }></TextInput>
      <Text>Note</Text>
      <TextInput
        onFocus={() => handleStatus('note')}
        onBlur={() => handleStatus('note')}
        style={
          !comment.note.status ? styles.input : styles.input__active
        }></TextInput>

      <DatePickerInput handleChanges={setComment} state={comment} />

      <ButtonAdd />
    </View>
  );
};

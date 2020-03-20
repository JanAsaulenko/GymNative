import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {view, set, lens, prop, assoc} from 'ramda';

type DatePicker = 'date' | 'time';

export interface IDateState {
  type: null | DatePicker;
  visible: boolean;
}

interface IDateItems {
  date: Date;
  time: Date;
}

interface IDataPickerInput<S> {
  handleChanges: (state: any) => void;
  state: S;
}

export const DatePickerInput = <S extends IDateItems>(
  props: IDataPickerInput<S>,
) => {
  const generateTime = (time: Date) => {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  };

  let [state, setState] = React.useState<IDateState>({
    type: null,
    visible: false,
  });

  let typeLens = lens(prop('type'), assoc('type'));
  let type: DatePicker = view(typeLens, state);

  let visibilityLens = lens(prop('visible'), assoc('visible'));
  let isVisible: Boolean = view(visibilityLens, state);

  const innerStateSetter = React.useCallback(
    (typeProp: DatePicker | null, visibleProp: boolean) => {
      let visible = set(visibilityLens, visibleProp, state).visible;
      let type = set(typeLens, typeProp, state).type;

      setState(() => ({visible, type}));
    },
    [],
  );

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <Text> Date and time of photo</Text>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 20,
          marginBottom: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            innerStateSetter('date', true);
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: 'auto',
              minWidth: '45%',
              borderBottomColor: 'black',
            }}>
            {props.state.date && (
              <Text>{props.state.date!.toDateString()}</Text>
            )}
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            innerStateSetter('time', true);
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: 'auto',
              minWidth: '45%',
              borderBottomColor: 'black',
            }}>
            {props.state.time && <Text>{generateTime(props.state.time)}</Text>}
          </View>
        </TouchableOpacity>
      </View>

      {isVisible && type && (
        <DateTimePicker
          style={{
            shadowColor: '#fff',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset: {height: 0, width: 0},
          }}
          mode={type}
          is24Hour={true}
          display="default"
          value={props.state[type]}
          timeZoneOffsetInMinutes={0}
          onChange={(event, datas) => {
            props.handleChanges((prevState: S) => {
              innerStateSetter(null, false);
              return {
                ...prevState,
                [type]: datas,
              };
            });
          }}
        />
      )}
    </View>
  );
};

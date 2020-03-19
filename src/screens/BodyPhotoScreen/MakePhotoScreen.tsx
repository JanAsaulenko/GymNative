import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  Image,
  StyleSheet,
  StatusBar,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {ServerContext} from '../../contexts/ServerContext';
import {Status} from '../../server/firebaseconfig';

import {navigate, ScreensEnum} from '../../service/NavigationService';
type DatePicker = 'date' | 'time';

export interface IDateState {
  date?: Date;
  time: any;
  visible: boolean;
  type: null | DatePicker;
}

export const MakePhotoScreen = props => {
  const [photoInfo, setPhotoInfo] = React.useState<IDateState>({
    date: new Date(1598051730000),
    time: new Date(),
    visible: false,
    type: null,
  });

  const {api} = React.useContext(ServerContext);

  const handleAddingPhoto = () => {
    // Add Valiadtion for adding photo data and other fields.Choose required field which we need

    api
      .addTableItem('photos', {
        type: `${photoInfo.type}`,
        date: `${photoInfo.date}`,
        time: `${photoInfo.time}`,
        visible: photoInfo.visible,
        uri: props.route.params.photo.uri,
      })
      .then(data => {
        if (data.status === 'error') {
          console.log('error handling');
        } else {
          navigate(ScreensEnum.Dictionary, {
            id: data.id!,
            status: 'add',
          });
        }
      });
  };

  const generateTime = (time: Date) => {
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  };

  return (
    <View style={{marginTop: 10, paddingLeft: 10, paddingRight: 10}}>
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
            setPhotoInfo((prevState: IDateState) => {
              return {...prevState, type: 'date', visible: true};
            });
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: 'auto',
              minWidth: '45%',
              borderBottomColor: 'black',
            }}>
            <Text>{photoInfo.date!.toDateString()}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setPhotoInfo((prevState: IDateState) => {
              return {...prevState, type: 'time', visible: true};
            });
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              width: 'auto',
              minWidth: '45%',
              borderBottomColor: 'black',
            }}>
            <Text>{generateTime(photoInfo.time)}</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Text>Photo*</Text>

      <View style={{flexDirection: 'row', height: 120, marginTop: 10}}>
        {props.route.params && props.route.params.photo ? (
          <Image
            style={{width: 120}}
            source={{uri: props.route.params.photo.uri}}
          />
        ) : (
          <View
            style={{
              width: 120,
              borderWidth: 1,
              marginRight: 10,
            }}></View>
        )}

        <View style={{flex: 1}}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigate(ScreensEnum.Camera)}>
            <Text>MAKE PHOTO</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigate(ScreensEnum.Camera)}>
            <View>
              <Text>BROWSE PHOTO</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Button title="add" onPress={() => handleAddingPhoto()} />

      {photoInfo.visible && photoInfo.type && (
        <DateTimePicker
          style={{
            shadowColor: '#fff',
            shadowRadius: 0,
            shadowOpacity: 1,
            shadowOffset: {height: 0, width: 0},
          }}
          mode={photoInfo.type}
          is24Hour={true}
          display="default"
          value={photoInfo[photoInfo.type]}
          timeZoneOffsetInMinutes={0}
          onChange={(event, datas) => {
            setPhotoInfo((prevState: IDateState) => {
              return {
                ...prevState,
                type: null,
                [photoInfo.type!]: datas ? datas : photoInfo[photoInfo.type!],
                visible: false,
              };
            });
          }}
        />
      )}
    </View>
  );
};

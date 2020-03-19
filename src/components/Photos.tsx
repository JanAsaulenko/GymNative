import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ServerContext} from '../contexts/ServerContext';
import {IAddPhoto} from '../server/firebaseconfig';
import {ScreensEnum, navigate} from '../service/NavigationService';
import {Block} from './Block';

export const Photos = props => {
  const {api} = React.useContext(ServerContext);
  const [photos, setPhotos] = React.useState<Array<IAddPhoto>>([]);

  let key =
    props.refreshKey && props.refreshKey.params && props.refreshKey.params.id;
  let status =
    props.refreshKey &&
    props.refreshKey.params &&
    props.refreshKey.params.status;

  React.useEffect(() => {
    api.getTableItems('photos').then(data => {
      setPhotos(() => {
        return data ? Object.values(data) : [];
      });
    });
  }, [key, status]);

  if (photos.length) {
    return (
      <Block
        label={'Body photo'}
        handleEvent={props.handleScreen.bind(null, ScreensEnum.BodyPhotos, {
          photos: photos,
        })}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          {photos
            .sort((a: IAddPhoto, b: IAddPhoto) => (a.date! > b.date! ? 1 : -1))
            .slice(0, 3)
            .map((photo, index) => {
              return (
                <TouchableOpacity
                  onPress={props.handleScreen.bind(null, ScreensEnum.Photo, {
                    photo: photo,
                  })}>
                  <Image
                    style={{width: 120, height: 120}}
                    source={{uri: photo.uri}}
                    key={index}
                  />
                </TouchableOpacity>
              );
            })}
        </View>
      </Block>
    );
  }
  return (
    <Block
      label={'Body photo'}
      handleEvent={() => props.handleScreen(ScreensEnum.BodyPhotos)}
    />
  );
};

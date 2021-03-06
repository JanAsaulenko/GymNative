import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';

type cameraType = 'front' | 'back';

interface ICameraPosition {
  position: cameraType;
}
export const Camera = props => {
  const camera = React.useRef<RNCamera | null>(null);
  const [photo, setPhoto] = React.useState<null | string>(null);
  const [cameraTurn, setCameraTurn] = React.useState<ICameraPosition>({
    position: 'back',
  });
  const makePhoto = async () => {
    if (camera.current) {
      try {
        let snipet = await camera.current.takePictureAsync();
        props.navigation.navigate('MakePhotoScreen', {
          photo: snipet,
        });
        setPhoto(snipet.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (photo) {
    return (
      <View>
        <Image style={{width: 400, height: 400}} source={{uri: photo}} />
      </View>
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <RNCamera
          flashMode={'off'}
          autoFocus={'on'}
          type={cameraTurn.position}
          style={{flex: 1, width: '100%'}}
          ref={cam => {
            camera.current = cam;
          }}>
          <TouchableOpacity onPress={() => makePhoto()}>
            <Text>Take photo</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              setCameraTurn((prevState: ICameraPosition) => {
                return {
                  position: prevState.position === 'back' ? 'front' : 'back',
                };
              })
            }>
            <Text style={{backgroundColor: 'white'}}>
              {cameraTurn.position.toUpperCase()}
            </Text>
          </TouchableOpacity>
        </RNCamera>
      </View>
    );
  }
};

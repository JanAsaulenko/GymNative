import React from 'react';
import {Text, Image, View, Button, SafeAreaView, Modal} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ServerContext} from '../../contexts/ServerContext';
import {navigate} from '../../service/NavigationService';
import {Status} from '../../server/firebaseconfig';
export const Photo = props => {
  const {photo} = props.route.params;
  const {api} = React.useContext(ServerContext);
  const [isModalShown, setIsModalShown] = React.useState(false);

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: 'black',
        color: 'white',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {},
      headerRight: () => (
        <TouchableOpacity>
          <Text
            style={{color: '#fff'}}
            onPress={setIsModalShown.bind(null, true)}>
            Remove
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'black', height: '100%', flex: 1}}>
      {isModalShown && (
        <View
          style={{
            position: 'absolute',
            //   backgroundColor: 'black',
            shadowOpacity: 0.8,
            flex: 1,
            height: '100%',
            width: '100%',
            zIndex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'grey',
              width: 200,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Are you sure ?</Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{width: 50}}>
                <Button
                  color="red"
                  title="No"
                  onPress={() => {
                    setIsModalShown(false);
                  }}
                />
              </View>
              <View style={{width: 50}}>
                <Button
                  color="green"
                  title="Yes"
                  onPress={() => {
                    api.removeItem('photos', photo.id).then(_ => {
                      navigate<{id: string; status: Status}>('Dictionary', {
                        id: photo.id,
                        status: 'remove',
                      });
                    });
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      )}

      <Image
        source={{uri: photo.uri}}
        style={{height: '60%', marginTop: 'auto', marginBottom: 'auto'}}
      />
    </SafeAreaView>
  );
};

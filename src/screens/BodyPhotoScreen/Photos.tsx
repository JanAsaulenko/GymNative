import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {PlusButton} from '../../components/PlusButton';
import {navigate, ScreensEnum} from '../../service/NavigationService';
import {IAddPhoto} from '../../server/firebaseconfig';
import {Block} from '../../components/Block';
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

export const Photos = props => {
  const photos =
    props.route.params &&
    props.route.params.photos &&
    props.route.params.photos.length &&
    props.route.params.photos;

  const items =
    photos &&
    photos
      .sort((a: IAddPhoto, b: IAddPhoto) => {
        return a.date! > b.date! ? 1 : -1;
      })
      .reduce(
        (
          prevElement: {[key: string]: Array<undefined | IAddPhoto>},
          nextElement: IAddPhoto,
        ) => {
          const result = prevElement;
          if (result[`${nextElement.date}`]) {
            result[`${nextElement.date}`].push(nextElement);
          } else {
            result[`${nextElement.date}`] = [];
            result[`${nextElement.date}`].push(nextElement);
          }
          return result;
        },
        {},
      );

  return (
    <View style={{flex: 1, margin: 10}}>
      {photos && (
        <View>
          {Object.keys(items).map(el => {
            return (
              <View key={el}>
                {items[el] ? (
                  <Block label={el} handleEvent={console.log}>
                    <View
                      style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                      }}>
                      {items[el].map((item: IAddPhoto) => {
                        return (
                          <Image
                            style={{width: 120, height: 120}}
                            source={{uri: item.uri}}
                          />
                        );
                      })}
                    </View>
                  </Block>
                ) : (
                  <Block label={el} handleEvent={console.log} />
                )}
              </View>
            );
          })}
        </View>
      )}

      <View style={styles.main}>
        <PlusButton
          handlePress={navigate}
          destinationScreen={ScreensEnum.MakePhotoScreen}
        />
      </View>
    </View>
  );
};

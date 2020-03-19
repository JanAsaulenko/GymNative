import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';
import {Screens, navigate, ScreensEnum} from '../../service/NavigationService';
import {ServerContext} from '../../contexts/ServerContext';
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
  const {photos} = props.route.params;

  console.log(
    photos.length &&
      photos.sort((a: IAddPhoto, b: IAddPhoto) => {
        return a.date! > b.date! ? 1 : -1;
      }),
  );
  const items =
    photos.length &&
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
      {photos.length && (
        <View>
          {Object.keys(items).map(el => {
            return (
              <View>
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
        <ButtonAdd
          handlePress={navigate}
          destinationScreen={ScreensEnum.MakePhotoScreen}
        />
      </View>
    </View>
  );
};

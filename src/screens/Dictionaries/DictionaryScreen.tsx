import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {ButtonAdd} from '../../components/ButtonAdd';
import {ScrollView} from 'react-native-gesture-handler';
import {Block} from '../../components/Block';
import {Photos} from '../../components/Photos';
import {navigate, ScreensEnum} from '../../service/NavigationService';
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

export const DictionaryScreen = (props: any) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return <Button title="custom" onPress={() => {}} />; //should be custom button section with button options and butto nwhick opend statistic screen
      },
    });
  }, [props.navigation]);

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <Block
          label={'Trainings'}
          handleEvent={navigate.bind(null, ScreensEnum.Trainings)}
        />
        <Block
          label={'Programs'}
          handleEvent={navigate.bind(null, ScreensEnum.Trainings)}
        />

        <Photos handleScreen={navigate} refreshKey={props.route} />

        <Block
          label={'Notes'}
          handleEvent={navigate.bind(null, ScreensEnum.Notes)}
        />
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
      <View style={styles.main}>
        <ButtonAdd
          handlePress={navigate}
          destinationScreen={ScreensEnum.Training}
        />
      </View>
    </View>
  );
};

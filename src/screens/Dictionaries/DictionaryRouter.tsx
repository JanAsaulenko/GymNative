import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Header} from '../../components/shared/Header';
import {ButtonAdd} from '../../components/ButtonAdd';
import {ScrollView} from 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import {Training} from '../Training/Training';
import {Block} from '../../components/Block';
import {Photos} from '../BodyPhotoScreen/Photos';
import {DictionaryScreen} from '../Dictionaries/DictionaryScreen';
import {getCurrentPageTitle} from '../../utils/routerUtils';
import {MakePhotoScreen} from '../../screens/BodyPhotoScreen/MakePhotoScreen';
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

let Stack = createStackNavigator();
// export const Dictionary = props => {
//   React.useLayoutEffect(() => {
//     props.navigation.setOptions({
//       headerRight: () => {
//         return <Button title="custom" onPress={() => {}} />; //should be custom button section with button options and butto nwhick opend statistic screen
//       },
//     });
//   }, [props.navigation]);

//   server.getTrainings().then(data => {
//     console.log(data);
//   });

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView>
//         <Block
//           label={'Trainings'}
//           handleEvent={props.navigation.navigate.bind(null, 'Trainings')}
//         />
//         <Block label={'Programs'} />
//         <Block
//           label={'Body photo'}
//           handleEvent={props.navigation.navigate.bind(null, 'BodyPhotos')}
//         />
//         <Block label={'Notes'} />

//         <Text style={styles.text}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea commodo consequat. Duis aute irure dolor in
//           reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//           pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//           culpa qui officia deserunt mollit anim id est laborum.
//         </Text>
//       </ScrollView>
//       <View style={styles.main}>
//         <ButtonAdd {...props} destinationScreen={'Training'} />
//       </View>
//     </View>
//   );
// };

export const Trainings = props => {
  return (
    <View style={{flex: 1}}>
      <Text>"sdsd"</Text>
      <View style={styles.main}>
        <ButtonAdd {...props} destinationScreen={'Training'} />
      </View>
    </View>
  );
};

export const DictionaryRouter = props => {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Dictionary"
        key="Dictionary"
        options={{
          header: properties => (
            <Header title={props.route.name} goBack={props.navigation} />
          ),
        }}
        component={DictionaryScreen}
      />
      <Stack.Screen
        name="Trainings"
        key="Trainings"
        options={{
          headerTitle: p => {
            return (
              <View>
                <Text style={{fontSize: 18}}>
                  {getCurrentPageTitle(props.route.state)}
                </Text>
                <Text>{props.route.name}</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Trainings}
      />
      <Stack.Screen
        name="BodyPhotos"
        key="BodyPhoto"
        options={{
          headerTitle: p => {
            return (
              <View>
                <Text style={{fontSize: 18}}>
                  {getCurrentPageTitle(props.route.state)}
                </Text>
                <Text>{props.route.name}</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Photos}
      />
      <Stack.Screen
        name="MakeBodyPhoto"
        key="MakeBodyPhoto"
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={Training}
      />
      <Stack.Screen
        name="Training"
        key="Training"
        options={{
          headerStyle: {
            backgroundColor: 'orange',
          },
        }}
        component={MakePhotoScreen}
      />
    </Stack.Navigator>
  );
};

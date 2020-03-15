import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  ActivityIndicator,
  Button,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {increseData, decreaseData} from '../client/redux/actions/actions';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  controls: {
    fontSize: 50,
    color: 'blue',
  },
});

const Component = (props: any) => {
  let [isLoading, setIsLoading] = React.useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.main}>
        <Text style={styles.controls} onPress={() => props.increment()}>
          +
        </Text>
        <Text style={styles.controls}>{props.counter}</Text>
        <Text style={styles.controls} onPress={() => props.decrement()}>
          -
        </Text>
      </View>
      <Button
        title="Get users"
        onPress={() => {
          setIsLoading(true);
          props.getUsers();
        }}></Button>

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

function mapStateToProps(state: any) {
  return {
    counter: state.counter.counter,
  };
}

function mapDispatchToState(dispatch) {
  return {
    increment: () => {
      dispatch(increseData(1));
    },
    decrement: () => {
      dispatch(decreaseData(1));
    },
    getUsers: () => {
      dispatch({
        type: 'USER_REQUEST',
      });
    },
  };
}

export const Counter = connect(mapStateToProps, mapDispatchToState)(Component);

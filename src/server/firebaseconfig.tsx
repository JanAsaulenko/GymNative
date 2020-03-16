import {View} from 'react-native';
import firebase from 'firebase';
import app from 'firebase/app';

import 'firebase/database';
var firebaseConfig = {
  apiKey: 'AIzaSyBP6q2IPrfEBtdIKwCQB0f9hL0S8ND0lL0',
  authDomain: 'nativegym-1ed04.firebaseapp.com',
  databaseURL: 'https://nativegym-1ed04.firebaseio.com',
  projectId: 'nativegym-1ed04',
  storageBucket: 'nativegym-1ed04.appspot.com',
  messagingSenderId: '511213717247',
  appId: '1:511213717247:web:1e3fab3e1be62c4c512eca',
  measurementId: 'G-K0GD1XZSTR',
};

class Server {
  public db: firebase.database.Database;
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database();
  }

  async getTrainings() {
    let response = await this.db.ref('trainings').once('value');
    let trainings = await response.val();
    return trainings;
  }
}
export const server = new Server();

export const q = () => {
  return <View>sdsds</View>;
};

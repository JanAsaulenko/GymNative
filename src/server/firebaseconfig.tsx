import firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/database';
import {IDateState} from '../screens/BodyPhotoScreen/MakePhotoScreen';
const firebaseConfig = {
  apiKey: 'AIzaSyBP6q2IPrfEBtdIKwCQB0f9hL0S8ND0lL0',
  authDomain: 'nativegym-1ed04.firebaseapp.com',
  databaseURL: 'https://nativegym-1ed04.firebaseio.com',
  projectId: 'nativegym-1ed04',
  storageBucket: 'nativegym-1ed04.appspot.com',
  messagingSenderId: '511213717247',
  appId: '1:511213717247:web:1e3fab3e1be62c4c512eca',
  measurementId: 'G-K0GD1XZSTR',
};

type TablesName = 'training' | 'photos';
type Status = 'add' | 'error' | 'remove' | 'update';

export interface IAddPhoto extends IDateState {
  uri: string;
}

class Server {
  private db: firebase.database.Database;
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.database();
  }

  public getTableItems = async (tableName: TablesName): Promise<[]> => {
    let response = await this.db.ref(tableName).once('value');
    let items = await response.val();
    return items;
  };

  public addTableItem = async (
    tableName: TablesName,
    itemInfo: {[key: string]: string | object | boolean},
  ): Promise<{id?: string; status: Status}> => {
    const newPhotoKey = await this.db
      .ref()
      .child(tableName)
      .push().key;
    if (newPhotoKey === null) {
      return {status: 'error'};
    }

    await this.db.ref(`${tableName}/` + newPhotoKey).set({
      id: newPhotoKey,
      ...itemInfo,
    });
    return {id: newPhotoKey, status: 'add'};
  };

  async removeItem(tableName: TablesName, id: string): Promise<any> {
    return await this.db.ref(`${tableName}/` + id).remove();
  }
}

export const server: Server = new Server();

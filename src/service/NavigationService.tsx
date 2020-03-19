import React from 'react';
import {Status} from '../server/firebaseconfig';
import {StatusBar} from 'react-native';
import {TakePictureResponse} from 'react-native-camera';
export const navigationRef: React.Ref<any> = React.createRef();

//change into class

export type Screens =
  | 'Dictionary'
  | 'Trainings'
  | 'Training'
  | 'BodyPhotos'
  | 'Photo'
  | 'MakePhotoScreen'
  | 'Camera'
  | 'Notes'
  | 'Note';

export enum ScreensEnum {
  Dictionary = 'Dictionary',
  Trainings = 'Trainings',
  Training = 'Training',
  BodyPhotos = 'BodyPhotos',
  MakePhotoScreen = 'MakePhotoScreen',
  Camera = 'Camera',
  Photo = 'Photo',
  Notes = 'Notes',
  Note = 'Note',
}

interface IParams {
  id?: string;
  status?: Status;
  photo?: TakePictureResponse;
}

export const navigate = (name: Screens, params?: IParams) => {
  navigationRef.current.navigate(name, params);
};

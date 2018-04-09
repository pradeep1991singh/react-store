// @flow

import firebase from 'firebase/app'
import 'firebase/database'
import ReduxSagaFirebase from 'redux-saga-firebase'

import { API_KEY, DATABASE_URL, PROJECT_ID } from './api-constants'

export const firebaseApp = firebase.initializeApp({
  apiKey: API_KEY,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
})

export const reduxSagaFirebase = new ReduxSagaFirebase(firebase)

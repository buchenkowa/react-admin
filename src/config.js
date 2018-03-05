import firebase from 'firebase'

export const appName = 'react-admin-606cf'

firebase.initializeApp({
  apiKey: "AIzaSyAp566_28pTdq-DjeiMi_3-7iCf5J6jehY",
  authDomain: `${appName}.firebaseapp.com`,
  databaseURL: `https://${appName}.firebaseio.com`,
  projectId: appName,
  storageBucket: `${appName}.appspot.com`,
  messagingSenderId: "338527030886"
})

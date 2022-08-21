import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCZonQQsOarYf1WjZkifrkmmoQcIng78ns",
    authDomain: "project-websale.firebaseapp.com",
    databaseURL: "https://project-websale-default-rtdb.firebaseio.com",
    projectId: "project-websale",
    storageBucket: "project-websale.appspot.com",
    messagingSenderId: "429753895025",
    appId: "1:429753895025:web:6b136a9ddb487bf79df3d0",
  };

  const app = getApps.length > 0 ? getApp() :initializeApp(firebaseConfig)
  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app,firestore,storage}
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'



const config = {
    apiKey: "AIzaSyBAhAZV1_j3TKVMYCQrvugaJw3Ft8m2BgE",
    authDomain: "crown-db-75003.firebaseapp.com",
    projectId: "crown-db-75003",
    storageBucket: "crown-db-75003.appspot.com",
    messagingSenderId: "943316986983",
    appId: "1:943316986983:web:4cf81671694cbeacdd78c2",
    measurementId: "${config.measurementId}"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = userRef.get();

  if(!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();
  

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log('error creating users', error.message)
  }
}

  return userRef;

};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
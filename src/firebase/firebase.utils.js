import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAVLGRwWIpv7hwLLplVNFiuftI7vYoeoG0",
  authDomain: "online-store-7e0eb.firebaseapp.com",
  databaseURL: "https://online-store-7e0eb.firebaseio.com",
  projectId: "online-store-7e0eb",
  storageBucket: "",
  messagingSenderId: "32295204672",
  appId: "1:32295204672:web:deb8cd0baf1223d7"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error while creating user:", error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;

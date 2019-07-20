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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWIthGoogle = () => auth.signInWithPopup(provider);

export default firebase;

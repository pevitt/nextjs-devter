import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFdKvyrokTu1T6RSspnvtzmBJ8Vrrsy_U",
  authDomain: "devter-7ed49.firebaseapp.com",
  projectId: "devter-7ed49",
  storageBucket: "devter-7ed49.appspot.com",
  messagingSenderId: "99053753565",
  appId: "1:99053753565:web:1f70d30d576a3f81247734",
  measurementId: "G-VB2NXVS35M",
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
      const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
      onChange(normalizedUser);
    }
  });
};

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
  // console.log(user_result);
};

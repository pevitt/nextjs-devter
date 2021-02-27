import firebase from "firebase/app";
import "firebase/auth";
import 'firebase/firestore';

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

const db = firebase.firestore()

export const auth = firebase.auth();

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
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

export const addDevit = ({ avatar, content, userId, userName }) => {
  console.log(avatar + ' ' + content + ' ' + userId + ' ' + userName)
  return db.collection("devits").add({
    avatar,
    content,
    userId,
    userName,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = () => {
  return db
    .collection("devits")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data
        console.log(createdAt)

        const date = new Date(createdAt.seconds * 1000)
        const normalizedCreatedAt = new Intl.DateTimeFormat("es-ES").format(
          date
        )

        return {
          ...data,
          id,
          createdAt: normalizedCreatedAt,
        }
      })
    })
}

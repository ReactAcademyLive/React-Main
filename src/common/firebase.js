import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// firebase.initializeApp({
//   apiKey: 'AIzaSyAKDS8BM9MWwRA2PYgyqd3BpfRE0GyjULk',
//   //authDomain: '### FIREBASE AUTH DOMAIN ###',
//   projectId: 'test-10929',
// });

const firebaseConfig = {
  apiKey: 'AIzaSyCrNd_ZNCrX_Du-9OyD6TmlLDna2ToC2k4',
  authDomain: 'trafic3w-a7cf3.firebaseapp.com',
  databaseURL: 'https://trafic3w-a7cf3.firebaseio.com',
  projectId: 'trafic3w-a7cf3',
  storageBucket: 'trafic3w-a7cf3.appspot.com',
  messagingSenderId: '482549253011',
  appId: '1:482549253011:web:5b190f14606600b0525e66',
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyAKDS8BM9MWwRA2PYgyqd3BpfRE0GyjULk',
//   projectId: 'test-10929',
//   authDomain: 'test-10929.firebaseapp.com',
//   databaseURL: 'https://test-10929.firebaseio.com',
//   ////storageBucket: "test-10929.appspot.com",
//   ////messagingSenderId: "1046705001165",
//   ////appId: "1:1046705001165:web:ab840323e9462440c74f84"
// };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const gProvider = new firebase.auth.GoogleAuthProvider();
const ghProvider = new firebase.auth.GithubAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(gProvider);
};

export const signInWithGithub = () => {
  auth.signInWithPopup(ghProvider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', error);
    }
  }
  return getUserDocument(user.uid);
};

export const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', error);
  }
};

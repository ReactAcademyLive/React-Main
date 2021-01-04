import React, { useState, useEffect, createContext } from 'react';
import {
  auth,
  getUserDocument,
  generateUserDocument,
  signInWithGoogle,
  signInWithGithub,
} from './firebase';

export const AuthContext = createContext({ user: null });

function AuthProvider(props) {
  const [user, setUser] = useState(null);

  function login(type) {
    switch (type) {
      case 'google':
        signInWithGoogle();
        break;
      case 'github':
        signInWithGithub();
        break;
      default:
        break;
    }
  }

  function logoff() {
    auth.signOut();
  }

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth == null) {
        setUser(null);
        return;
      }

      const doc = await getUserDocument(userAuth.uid);
      if (doc) {
        setUser({
          ...userAuth,
          displayName: userAuth.displayName ?? doc.displayName,
          photoURL: userAuth.photoURL ?? doc.photoURL,
        });
      }
    });
  }, []);

  // async function refresh() {
  //   const doc = await getUserDocument(user.uid);
  //   setUser({
  //     ...user,
  //     displayName: user.displayName ?? doc.displayName,
  //     photoURL: user.photoURL ?? doc.photoURL,
  //     refresh: refreshM,
  //   });
  // }

  return (
    <AuthContext.Provider
      value={{ user, login, logoff, generateUserDocument, auth }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

import React, { useState, useEffect, createContext } from 'react';
import {
  auth,
  getUserDocument,
  generateUserDocument,
  signInWithGoogle,
  signInWithGithub,
} from './firebase';

export const AuthContext = createContext({ user: null });

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function login(type) {
    switch (type) {
      case 'google':
        return signInWithGoogle();

      case 'github':
        return signInWithGithub();

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
      await refreshDoc(userAuth);
    });
  }, []);

  async function refreshDoc(user) {
    const doc = await getUserDocument(user.uid);
    setUser({
      ...user,
      displayName: user.displayName ?? doc?.displayName,
      photoURL: user.photoURL ?? doc?.photoURL,
    });
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logoff, generateUserDocument, auth, refreshDoc }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

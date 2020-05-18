import React, { useState, useEffect, createContext } from 'react';
import { auth, getUserDocument } from './firebase';

export const UserContext = createContext({ user: null });

function UserProvider(props) {
  const [user, setUser] = useState(null);

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
  });

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
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}
export default UserProvider;

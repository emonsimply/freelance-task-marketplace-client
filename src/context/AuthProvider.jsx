import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../components/firebase.init";

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const signOutUser = () => {
    return signOut(auth);
  };

  return (
    <UserContext.Provider value={{ user, setUser, signOutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthProvider;

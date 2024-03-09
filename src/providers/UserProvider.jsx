import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { auth } from "../firebase/config.js";
import { UserContext } from "../context/user";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user !== null ? "User logged in" : "User logged out");
      setUser(user);
    });
  }, []);
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

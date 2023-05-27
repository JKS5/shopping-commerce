import React, { createContext, useEffect, useState, useContext } from "react";
import { login, logout, onUserStateChange } from "../api/firebase";
interface Props {
  children: any;
}
const AuthContext = createContext<any>(null);
export function AuthContextProvider({ children }: Props) {
  const [user, setUser] = useState<any>();
  useEffect(() => {
    onUserStateChange((user: any) => {
      // console.log(user);
      setUser(user);
    });
  }, []);
  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, login: login, logout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuthContext() {
  return useContext(AuthContext);
}

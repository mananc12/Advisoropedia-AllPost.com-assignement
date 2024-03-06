import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const storeTokenInLS = (userToken) => {
    setToken(userToken);
    return localStorage.setItem("token", userToken);
  };

  let isLoggedIn = !!token;

  //logout logic
  const logoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

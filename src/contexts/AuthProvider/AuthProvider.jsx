import React, { useContext, useReducer } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const initialstate = {
  user: null,
  isAuthenticated: false,
};

function authReducer(state, { type, payload }) {
  switch (type) {
    case "login":
      return {
        user: payload,
        isAuthenticated: true,
      };
    case "logout":
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      throw new Error("unlknown action");
  }
}

const FAKE_USER = {
  user: "amin",
  email: "test@gmail.com",
  password: "1234",
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    authReducer,
    initialstate
  );

  function login(password, email) {
    if (FAKE_USER.email === email && FAKE_USER.password === password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);

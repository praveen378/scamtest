import React, { createContext, useState, useEffect } from "react";
import Authservice from "../auth/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // useEffect(() => {
  //   const fetchCurrentUser = async () => {
  //     try {
  //       const user = await Authservice.getCurrentUser();
  //       if (user) {
  //         setIsLoggedIn(true);
  //         setCurrentUser(user);
  //       }
  //     } catch (error) {
  //       if (error.message.includes("missing scope (account)")) {
  //         console.warn("No session available. User is not logged in.");
  //       } else {
  //         console.error("Error fetching user:", error);
  //       }
  //       setIsLoggedIn(false);
  //       setCurrentUser(null);
  //     }
  //   };
  //   fetchCurrentUser();
  // }, []);

  const login = async (email, password) => {
    try {
      const session = await Authservice.login({ email, password });
      if (session) {
        const user = await Authservice.getCurrentUser();
        setIsLoggedIn(true);
        setCurrentUser(user);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const signup = async (userData) => {
    try {
      const newAccount = await Authservice.CreateAccount({
        userData,
      });
      if (newAccount) {
        const user = await Authservice.getCurrentUser();
        setIsLoggedIn(true);
        setCurrentUser(user);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const logout = async () => {
    try {
      await Authservice.logout();
      setIsLoggedIn(false);
      setCurrentUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, currentUser, login, signup, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

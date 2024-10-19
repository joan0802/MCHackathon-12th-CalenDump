'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { setCookie, getCookie, deleteCookie } from 'cookies-next';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const token = getCookie('auth-token');
    if (token && !user) {
      // Validate token and set user
      setUser({ token });
    }
  }, [user]);

  const login = (token) => {
    setCookie('auth-token', token, { maxAge: 5 * 60 * 60 }); // 5 hrs
    setUser({ token });
  };

  const logout = () => {
    deleteCookie('auth-token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
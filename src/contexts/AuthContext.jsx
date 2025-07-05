import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, role) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          const userData = { email, role: role || 'student', name: 'Test User' };
          localStorage.setItem('user', JSON.stringify(userData));
          setUser(userData);
          setLoading(false);
          resolve(userData);
        } else {
          setLoading(false);
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  };

  const signup = (email, password, role, referralCode) => {
    return new Promise((resolve, reject) => {
      setLoading(true);
      setTimeout(() => {
        const userData = { email, role, name: 'New User' };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        setLoading(false);
        console.log('Signup with referral code:', referralCode);
        resolve(userData);
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    role: user?.role,
    loading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
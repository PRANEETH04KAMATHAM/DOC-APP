/** AFTER WAD LAB */

import React, { createContext, useState, useEffect, useContext } from 'react';
import { getUserDetails } from './api'; // You'll need to create this API function

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in on component mount
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    if (token && userId && role) {
      setUser({ userId, role, email, name });
    }
  }, []);

  const login = async (userData) => {
    console.log('Login data:', JSON.stringify(userData, null, 2));
    const userInfo = {
      userId: userData.userId,
      email: userData.email,
      role: userData.role,
      name: userData.name
    };
    setUser(userInfo);
    localStorage.setItem('token', userData.token);
    localStorage.setItem('userId', userData.userId);
    localStorage.setItem('role', userData.role);
    localStorage.setItem('email', userData.email);
    localStorage.setItem('name', userData.name);

    try {
      console.log('Fetching user details for userId:', userData.userId);
      const userDetails = await getUserDetails(userData.userId);
      console.log('User details received:', JSON.stringify(userDetails, null, 2));
      const updatedUserInfo = { 
        ...userInfo, 
        name: userDetails.name || userInfo.name,
        email: userDetails.email || userInfo.email
      };
      console.log('Updated user info:', JSON.stringify(updatedUserInfo, null, 2));
      setUser(updatedUserInfo);
      localStorage.setItem('name', updatedUserInfo.name);
      localStorage.setItem('email', updatedUserInfo.email);
    } catch (error) {
      console.error('Error fetching user details:', error);
      // If fetching user details fails, use the data from the login response
      setUser(userInfo);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

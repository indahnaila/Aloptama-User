import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, { onSuccess, onFailure }) => {
          try {
            const res = await auth().signInWithEmailAndPassword(
              email,
              password,
            );
            setUser(res);
            console.log('login success:', res);
            onSuccess(res);
          } catch (e) {
            console.log(e);
            onFailure(e);
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async ({ onSuccess, onFailure }) => {
          try {
            await auth().signOut();
            onSuccess();
          } catch (e) {
            onFailure(e);
            console.error(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

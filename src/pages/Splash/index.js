import React, { useEffect, useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { LogoBig } from '../../assets';
import auth from '@react-native-firebase/auth';
import AuthContext from '../../router/AuthContext';

const Splash = ({ navigation }) => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged(user => {
        if (user) {
          setUser(user);
          console.log('user:', user);
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      });
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.content}>
      <LogoBig />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#334752',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
});

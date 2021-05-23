import React from 'react';
import {LogBox, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  LogBox.ignoreLogs(['Setting a timer'])
  return (
    <>
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    <FlashMessage position='top'/>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});

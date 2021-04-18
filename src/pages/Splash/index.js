import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoBig} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
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
  },
});

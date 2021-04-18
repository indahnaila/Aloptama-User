import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoBig} from '../../assets';
import {Button} from '../../components';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <LogoBig />
        </View>
        <Text style={styles.text}>Username</Text>
        <View style={{borderBottomWidth: 1, borderColor: '#7BE2E1'}} />
        <Text style={styles.text2}>Password</Text>
        <View style={{borderBottomWidth: 1, borderColor: '#7BE2E1'}} />
        <View style={{marginBottom: 30}} />
        <Button title="Masuk" onPress={() => navigation.replace('MainApp')} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#334752',
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    marginTop: 60,
    marginBottom: 40,
    color: '#7BE2E1',
  },
  text2: {
    marginTop: 20,
    marginBottom: 40,
    color: '#7BE2E1',
  },
  logo: {
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 60,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoNamaBMKG} from '../../../assets';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text2}>Senin, 23 September 2021</Text>
      </View>
      <LogoNamaBMKG />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: '#334752',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 12,
  },
  content: {
    flex: 1,
  },
});

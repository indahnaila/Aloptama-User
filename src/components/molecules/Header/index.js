import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LogoNamaBMKG } from '../../../assets';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <LogoNamaBMKG />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    backgroundColor: '#334752',
    flexDirection: 'row',
    alignItems: 'center',
    height: height / 10,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 10,
  },
});

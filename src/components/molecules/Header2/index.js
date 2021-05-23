import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {LogoNamaBMKG} from '../../../assets';
import { Button } from '../../atoms';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Header2 = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type='icon-only' icon='icon-back' onPress={onPress}/>
      <Text style={styles.text}>{title}</Text>
      <LogoNamaBMKG />
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: '#334752',
    flexDirection: 'row',
    alignItems: 'center',
    height: height/10
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

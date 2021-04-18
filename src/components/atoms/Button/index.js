import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconOnly from './IconOnly';

const Button = ({onPress, title, type, icon}) => {
    if(type === 'icon-only'){
        return <IconOnly icon={icon} onPress={onPress}/>
    }
  return (
    <TouchableOpacity style={styles.content(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
const styles = StyleSheet.create({
  content: type => ({
    backgroundColor: type === 'secondary' ? '#018A83' : '#7BE2E1',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  }),
  text: type => ({
    color: type === 'secondary' ? 'white' : '#334752',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  }),
});

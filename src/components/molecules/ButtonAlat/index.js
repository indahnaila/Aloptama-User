import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ButtonAlat = ({title, foto, onPress}) => {
  return (
    <TouchableOpacity style={styles.kolom} onPress={onPress}>
      <Image source={foto} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAlat;

const styles = StyleSheet.create({
  kolom: {
    backgroundColor: '#D6D5D5',
    paddingHorizontal: 13,
    width: 160,
    height: 80,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 17,
    marginLeft: 11,
  },
});

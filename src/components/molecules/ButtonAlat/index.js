import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const ButtonAlat = ({title, foto, onPress}) => {
  // const [dimensions, setDimensions] = useState({ window, screen });

  // const onChange = ({ window, screen }) => {
  //   setDimensions({ window, screen });
  // };

  // useEffect(() => {
  //   Dimensions.addEventListener("change", onChange);
  //   return () => {
  //     Dimensions.removeEventListener("change", onChange);
  //   };
  // });
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
    width: width/2.5,
    height: height/9,
    paddingVertical: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 13,
    marginLeft: 11,
  },
});

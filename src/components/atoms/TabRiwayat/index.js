import React from 'react';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const TabRiwayat = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.conten} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TabRiwayat;

const styles = StyleSheet.create({
  conten: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    backgroundColor: '#018A83',
    color: 'white',
    height: height / 4 / 5,
    width: width / 4.02,
    fontSize: 14,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 6,
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconCamera} from '../../../assets';

const ListIcon = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>Foto</Text>
      <Text style={{fontSize: 16, marginRight: 10}}>:</Text>
      <View style={styles.input}  />
      <IconCamera />
    </View>
  );
};

export default ListIcon;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 30,
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    width: 60,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    display: 'flex',
    height: 20,
    paddingVertical: 1,
    fontSize: 16,
  },
});

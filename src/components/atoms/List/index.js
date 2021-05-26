import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ListIcon from './ListIcon';

const List = ({title, placeholder, type, value, onChangeText, onPress}) => {
  if (type === 'listIcon') {
    return <ListIcon />;
  }
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{title}</Text>
      <Text style={{fontSize: 14, marginRight: 10}}>:</Text>
      <TextInput
        style={styles.input(type)}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    width: 60,
  },
  input: type => ({
    borderBottomWidth: 1,
    flex: 1,
    display: 'flex',
    height: 20,
    paddingVertical: 1,
    fontSize: 14,
    borderColor: 'gray',
    textTransform: type === 'secondary' ? 'capitalize' : 'none' ,
  }),
});

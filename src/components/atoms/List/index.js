import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import ListIcon from './ListIcon';

const List = ({title, placeholder, type, value, onChangeText, onPress}) => {
  if (type === 'listIcon') {
    return <ListIcon />;
  }
  return (
    <View style={styles.content(type)}>
      <Text style={styles.text}>{title}</Text>
      <Text style={{fontSize: 14, marginRight: 10}}>:</Text>
      <TextInput
        style={styles.input}
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
  content: type => ({
    flexDirection: 'row',
    marginBottom: type === 'secondary' ? 1 : 20,
  }),
  text: {
    fontSize: 14,
    width: 60,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    display: 'flex',
    height: 20,
    paddingVertical: 1,
    fontSize: 14,
    borderColor: 'gray',
  },
});

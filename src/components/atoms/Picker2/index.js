import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

const Picker2 = ({pickerValue}) => {
  const [kondisi, setKondisi] = React.useState('');

  return (
    <View style={styles.page}>
      <Text style={styles.text}>Kondisi</Text>
      <Text style={{fontSize: 16}}>:</Text>
      <View style={styles.bisa}>
        <DropDownPicker
          items={[
            {label: 'ON', value: 'ON'},
            {label: 'OFF', value: 'OFF'},
          ]}
          value={kondisi}
          placeholder="(select an item)"
          placeholderStyle={{color: 'gray'}}
          containerStyle={{height: 40}}
          style={{backgroundColor: '#E8E8E8', fontSize: 16}}
          itemStyle={{justifyContent: 'flex-start'}}
          setValue={setKondisi}
          dropDownStyle={{
            backgroundColor: '#E8E8E8',
            fontSize: 14,
            border: 'none',
          }}
          onChangeValue={value => pickerValue(value)}
        />
        <View style={{borderBottomWidth: 1, marginLeft: 8, marginBottom: 20}} />
      </View>
    </View>
  );
};

export default Picker2;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    width: 60,
  },
  bisa: {
    flex: 1,
  },
});

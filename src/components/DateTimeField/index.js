import React, {useState} from 'react';
import moment from 'moment';
import {StyleSheet, Text, TextInput, View, Platform} from 'react-native';
import ListIcon from '../atoms/List/ListIcon';
import DateTimePicker from '@react-native-community/datetimepicker';

const DateTimeField = ({title, placeholder, type, value, onChangeDate}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(Platform.OS === 'ios');
    onChangeDate(moment(currentDate).format('DD/MM/YYYY'));
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

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
        onPressIn={() => {
          if (mode === 'date') {
            showDatepicker();
          } else {
            showTimepicker();
          }
        }}
      />
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateTimeField;

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
    textTransform: type === 'secondary' ? 'capitalize' : 'none',
  }),
});

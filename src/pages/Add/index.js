import React, {useEffect, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Button, Header, List, PickerList} from '../../components';
import {generateFullDate, getData, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Add = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [dbPhoto, setDbPhoto] = useState(null);
  const [form, setForm] = useForm({
    waktu: '',
    merk: '',
    tahun: '',
    lokasi: '',
    catatan: '',
    alat: '',
    kondisi: '',
    photo: '',
  });

  useEffect(() => {
    getImageData();
  }, [dbPhoto]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const getImageData = async () => {
    try {
      const value = await AsyncStorage.getItem('@DBphoto');
      if (value !== null) {
        // value previously stored
        setDbPhoto(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  const onContinue = () => {
    setForm('reset');
    Alert.alert('Sukses!', 'Laporan Anda berhasil terkirim.', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    Fire.auth().onAuthStateChanged(user => {
      const data = {
        ...form,
        photo: dbPhoto,
        uid: user.uid,
      };
      const dateTime = generateFullDate();
      const email = Fire.auth().currentUser.email
      Fire.database().ref(`Admin/${user.uid}`).update({[form.alat.toUpperCase()]: form.kondisi, Tanggal: dateTime, Email: email})
      Fire.database().ref(`Laporan/${user.uid}/${form.alat}`).push(data);

      getData('user').then(res => {
        console.log('data', res);
      });

      storeData('user', data);
      navigation.navigate('Notif');
    });
  };

  return (
    <View style={styles.lola}>
      <Header title="Pelaporan Alat" />
      <ScrollView>
        <View style={styles.kiki}>
          {/* <PickerList pickerValue={value => console.log('value dari picker ==> ', value)} /> */}
          <List
            title="Alat"
            type="secondary"
            placeholder="(type here)"
            value={form.alat}
            onChangeText={value => setForm('alat', value)}
          />
          <List
            title="Waktu"
            placeholder="(DD/MM/YYYY)"
            value={form.waktu}
            onChangeText={value => setForm('waktu', value)}
          />
          {/* <View style={{flexDirection: 'row', marginBottom: 20}}>
            <Text style={{fontSize: 14, width: 60}}>Waktu</Text>
            <Text style={{fontSize: 14, marginRight: 10}}>:</Text>
            <TouchableOpacity style={{flex: 1}} onPress={showDatepicker}>
              <Text style={styles.date}>{String(date)}</Text>
            </TouchableOpacity>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )} */}
          <List
            title="Lokasi"
            placeholder="(type here)"
            value={form.lokasi}
            onChangeText={value => setForm('lokasi', value)}
          />
          <List
            title="Merk"
            placeholder="(type here)"
            value={form.merk}
            onChangeText={value => setForm('merk', value)}
          />
          <List
            title="Tahun"
            placeholder="(type here)"
            value={form.tahun}
            onChangeText={value => setForm('tahun', value)}
          />
          <List
            title="Kondisi"
            type="secondary"
            placeholder="(ON/OFF)"
            value={form.kondisi}
            onChangeText={value => setForm('kondisi', value)}
          />
          <View style={styles.catatan}>
            <Text style={{fontSize: 14, width: 60}}>Catatan</Text>
            <Text style={{fontSize: 14, marginRight: 10}}>:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              multiline={true}
              value={form.catatan}
              onChangeText={value => setForm('catatan', value)}
            />
          </View>
          <List title="Foto" type="listIcon" />
          <View style={{marginBottom: 50}} />
          <Button title="Kirim" type="secondary" onPress={onContinue} />
        </View>
        <View style={{marginBottom: 10}} />
      </ScrollView>
    </View>
  );
};

export default Add;

const styles = StyleSheet.create({
  lola: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
  kiki: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  catatan: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  input: {
    flex: 1,
    display: 'flex',
    height: 120,
    padding: 10,
    fontSize: 14,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    textAlignVertical: 'top',
  },
  date: {
    borderBottomWidth: 1,
    flex: 1,
    borderBottomColor: 'gray',
    height: 20,
  },
});

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
import {Button, Header, List, Picker2, PickerList} from '../../components';
import {getData, storeData, useForm} from '../../utils';
import {Fire} from '../../config';
import DateTimePicker from '@react-native-community/datetimepicker';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Add = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [form, setForm] = useForm({
    waktu: '',
    merk: '',
    tahun: '',
    lokasi: '',
    catatan: '',
    alat: '',
    kondisi: '',
    uid: '',
  });
  // const [kirim, setKirim] = useState('')
  // const [user, setUser] = useState({})
  // useEffect(() => {
  //   getData('user').then(res => {
  //     setUser(res)
  //   })
  // }, [])

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

  // const sendReport = () => {
  //   const today = new Date();
  //   const hour = today.getHours();
  //   const minutes = today.getMinutes();
  //   const year = today.getFullYear();
  //   const month = today.getMonth() +1;
  //   const date = today.getDate();
  //   const data = {
  //     sendBy: user.uid,
  //     date: new Date().getTime(),
  //     time: `${hour}:${minutes} ${hour > 12 ? 'PM' : 'AM'}`,
  //     alat: kirim.alat,
  //     merk: kirim.merk,
  //     tahun: kirim.tahun,
  //     lokasi: kirim.lokasi,
  //     kondisi: kirim.kondisi,
  //     catatan: kirim.catatan,
  //     foto: kirim.foto,
  //   }
  //   setKirim('')
  //   Fire.database()
  //   .ref(`laporan/${user.uid}/${year}-${month}-${date}`)
  //   .push(data)
  //   .then(() => {
  //     setKirim('');
  //   })
  //   .catch(err => {
  //     showError(err.message);
  //   })
  // }

  const onContinue = () => {
    setForm('reset');
    Alert.alert('Sukses!', 'Laporan Anda berhasil terkirim.', [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
    
    const data = {
      waktu: form.waktu,
      merk: form.merk,
      tahun: form.tahun,
      lokasi: form.lokasi,
      catatan: form.catatan,
      alat: form.alat,
    };

    Fire.database()
      .ref('aws/' + '/')
      .set(data);
      
    getData('user').then(res => {
      console.log('data', res)
    })

    storeData('user', data);
    navigation.navigate('HasilLaporan', data);
  };
  
  return (
    <View style={styles.lola}>
      <Header title="Pelaporan Alat" />
      <ScrollView>
        <View style={styles.kiki}>
          <PickerList />
          <View style={{flexDirection: 'row', marginBottom: 20}}>
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
          )}
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
            type="secondary"
            value={form.tahun}
            onChangeText={value => setForm('tahun', value)}
          />
          <Picker2 />
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
          <Button title="Kirim" type="secondary" onPress={onContinue}/>
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

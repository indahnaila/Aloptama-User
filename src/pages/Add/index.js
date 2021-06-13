import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Header, List} from '../../components';
import {useForm} from '../../utils';
import {Fire} from '../../config';
import DateTimePicker from '../../components/DateTimeField';
import DropdownField from '../../components/DropdownField';
import ImagePicker from '../../components/ImagePicker';

const Add = () => {
  const [photo, setPhoto] = useState();
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

  const handleUpload = async () => {
    var storage = Fire.storage();
    var storageRef = storage.ref();
    var status = await storageRef
      .child('photos/' + photo.fileName)
      .putFile(photo.uri);
    if (status.state === 'success') {
      console.log('success', status);
    }
  };

  const onContinue = () => {
    handleUpload();
    // setForm('reset');
    // Alert.alert('Sukses!', 'Laporan Anda berhasil terkirim.', [
    //   {text: 'OK', onPress: () => console.log('OK Pressed')},
    // ]);

    // Fire.auth().onAuthStateChanged(user => {
    //   const data = {
    //     ...form,
    //     photo: dbPhoto,
    //     uid: user.uid,
    //   };
    //   const dateTime = generateFullDate();
    //   const email = Fire.auth().currentUser.email;
    //   Fire.database()
    //     .ref(`Admin/${user.uid}`)
    //     .update({
    //       [form.alat.toUpperCase()]: form.kondisi,
    //       Tanggal: dateTime,
    //       Email: email,
    //     });
    //   Fire.database().ref(`Laporan/${user.uid}/${form.alat}`).push(data);

    //   getData('user').then(res => {
    //     console.log('data', res);
    //   });

    //   storeData('user', data);
    //   navigation.navigate('Notif');
    // });
  };

  return (
    <View style={styles.lola}>
      <Header title="Pelaporan Alat" />
      <ScrollView>
        <View style={styles.kiki}>
          <DropdownField
            label="Alat"
            placeholder="Pilih"
            items={[
              {value: 'AWS', label: 'AWS'},
              {value: 'AWOS', label: 'AWOS'},
              {value: 'AAWS', label: 'AAWS'},
              {value: 'Cellometer', label: 'Cellometer'},
              {value: 'Radar', label: 'Radar'},
              {value: 'Seiscomp3', label: 'Seiscomp3'},
            ]}
            onChangeValue={value => {
              setForm('alat', value);
            }}
          />
          <DateTimePicker
            title="Waktu"
            placeholder="(DD/MM/YYYY)"
            value={form.waktu}
            onChangeDate={value => {
              console.log('ajsda', value);
              setForm('waktu', value);
            }}
          />
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
          <DropdownField
            label="Kondisi"
            items={[
              {value: 'on', label: 'ON'},
              {value: 'off', label: 'OFF'},
            ]}
            onChangeValue={value => {
              setForm('kondisi', value);
            }}
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
          <ImagePicker onChangeValue={value => setPhoto(value)} />
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

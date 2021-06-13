import React, { useEffect, useState, useContext } from 'react';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import { Button, Header, List } from '../../components';
import { useForm } from '../../utils';
import DateTimePicker from '../../components/DateTimeField';
import DropdownField from '../../components/DropdownField';
import ImagePicker from '../../components/ImagePicker';
import { showMessage } from 'react-native-flash-message';
import AuthContext from '../../router/AuthContext';
import { generateFullDate } from '../../utils';

const Add = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
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

  const handleUpload = async ref => {
    try {
      var reference = storage().ref(ref);
      var status = await reference.putFile(photo.uri);
      console.log('status', status);
      if (status.state === 'success') {
        return true;
      } else {
        throw new Error();
      }
    } catch (e) {
      return false;
    }
  };

  const onContinue = async () => {
    setLoading(true);
    const ref = 'photos/' + photo.fileName;
    console.log('ref', ref);
    const uploadStatus = await handleUpload(ref);
    console.log('upload', uploadStatus);
    if (uploadStatus) {
      const dateTime = generateFullDate();
      const email = user.email;
      setForm('photo', ref);
      database().ref(`Laporan/${user.uid}/${form.alat}`).set(form);
      database()
        .ref(`Admin/${user.uid}`)
        .update({
          [form.alat.toUpperCase()]: form.kondisi,
          Tanggal: dateTime,
          Email: email,
        });
    } else {
      showMessage({
        message: 'Batal memilih gambar',
        type: 'default',
        backgroundColor: 'red',
        color: 'white',
      });
    }
    setLoading(false);
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
              { value: 'AWS', label: 'AWS' },
              { value: 'AWOS', label: 'AWOS' },
              { value: 'AAWS', label: 'AAWS' },
              { value: 'Cellometer', label: 'Cellometer' },
              { value: 'Radar', label: 'Radar' },
              { value: 'Seiscomp3', label: 'Seiscomp3' },
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
              { value: 'on', label: 'ON' },
              { value: 'off', label: 'OFF' },
            ]}
            onChangeValue={value => {
              setForm('kondisi', value);
            }}
          />
          <View style={styles.catatan}>
            <Text style={{ fontSize: 14, width: 60 }}>Catatan</Text>
            <Text style={{ fontSize: 14, marginRight: 10 }}>:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              multiline={true}
              value={form.catatan}
              onChangeText={value => setForm('catatan', value)}
            />
          </View>
          <ImagePicker onChangeValue={value => setPhoto(value)} />
          <View style={{ marginBottom: 50 }} />
          {loading ? (
            <ActivityIndicator />
          ) : (
            <Button title="Kirim" type="secondary" onPress={onContinue} />
          )}
        </View>
        <View style={{ marginBottom: 10 }} />
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

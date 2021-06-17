import React, { useState, useContext } from 'react';
import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';
import moment from 'moment';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ActivityIndicator,
} from 'react-native';
import { Button, Header, List } from '../../components';
import { useForm, generateFullDate } from '../../utils';
import DateTimePicker from '../../components/DateTimeField';
import DropdownField from '../../components/DropdownField';
import ImagePicker from '../../components/ImagePicker';
import { showMessage } from 'react-native-flash-message';
import AuthContext from '../../router/AuthContext';

const Add = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState();
  const [selectedDate, setSelectedDate] = useState();
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

  const uploadPhoto = async ref => {
    try {
      var reference = storage().ref(ref);
      var status = await reference.putFile(photo.uri);
      if (status.state === 'success') {
        return true;
      } else {
        throw new Error();
      }
    } catch (e) {
      return false;
    }
  };

  const updateReport = async photoRef => {
    console.log('form ref', photoRef);
    console.log('form add', form);
    await database()
      .ref(
        `Laporan/${user.uid}/${form.alat}/${moment(selectedDate).format(
          'YYYY-MM-DD',
        )}`,
      )
      .set({
        ...form,
        photo: photoRef,
      });
  };

  const updateLatest = async () => {
    await database()
      .ref(`Admin/${user.uid}`)
      .update({
        [form.alat.toUpperCase()]: form.kondisi,
        Tanggal: generateFullDate(),
        Email: user.email,
      });
  };

  const onContinue = async () => {
    setLoading(true);
    try {
      if (!form.waktu) {
        throw new Error('Waktu harus dipilih');
      }
      if (photo) {
        const ref = 'photos/' + photo.fileName;
        const uploadStatus = await uploadPhoto(ref);
        console.log('upload', uploadStatus);
        if (uploadStatus) {
          console.log('ref', ref);
          await updateReport(ref);
          await updateLatest();
          setForm('reset');
          setPhoto(null);
        } else {
          throw new Error();
        }
      } else {
        await updateReport();
        await updateLatest();
        setForm('reset');
        setPhoto(null);
      }
      showMessage({
        message: 'Berhasil memperbarui data',
        type: 'bottom',
        backgroundColor: 'primary',
        color: 'white',
      });
    } catch (e) {
      showMessage({
        message: `Gagal memperbarui data \n${e}`,
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
            defaultValue={form.alat}
            extraOptions={[{ value: '', label: 'Pilih' }]}
            items={[
              { value: 'AWS', label: 'AWS' },
              { value: 'AWOS', label: 'AWOS' },
              { value: 'AAWS', label: 'AAWS' },
              { value: 'Cellometer', label: 'Cellometer' },
              { value: 'Radar', label: 'Radar' },
              { value: 'Seiscomp3', label: 'Seiscomp3' },
            ]}
            onChangeValue={value => setForm('alat', value)}
          />
          <DateTimePicker
            title="Waktu"
            format="YYYY-MM-DD"
            mode="date"
            value={form.waktu}
            onChangeDate={date => {
              setForm('waktu', Math.floor(date));
              setSelectedDate(date);
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
            extraOptions={[{ value: '', label: 'Pilih' }]}
            onChangeValue={value => setForm('kondisi', value)}
            defaultValue={form.kondisi}
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
          <ImagePicker onChangeValue={value => setPhoto(value)} value={photo} />
          <View style={{ marginBottom: 50 }} />
          {loading ? (
            <ActivityIndicator color="primary" />
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

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconDelete, IconEdit} from '../../../assets';
import {ListRiwayat} from '../../atoms';

const HasilNotif = () => {
  return (
    <View style={styles.content}>
      <ListRiwayat kategori="Waktu" alat="23 September 2020" />
      <ListRiwayat kategori="Alat" alat="AWS" />
      <ListRiwayat kategori="Merk" alat="Vaisala" />
      <ListRiwayat kategori="Tahun" alat="2010" />
      <ListRiwayat kategori="Kondisi" alat="ON" />
      <ListRiwayat kategori="Keterangan" alat="Sensor bekerja dengan baik" />
      <View style={styles.wrap}>
        <TouchableOpacity style={styles.button}>
          <IconEdit />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <IconDelete />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HasilNotif;

const styles = StyleSheet.create({
  content: {
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
  text1: {
    width: 50,
    fontSize: 16,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#018A83',
    marginRight: 8,
    padding: 8,
    width: 30,
    borderRadius: 5,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

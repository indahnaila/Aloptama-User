import React from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Header, List, Picker2, PickerList} from '../../components';

const Add = () => {

  return (
    <View style={styles.lola}>
      <Header title="Pelaporan Alat" />
      <ScrollView>
        <View style={styles.kiki}>
          <PickerList />
          <List title="Waktu" placeholder="(type here)" />
          <List title="Lokasi" placeholder="(type here)" />
          <List title="Merk" placeholder="(type here)" />
          <List title="Tahun" placeholder="(type here)" type="secondary" />
          <Picker2 />
          <View style={styles.catatan}>
            <Text style={{fontSize: 16, width: 60}}>Catatan</Text>
            <Text style={{fontSize: 16, marginRight: 10}}>:</Text>
            <TextInput
              style={styles.input}
              underlineColorAndroid="transparent"
              multiline={true}
            />
          </View>
          <List title="Foto" type="listIcon"/>
          <View style={{marginBottom: 20}} />
          <Button title="Kirim" type="secondary" />
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
    marginHorizontal: 30,
    marginVertical: 20,
  },
  catatan: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  input: {
    flex: 1,
    display: 'flex',
    height: 150,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    textAlignVertical: 'top',
    fontSize: 16,
  },
});

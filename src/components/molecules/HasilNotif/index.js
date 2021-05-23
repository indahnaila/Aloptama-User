import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconDelete, IconEdit} from '../../../assets';

const HasilNotif = ({route, navigation}) => {
  const { waktu, merk, tahun, lokasi, catatan } = route.params;
  return (
    <View style={styles.content}>
      <View style={styles.content1}>
        <Text style={styles.text3}>Alat</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>AWS</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Waktu</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>waktu</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Lokasi</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>lokasi</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Merk</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>merk</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Tahun</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>tahun</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Kondisi</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>ON</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Catatan</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>catatan</Text>
      </View>
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
    marginVertical: 5,
    // backgroundColor: '#E8E8E8'
  },
  // text: {
  //   fontSize: 14,
  //   marginRight: 10,
  // },
  // text1: {
  //   width: 50,
  //   fontSize: 14,
  //   marginRight: 10,
  // },
  button: {
    backgroundColor: '#018A83',
    marginRight: 8,
    padding: 8,
    width: 30,
    borderRadius: 5,
    marginTop: 5,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  content1: {
    flexDirection: 'row',
    marginVertical: 3,
    marginHorizontal: 10,
  },
  text3: {
    fontSize: 14,
    marginRight: 10,
    width: 50,
  },
  text4: {
    marginRight: 10,
    fontSize: 14,
    
  },
});

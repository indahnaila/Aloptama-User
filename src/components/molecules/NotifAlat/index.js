import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {IconSukses} from '../../../assets';

const NotifAlat = ({navigation, onPress}) => {
  return (
    <TouchableOpacity style={styles.page} onPress={onPress}>
      <View style={styles.content}>
        <Image source={IconSukses} />
        <View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.text1}>Laporan berhasil terkirim!</Text>
            <Text style={{fontSize: 12}}>2 Juni 2021</Text>
          </View>
          <Text style={styles.text}>
            Pelaporan alat yang anda isi telah terkirim. Klik untuk melihat
            detail.
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotifAlat;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    maxWidth: 300,
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 12,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 10,
  },
  page: {
    backgroundColor: '#F5F5F5',
    height: 80,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
});

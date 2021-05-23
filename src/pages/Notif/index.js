import React from 'react';
import {StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, ScrollView} from 'react-native';
import {Header, NotifAlat} from '../../components';
import {IconSukses} from '../../assets'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Notif = ({navigation, onPress}) => {
  return (
    <View style={styles.page}>
      <Header title="Notifikasi" />
      <ScrollView>
      {/* <TouchableOpacity style={styles.page1} onPress={() => navigation.navigate('HasilLaporan')}>
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
    </TouchableOpacity> */}
        <NotifAlat onPress={() => navigation.navigate('HasilLaporan')}/>
        <NotifAlat />
        {/* <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat /> */}
      </ScrollView>
    </View>
  );
};

export default Notif;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
  text: {
    marginHorizontal: 10,
    maxWidth: 300,
    fontSize: 12
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 12,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
  },
  page1: {
    backgroundColor: '#F5F5F5',
    height: height/10,
    width: width,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
});

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header2, ListRiwayat, TabRiwayat} from '../../components';

const RiwayatCeilo = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header2 title='Ceilometer' onPress={() => navigation.goBack()}/>
      <View style={styles.tab}>
        <TabRiwayat text='Weekly'/>
        <TabRiwayat text='Monthly'/>
        <TabRiwayat text='6 Months'/>
        <TabRiwayat text='Annual'/>
      </View>
      <ListRiwayat kategori='Alat' alat='Ceilometer'/>
      <ListRiwayat kategori='Lokasi' alat='Stamet Soetta'/>
      <ListRiwayat kategori='Merk' alat='EEC'/>
      <ListRiwayat kategori='Tahun' alat='2010'/>
    </View>
  );
};

export default RiwayatCeilo;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

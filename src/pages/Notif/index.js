import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {Header, NotifAlat} from '../../components';

const Notif = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Notifikasi" />
      <ScrollView>
        <NotifAlat onPress={() => navigation.navigate('HasilLaporan')}/>
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
        <NotifAlat />
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
});

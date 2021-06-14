import React, { useEffect, useContext, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Chart, Header2, TabRiwayat } from '../../components';
import database from '@react-native-firebase/database';
import AuthContext from '../../router/AuthContext';

const RiwayatAAWS = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [latestStatus, setLatestStatus] = useState({});
  useEffect(() => {
    console.log('triggered AAWS');
    database()
      .ref(`Laporan/${user.uid}/AWS`)
      .on('value', snapshot => {
        var latestUpdate = Object.keys(snapshot.val())[0];
        setLatestStatus(snapshot.val()[latestUpdate]);
      });
  }, []);

  return (
    <View style={styles.page}>
      <Header2 title="AAWS" onPress={() => navigation.goBack()} />
      <View style={styles.tab}>
        <TabRiwayat text="Weekly" />
        <TabRiwayat text="Monthly" />
        <TabRiwayat text="6 Months" />
        <TabRiwayat text="Annual" />
      </View>
      <ScrollView>
        <Chart />
        <View style={styles.content1}>
          <Text style={styles.text3}>Alat</Text>
          <Text style={styles.text4}>:</Text>
          <Text style={{ fontSize: 14 }}>{latestStatus.alat ?? '-'}</Text>
        </View>
        <View style={styles.content1}>
          <Text style={styles.text3}>Lokasi</Text>
          <Text style={styles.text4}>:</Text>
          <Text style={{ fontSize: 14 }}>{latestStatus.lokasi ?? '-'}</Text>
        </View>
        <View style={styles.content1}>
          <Text style={styles.text3}>Merk</Text>
          <Text style={styles.text4}>:</Text>
          <Text style={{ fontSize: 14 }}>{latestStatus.merk ?? '-'}</Text>
        </View>
        <View style={styles.content1}>
          <Text style={styles.text3}>Tahun</Text>
          <Text style={styles.text4}>:</Text>
          <Text style={{ fontSize: 14 }}>{latestStatus.tahun ?? '-'}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default RiwayatAAWS;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content1: {
    flexDirection: 'row',
    marginVertical: 3,
    marginHorizontal: 20,
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

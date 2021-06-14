import React, { useEffect, useContext, useState } from 'react';
import moment from 'moment';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Chart, Header2, TabRiwayat } from '../../components';
import database from '@react-native-firebase/database';
import AuthContext from '../../router/AuthContext';

const Riwayat = props => {
  const { route, navigation } = props;
  const { params } = route;
  const alat = params ? params.alat : null;
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  const [viewStatus, setViewStatus] = useState('weekly');
  const [weeklyData, setWeeklyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [sixMonthlyData, setSixMonthlyData] = useState([]);
  const [annualData, setAnnualData] = useState([]);
  const [latestStatus, setLatestStatus] = useState({});
  const currentDate = new Date();

  useEffect(() => {
    database()
      .ref(`Laporan/${user.uid}/${alat}`)
      .on('value', snapshot => {
        if (snapshot.val()) {
          setData(snapshot.val());
          var latestUpdate = Object.keys(snapshot.val())[0];
          setLatestStatus(snapshot.val()[latestUpdate]);
          var weekly = [];
          var monthly = [];
          var semester1 = [];
          var semester2 = [];
          var annual = [];
          console.log('now', currentDate);
          Object.keys(snapshot.val()).map(date => {
            console.log('date', date);
            if (moment(date).isSame(currentDate, 'week')) {
              console.log('week', true);
              weekly.push(snapshot.val()[date]);
            } //true if dates are in the same week
            if (moment(date).isSame(currentDate, 'month')) {
              console.log('month', true);
              monthly.push(snapshot.val()[date]);
            } //true if dates are in the same month
            if (moment(date).isSame(currentDate, 'year')) {
              console.log('year', true);
              annual.push(snapshot.val()[date]);
              if (moment(date).month > 6) {
                semester2.push(snapshot.val()[date]);
              } else {
                semester1.push(snapshot.val()[date]);
              }
            } //true if dates are in the same year
          });
          setWeeklyData(weekly);
          setMonthlyData(monthly);
          setSixMonthlyData(
            moment(currentDate).month > 6 ? semester2 : semester1,
          );
          setAnnualData(annual);
        }
      });
  }, []);

  function _percentage(partialValue, totalValue) {
    return parseInt((100 * partialValue) / totalValue, 10);
  }

  const _getPercentagePerView = () => {
    if (viewStatus === 'weekly') {
      return _percentage(
        weeklyData.filter(val => val.kondisi === 'on').length,
        7,
      );
    } else if (viewStatus === 'monthly') {
      return _percentage(
        monthlyData.filter(val => val.kondisi === 'on').length,
        moment(currentDate).daysInMonth(),
      );
    } else if (viewStatus === 'semester') {
      return _percentage(
        sixMonthlyData.filter(val => val.kondisi === 'on').length,
        moment(currentDate).dayOfYear() / 2,
      );
    } else if (viewStatus === 'annual') {
      return _percentage(
        annualData.filter(val => val.kondisi === 'on').length,
        moment(currentDate).dayOfYear(),
      );
    } else {
      return 0;
    }
  };

  return (
    <View style={styles.page}>
      <Header2 title={alat} onPress={() => navigation.goBack()} />
      <View style={styles.tab}>
        <TabRiwayat text="Weekly" onPress={() => setViewStatus('weekly')} />
        <TabRiwayat text="Monthly" onPress={() => setViewStatus('monthly')} />
        <TabRiwayat text="6 Months" onPress={() => setViewStatus('semester')} />
        <TabRiwayat text="Annual" onPress={() => setViewStatus('annual')} />
      </View>
      <ScrollView>
        <View style={styles.content1}>
          <Text style={{ flex: 1 }}>Hari/Tanggal</Text>
          <Text style={styles.text4}>:</Text>
          <Text style={{ flex: 3 }}>
            {moment(currentDate).format('ddd, DD/MM/YYYY')}
          </Text>
        </View>
        <View style={styles.content1}>
          <Text style={{ flex: 1 }}>View Mode</Text>
          <Text style={styles.text4}>:</Text>
          <Text style={{ flex: 3 }}>{viewStatus}</Text>
        </View>
        <Chart percentage={_getPercentagePerView()} />
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

export default Riwayat;

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

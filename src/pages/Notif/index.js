import React, { useEffect, useState, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import { Header, NotifAlat } from '../../components';
import database from '@react-native-firebase/database';
import AuthContext from '../../router/AuthContext';
import moment from 'moment';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
  text: {
    marginHorizontal: 10,
    maxWidth: 300,
    fontSize: 12,
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
    height: height / 10,
    width: width,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
  textjudul: {
    fontSize: 12,
    marginVertical: 4,
    textTransform: 'uppercase',
    marginLeft: 10,
    fontWeight: 'bold',
  },
});

const Notif = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();

  useEffect(() => {
    database()
      .ref(`Laporan/${user.uid}`)
      .on('value', snapshot => {
        if (snapshot.val()) {
          var listItem = [];
          Object.keys(snapshot.val()).map(alat => {
            Object.keys(snapshot.val()[alat]).map(date => {
              listItem.push({
                ...snapshot.val()[alat][date],
                id: `${date}-${alat}`,
              });
            });
          });
          console.log('asd', listItem);
          setData(listItem);
        }
      });
  }, []);

  //   useEffect(() => {
  //   auth().onAuthStateChanged(user => {
  //     database()
  //       .ref(`Laporan/${user.uid}`)
  //       .on('value', snapshot => {
  //         // alert(JSON.stringify(parseArray(snapshot.val())[0].data))
  //         setNilai(parseArray(snapshot.val()));
  //       });
  //   });
  // }, []);

  const deleteItem = (item, date) => {
    Alert.alert('Info', 'Anda yakin akan menghapus laporan ini?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          database()
            .ref(
              `Laporan/${user.uid}/${item}/${moment(date).format(
                'YYYY-MM-DD',
              )}`,
            )
            .remove();
        },
      },
    ]);
  };

  const _renderList = () => {
    if (data) {
      return data
        .sort((a, b) => b - a)
        .map(item => {
          const date = moment(item.waktu).format('YYYY-MM-DD');
          return (
            <NotifAlat
              key={item.id}
              alat={item.alat ?? '-'}
              kondisi={item.kondisi ?? '-'}
              waktu={item.waktu ?? '-'}
              catatan={item.catatan ?? '-'}
              onDelete={() => deleteItem(item.alat, date)}
              onPress={() =>
                navigation.navigate('HasilLaporan', {
                  alat: item.alat,
                  date: date,
                })
              }
            />
          );
        });
    }

    return <Text>Belum ada Data</Text>;
  };

  return (
    <View style={styles.page}>
      <Header title="Notifikasi" />
      <ScrollView>{_renderList()}</ScrollView>
    </View>
  );
};

export default Notif;

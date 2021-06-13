import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import { Header2, HasilData} from '../../components';
import { Fire } from '../../config';

const RiwayatCeilo = ({navigation}) => {
  const [nilai, setNilai] = useState()
  const currentUser = Fire.auth().currentUser;

  useEffect(() =>{
    Fire.auth().onAuthStateChanged(user => {
        Fire.database()
          .ref(`Laporan/${currentUser.uid}/Ceilometer`)
          .on('value', snapshot => {
            const dataRes = Object.values(snapshot.val())
            console.log("Latest data", dataRes[dataRes.length - 1])
            setNilai(dataRes[dataRes.length - 1]);
          });
        })
  }, [])

  return (
    <View style={styles.page}>
      <Header2 title='Ceilometer' onPress={() => navigation.goBack()}/>
      <HasilData datas={nilai}/>
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

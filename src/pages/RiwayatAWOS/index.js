;import React, { useState, useEffect } from 'react';
import {StyleSheet, View} from 'react-native';
import { HasilData, Header2} from '../../components';
import {Fire} from '../../config'


const RiwayatAWOS = ({navigation}) => {
  const [nilai, setNilai] = useState()
  const currentUser = Fire.auth().currentUser;

  useEffect(() =>{
    Fire.auth().onAuthStateChanged(user => {
        Fire.database()
          .ref(`Laporan/${currentUser.uid}/Awos`)
          .on('value', snapshot => {
            const dataRes = Object.values(snapshot.val())
            console.log("Latest data", dataRes[dataRes.length - 1])
            setNilai(dataRes[dataRes.length - 1]);
          });
        })
  }, [])
  
  return (
    <View style={styles.page}>
      <Header2 title='AWOS' onPress={() => navigation.goBack()}/>
      <HasilData datas={nilai}/>
    </View>
    
  );
};

export default RiwayatAWOS;

const styles = StyleSheet.create({
  page : {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
});

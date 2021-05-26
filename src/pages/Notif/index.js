import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {Fire} from '../../config';
import {Header, NotifAlat} from '../../components';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const Notif = ({navigation, onPress}) => {

  const [nilai, setNilai] = React.useState([]);
  
    const parseArray = listObject => {
      const data = [];
      Object.keys(listObject).map(key => {
        data.push({
          id: key,
          data: listObject[key],
        });
      })
      return data;
    }

  React.useEffect(() => {
    Fire.database()
      .ref('/')
      .on('value', (snapshot) => {
        setNilai(parseArray(snapshot.val()));
      });
  }, [])

  return (
    <View style={styles.page}>
      <Header title="Notifikasi" />
      <ScrollView>
      {nilai.map(item => {
          return <NotifAlat key={item.id} title={item.id} lokasi={item.data.lokasi} catatan={item.data.catatan} onPress={() => navigation.navigate('HasilLaporan', {id: item.id})} />
          })}
        {/* <NotifAlat onPress={() => navigation.navigate('HasilLaporan')}/>
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

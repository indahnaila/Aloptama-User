import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import {Fire} from '../../config';
import {Header, NotifAlat} from '../../components';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Notif = ({navigation, onPress}) => {
  const [nilai, setNilai] = React.useState([]);
  const parseArray = listObject => {
    const data = [];
    Object.keys(listObject).map(key => {
      data.push({
        id: key,
        data: listObject[key],
      });
    });
    return data;
  };

  React.useEffect(() => {
    Fire.database()
      .ref('Laporan/')
      .on('value', snapshot => {
        // alert(JSON.stringify(parseArray(snapshot.val())[0].data))
        setNilai(parseArray(snapshot.val()));
      });
  }, []);

  const deleteItem = (itemLap, item) => {
    Alert.alert('Info', 'Anda yakin akan menghapus laporan ini?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          Fire.database()
            .ref('Laporan/' + `${item.id}/${itemLap.id}`)
            .remove();
        },
      },
    ]);
  };

  return (
    <View style={styles.page}>
      <Header title="Notifikasi" />
      <ScrollView>
        {nilai.map(item => {
          const data = parseArray(item.data);
          return (
            <>
              <Text style={styles.textjudul}>{item.id}</Text>
              {data.map(itemLap => {
                return (
                  <NotifAlat
                    key={itemLap.id}
                    kondisi={itemLap.data.kondisi}
                    waktu={itemLap.data.waktu}
                    catatan={itemLap.data.catatan}
                    onDelete={() => deleteItem(itemLap, item)}
                    onPress={() =>
                      navigation.navigate('HasilLaporan', {
                        id: `${item.id}/${itemLap.id}`,
                      })
                    }
                  />
                );
              })}
            </>
          );
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

import React, { useEffect } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';
import { Header2 } from '../../components';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const HasilLaporan = ({ navigation, route }) => {
  const { id } = route.params;
  const [nilai, setNilai] = React.useState({});

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

  return (
    <View style={styles.page}>
      <Header2
        title="Hasil Laporan"
        onPress={() => navigation.navigate('Notif')}
      />
      <ScrollView>
        <View style={{ marginVertical: 5, justifyContent: 'space-between' }}>
          <Text style={styles.judul}>
            LAPORAN HARIAN STATUS PERALATAN OPERASIONAL UTAMA (ALOPTAMA)
          </Text>
          <View style={styles.border} />
          <View style={styles.content1}>
            <Text style={styles.text3}>Alat</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.alat}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Waktu</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.waktu}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Lokasi</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.lokasi}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Merk</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.merk}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Tahun</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.tahun}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Kondisi</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.kondisi}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Catatan</Text>
            <Text style={styles.text4}>:</Text>
            <Text style={styles.hasil}>{nilai.catatan}</Text>
          </View>
          <View style={styles.content1}>
            <Text style={styles.text3}>Foto</Text>
            <Text style={styles.text4}>:</Text>
            <Image
              source={{ uri: nilai.photo }}
              style={{ width: 200, height: 200, marginTop: 7 }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HasilLaporan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5F5F5',

    marginBottom: 10,
  },
  // text: {
  //   backgroundColor: '#018A83',
  //   color: 'white',
  //   fontSize: 16,
  //   padding: 10,
  //   borderRadius: 20,
  // },
  button: {
    backgroundColor: '#018A83',
    marginRight: 8,
    padding: 8,
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: width / 4,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 1,
    marginTop: 50,
  },
  content1: {
    flexDirection: 'row',
    marginVertical: 3,
    marginHorizontal: 20,
  },
  text3: {
    fontSize: 16,
    marginRight: 10,
    width: 60,
  },
  text4: {
    marginRight: 10,
    fontSize: 16,
  },
  judul: {
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
  },
  border: {
    borderBottomWidth: 1,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  hasil: {
    fontSize: 16,
    maxWidth: 200,
  },
});

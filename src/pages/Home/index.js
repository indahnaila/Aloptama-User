import React from 'react';
import {StyleSheet, View, Image, ScrollView, Dimensions} from 'react-native';
import {
  GambarSuhu,
  IconAAWS,
  IconAWOS,
  IconAWS,
  IconCeilo,
  IconRadar,
  IconSeiscomp3,
} from '../../assets';
import {ButtonAlat, Header, NotifAlat} from '../../components';
import {Fire} from '../../config';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Stamet Budiarto" />
      <ScrollView>
        <Image source={GambarSuhu} style={styles.foto} />
        <View style={styles.lolo}>
          <View style={styles.tombol}>
            <ButtonAlat
              title="AWS"
              foto={IconAWS}
              onPress={() => navigation.navigate('RiwayatAWS')}
            />
          </View>
          <View style={styles.tombol}>
            <ButtonAlat
              title="AWOS"
              foto={IconAWOS}
              onPress={() => navigation.navigate('RiwayatAWOS')}
            />
          </View>
        </View>
        <View style={styles.lolo}>
          <View style={styles.tombol}>
            <ButtonAlat
              title="AAWS"
              foto={IconAAWS}
              onPress={() => navigation.navigate('RiwayatAAWS')}
            />
          </View>
          <View style={styles.tombol}>
            <ButtonAlat
              title="Ceilometer"
              foto={IconCeilo}
              onPress={() => navigation.navigate('RiwayatCeilo')}
            />
          </View>
        </View>
        <View style={styles.lolo}>
          <View style={styles.tombol}>
            <ButtonAlat
              title="Radar"
              foto={IconRadar}
              onPress={() => navigation.navigate('RiwayatRadar')}
            />
          </View>
          <View style={styles.tombol}>
            <ButtonAlat
              title="Seiscomp3"
              foto={IconSeiscomp3}
              onPress={() => navigation.navigate('RiwayatSeisc')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  tombol: {
    marginHorizontal: 14,
  },
  lolo: {
    flexDirection: 'row',
    marginBottom: 30,
    justifyContent: 'center',
  },
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
  foto: {
    width: width / 1.15,
    borderRadius: 10,
    height: height / 4,
    marginVertical: 30,
    marginHorizontal: 20,
    alignSelf: 'center',
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#334752',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    flex: 1,
    color: 'white',
    fontSize: 10,
  },
  content: {
    flex: 1,
  },
});

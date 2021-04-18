import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {
  GambarSuhu,
  IconAAWS,
  IconAWOS,
  IconAWS,
  IconCeilo,
  IconRadar,
  IconSeiscomp3,
} from '../../assets';
import {ButtonAlat, Header} from '../../components';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Stamet Soekarno Hatta" />
      <ScrollView>
      <Image source={GambarSuhu} style={{marginHorizontal: 20, marginVertical: 40}}/>
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
    marginLeft: 23,
  },
  lolo: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
});

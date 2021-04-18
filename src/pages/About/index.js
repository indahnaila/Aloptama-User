import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {LogoBig, LogoBMKG} from '../../assets';
import {Button, Header} from '../../components';

const About = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Tentang Kami" />
      <ScrollView>
        <View style={styles.wrap}>
          <LogoBig />
          <Text style={styles.text}>
            Aplikasi sistem pelaporan alat utama (ALOPTAMA) merupakan aplikasi
            berbasis android yang memudahkan teknisi BMKG untuk memonitoring dan
            melaporkan kondisi peralatan operasional BMKG secara harian guna
            menghasilkan data kondisi alat secara tepat, efektif dan efisien.
          </Text>
          <Text style={styles.text2}>
            Aplikasi ini dibuat untuk memenuhi tugas akhir Taruna Instrumentasi
            MKG 2017 Program Diploma IV.
          </Text>
          <LogoBMKG />
          <Text style={styles.text3}>Created by :</Text>
          <Text style={styles.text4}>Indah Naila R.S</Text>
        </View>
        <View style={styles.button}>
          <Button
            title="Keluar"
            type="secondary"
            onPress={() => navigation.replace('Login')}
          />
        </View>
        <View style={{marginBottom: 30}} />
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  text: {
    width: 340,
    textAlign: 'center',
    marginTop: 30,
    fontSize: 15,
  },
  text2: {
    width: 340,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
    marginBottom: 40,
  },
  text3: {
    marginTop: 20,
    fontSize: 12,
  },
  text4: {
    marginTop: 7,
    fontSize: 12,
    marginBottom: 30,
  },
  wrap: {
    alignItems: 'center',
    marginVertical: 30,
  },
  button: {
    marginHorizontal: 30,
  },
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
  },
});

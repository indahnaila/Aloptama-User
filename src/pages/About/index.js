import React, { useContext } from 'react';
import { ScrollView, StyleSheet, Dimensions, Text, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { LogoBig, LogoBMKG } from '../../assets';
import { Button, Header } from '../../components';
import AuthContext from '../../router/AuthContext';

const width = Dimensions.get('window').width;

const About = ({ navigation }) => {
  const { logout, setUser } = useContext(AuthContext);

  const signOut = () => {
    logout({
      onSuccess: () => {
        navigation.replace('Login');
        setUser(null);
      },
      onFailure: err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      },
    });
  };
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
          <Button title="Keluar" type="secondary" onPress={signOut} />
        </View>
        {/* <View style={{marginBottom: 20}} /> */}
      </ScrollView>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  text: {
    width: width / 1.2,
    textAlign: 'center',
    marginTop: 30,
    fontSize: 13,
  },
  text2: {
    width: width / 1.2,
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13,
    marginBottom: 40,
  },
  text3: {
    marginTop: 20,
    fontSize: 10,
  },
  text4: {
    marginTop: 7,
    fontSize: 11,
    marginBottom: 30,
  },
  wrap: {
    alignItems: 'center',
    marginVertical: 30,
  },
  button: {
    marginHorizontal: 30,
    marginBottom: 20,
  },
  page: {
    backgroundColor: '#E8E8E8',
    flex: 1,
    justifyContent: 'space-between',
  },
});

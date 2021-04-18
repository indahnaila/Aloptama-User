import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, HasilNotif, Header2} from '../../components';

const HasilLaporan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header2 title="Hasil Laporan" onPress={() => navigation.goBack()} />
      <ScrollView>
        <View style={{margin: 10}}>
          <HasilNotif />
          <HasilNotif />
          <HasilNotif />
          <HasilNotif />
          <HasilNotif />
          <HasilNotif />
          <View style={{marginBottom: 20}} />
          <Button title="Download" type="secondary" />
          <View style={{marginBottom: 20}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default HasilLaporan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  text: {
    backgroundColor: '#018A83',
    color: 'white',
    fontSize: 16,
    padding: 10,
    borderRadius: 20,
  },
});

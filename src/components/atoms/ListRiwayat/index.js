import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListRiwayat = ({kategori, alat}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text1}>{kategori}</Text>
      <Text style={styles.text}>:</Text>
      <Text style={{fontSize: 16}}>{alat}</Text>
    </View>
  );
};

export default ListRiwayat;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10
  },
  text: {
    fontSize: 16,
    marginRight: 10,
  },
  text1: {
    width: 90,
    fontSize: 16,
  }
});

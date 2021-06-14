import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { IconSukses } from '../../../assets';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const NotifAlat = ({
  navigation,
  onPress,
  kondisi,
  waktu,
  alat,
  catatan,
  onDelete,
}) => {
  return (
    <TouchableOpacity
      style={styles.page}
      onPress={onPress}
      onLongPress={onDelete}>
      <View style={styles.content}>
        <Image source={IconSukses} />
        <View style={{ flex: 1 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.text1}>{alat}</Text>
            <Text style={{ fontSize: 12, textTransform: 'capitalize' }}>
              {waktu}
            </Text>
          </View>
          <Text style={styles.text}>{catatan}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotifAlat;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    maxWidth: 300,
    fontSize: 12,
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 10,
    paddingVertical: 12,
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 10,
    textTransform: 'uppercase',
  },
  page: {
    backgroundColor: '#F5F5F5',
    height: height / 10,
    borderBottomWidth: 1,
    borderColor: '#E8E8E8',
  },
});

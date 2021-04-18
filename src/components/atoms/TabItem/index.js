import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconAbout,
  IconAboutAktif,
  IconAdd,
  IconAddAktif,
  IconHome,
  IconHomeAktif,
  IconNotif,
  IconNotifAktif,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeAktif /> : <IconHome />;
    }
    if (title === 'Add') {
      return active ? <IconAddAktif /> : <IconAdd />;
    }
    if (title === 'Notif') {
      return active ? <IconNotifAktif /> : <IconNotif />;
    }
    if (title === 'About') {
      return active ? <IconAboutAktif /> : <IconAbout />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.page}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
  },
  text: active => ({
    color: active ? 'white' : '#9B9B9B',
    marginTop: 4,
    fontSize: 11,
  }),
});

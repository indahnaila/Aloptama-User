import { Platform } from 'react-native';

export const generateFullDate = () => {
  const dayMap = new Map([
    [1, 'Senin'],
    [2, 'Selasa'],
    [3, 'Rabu'],
    [4, 'Kamis'],
    [5, 'Jumat'],
    [6, 'Sabtu'],
    [7, 'Minggu'],
  ]);
  const date = new Date();
  const currentDate = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  const currentDay = dayMap.get(date.getDay());
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  return `${currentDay}, ${currentDate}/${currentMonth}/${currentYear}, ${currentHour}:${currentMinute}`;
};

export const getPlatformPath = ({ path, uri }) => {
  return Platform.select({
    android: { value: path },
    ios: { value: uri },
  });
};

export const getFileName = (name, path) => {
  if (name != null) {
    return name;
  }

  if (Platform.OS === 'ios') {
    path = '~' + path.substring(path.indexOf('/Documents'));
  }
  return path.split('/').pop();
};

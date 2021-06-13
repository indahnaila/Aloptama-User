import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  PermissionsAndroid,
} from 'react-native';
import {AddGallery, AddCamera, BlankPhoto} from '../../assets';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ImagePicker = ({onChangeValue}) => {
  const [photo, setPhoto] = useState(BlankPhoto);

  const getImage = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchImageLibrary(
          {quality: 1, maxWidth: 200, maxHeight: 200, includeBase64: true},
          response => {
            if (response.didCancel || response.error) {
              showMessage({
                message: 'Batal memilih gambar',
                type: 'default',
                backgroundColor: 'red',
                color: 'white',
              });
            } else {
              const source = {uri: response.uri};
              setPhoto(source);
              if (onChangeValue) {
                onChangeValue(response);
              }
            }
          },
        );
      } else {
        showMessage({
          message: 'Izin tidak diberikan',
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      }
    } catch (err) {
      showMessage({
        message: `Terjadi Kesalahan ada ${err}`,
        type: 'default',
        backgroundColor: 'red',
        color: 'white',
      });
    }
  };

  const getPicture = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(
          {quality: 1, maxWidth: 200, maxHeight: 200, includeBase64: true},
          response => {
            if (response.didCancel || response.error) {
              showMessage({
                message: 'Batal mengambil gambar',
                type: 'default',
                backgroundColor: 'red',
                color: 'white',
              });
            } else {
              const source = {uri: response.uri};
              setPhoto(source);
              if (onChangeValue) {
                onChangeValue(response);
              }
            }
          },
        );
      } else {
        showMessage({
          message: 'Izin tidak diberikan',
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      }
    } catch (err) {
      showMessage({
        message: `Terjadi Kesalahan ada ${err}`,
        type: 'default',
        backgroundColor: 'red',
        color: 'white',
      });
    }
  };

  // const UploadPhoto = () => {
  //   Fire.database()
  //     .ref('aws/' + '/')
  //     .update({photo: photoForDB});
  //     navigation.navigate('HasilLaporan', data);
  // };
  return (
    <View>
      <View style={styles.content}>
        <Text style={styles.text}>Foto</Text>
        <Text style={{fontSize: 16, marginRight: 10}}>:</Text>
        <Text style={{color: 'gray'}}>
          (upload foto jika terjadi kerusakan)
        </Text>
      </View>
      <Image
        source={photo}
        style={{
          width: width / 1.44,
          height: height / 5,
          marginLeft: 70,
          marginTop: -9,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 100,
          marginRight: 20,
          marginTop: 10,
          marginBottom: 20,
        }}>
        <TouchableOpacity style={styles.button1} onPress={getPicture}>
          <AddCamera />
          <Text style={{color: 'white', marginLeft: 5}}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={getImage}>
          <AddGallery />
          <Text style={{color: 'white', marginLeft: 5}}>Gallery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 15,
    flex: 1,
  },
  text: {
    fontSize: 14,
    width: 60,
  },
  input: {
    borderBottomWidth: 1,
    flex: 1,
    display: 'flex',
    height: 20,
    paddingVertical: 1,
  },
  button: {
    backgroundColor: '#F5F5F5',
    marginRight: 8,
    padding: 8,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 6,
    width: width / 1.41,
  },
  button1: {
    backgroundColor: '#018A83',
    marginRight: 8,
    padding: 7,
    width: width / 4.5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

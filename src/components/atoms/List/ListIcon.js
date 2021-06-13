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
import {AddGallery, AddCamera, BlankPhoto} from '../../../assets';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import {Fire} from '../../../config';
import {useForm} from '../../../utils';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {showMessage} from 'react-native-flash-message'

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ListIcon = () => {
  const [photoForDB, setphotoForDB] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(BlankPhoto);

  const storeData = async value => {
    try {
      await AsyncStorage.setItem('@DBphoto', value);
    } catch (e) {
      // saving error
    }
  };

  const getImage = () => {
    launchImageLibrary(
      {quality: 1, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.error) {
          // showMessage({
          //   message: 'foto tidak ada',
          //   type: 'default',
          //   backgroundColor: 'yellow',
          //   color: 'white',
          // });
        } else {
          console.log('response getImage: ', response.base64);
          // disini disimpen aja fotonya ke async storage
          storeData(`data:${response.type};base64, ${response.base64}`);
          // setphotoForDB(`data:${response.type};base64, ${response.base64}`);
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };

  const getPicture = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission diberikan');
      } else {
        console.log('permission tidak diberikan');
      }
    } catch (err) {
      console.log(err);
    }

    launchCamera(
      {quality: 1, maxWidth: 200, maxHeight: 200, includeBase64: true},
      response => {
        if (response.didCancel || response.error) {
        } else {
          const source = {uri: response.uri};
          setPhoto(source);
          setHasPhoto(true);
          storeData(`data:${response.type};base64, ${response.base64}`);
        }
      },
    );
  };

  const UploadPhoto = () => {
    Fire.database()
      .ref('aws/' + '/')
      .update({photo: photoForDB});
    navigation.navigate('HasilLaporan', data);
  };
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

export default ListIcon;

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    marginBottom: 15,
    flex: 1,
    // alignItems: 'center',
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

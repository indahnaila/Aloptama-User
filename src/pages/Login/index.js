import React, {useState} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {TextInput} from 'react-native-paper';
import {LogoBig} from '../../assets';
import {Button} from '../../components';
import auth from '@react-native-firebase/auth';
import {useForm, storeData} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [obscure, setObscure] = useState(true);

  const onContinue = async () => {
    setLoading(true);
    await auth()
      .signInWithEmailAndPassword(form.username, form.password)
      .then(res => {
        console.log('success:', res);
        storeData('user', res);
        navigation.replace('MainApp');
        // Fire.database()
        //   .ref(`users/${res.user.uid}/`)
        //   .once('value')
        //   .then(resDB => {
        //     console.log('data user:', resDB.val());
        //     if (resDB.val()) {
        //       storeData('user', resDB.val());
        //       navigation.replace('MainApp');
        //     }
        //   });
      })
      .catch(err => {
        console.log('error:', err);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: 'red',
          color: 'white',
        });
      });
    setLoading(false);
  };
  // (ini fungsi login akhir)

  //  (ini bagian registrasi dimulai)
  //   auth()
  //     .createUserWithEmailAndPassword(form.username, form.password)
  //     .then(success => {
  //       setForm('reset');
  //       const data = {
  //         username: form.username,
  //       };
  //       Fire.database()
  //         .ref('users/' + success.user.uid + '/')
  //         .set(data);

  //       storeData('user', data);
  //       navigation.replace('MainApp', data);
  //     })
  //     .catch(error => {
  //       const errorMessage = error.message;
  //     });
  // };
  // (bagian registrasi berakhir)

  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <View style={styles.logo}>
          <LogoBig />
        </View>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.input}
          value={form.username}
          dense
          theme={{
            colors: {
              text: 'white',
              primary: '#7BE2E1',
            },
          }}
          onChangeText={value => setForm('username', value)}
        />
        <Text style={styles.text2}>Password</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={[styles.input, {flex: 1}]}
            labelStyle={{color: 'white'}}
            secureTextEntry={!obscure}
            value={form.password}
            dense
            theme={{
              colors: {
                text: 'white',
                primary: '#7BE2E1',
              },
            }}
            onChangeText={value => setForm('password', value)}
            right={
              <TextInput.Icon
                name={obscure ? 'eye' : 'eye-off'}
                onPress={() => setObscure(!obscure)}
              />
            }
          />
        </View>
        {/* <Text style={styles.text}>nama stasiun</Text>
        <TextInput
          style={styles.input}
          value={form.header}
          onChangeText={value => setForm('header', value)}
        /> */}
        <View style={{marginBottom: 30}} />
        {!loading ? (
          <Button title="Masuk" onPress={onContinue} />
        ) : (
          <ActivityIndicator color="white" />
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#334752',
    flex: 1,
    justifyContent: 'center',
    marginTop: -100,
  },
  text: {
    marginTop: 60,
    marginBottom: 10,
    color: '#7BE2E1',
  },
  text2: {
    marginTop: 20,
    marginBottom: 10,
    color: '#7BE2E1',
  },
  logo: {
    alignItems: 'center',
  },
  content: {
    marginHorizontal: 60,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#7BE2E1',
    color: 'white',
    backgroundColor: 'transparent',
    paddingVertical: 1,
    fontSize: 16,
  },
});

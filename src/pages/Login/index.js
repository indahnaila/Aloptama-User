import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {LogoBig} from '../../assets';
import {Button} from '../../components';
import {Fire} from '../../config';
import {useForm, storeData} from '../../utils';
import {showMessage} from 'react-native-flash-message';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const onContinue = () => {
    console.log(form);
    // Fire.auth().onAuthStateChanged(function(user) {
    //   if (user) {
    //     user.getIdToken().then(function(idToken) {  // <------ Check this line
    //         alert(idToken); // It shows the Firebase token now
    //         return idToken;
    //     });
    //   }
    // });

    // (ini fungsi login mulai)
    Fire.auth()
      .signInWithEmailAndPassword(form.username, form.password)
      .then(res => {
        console.log('success:', res);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then(resDB => {
            console.log('data user:', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
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
  };
  // (ini fungsi login akhir)

  //  (ini bagian registrasi dimulai)
  //   Fire.auth()
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
          onChangeText={value => setForm('username', value)}
        />
        <Text style={styles.text2}>Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          value={form.password}
          onChangeText={value => setForm('password', value)}
        />
        {/* <Text style={styles.text}>nama stasiun</Text>
        <TextInput
          style={styles.input}
          value={form.header}
          onChangeText={value => setForm('header', value)}
        /> */}
        <View style={{marginBottom: 30}} />
        <Button title="Masuk" onPress={onContinue} />
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
    paddingVertical: 1,
    fontSize: 16,
  },
});

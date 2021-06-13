import React, { useContext, useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Splash,
  Login,
  Home,
  Add,
  Notif,
  About,
  RiwayatAWS,
  RiwayatAWOS,
  RiwayatAAWS,
  RiwayatRadar,
  RiwayatCeilo,
  RiwayatSeisc,
  HasilLaporan,
} from '../pages';
// import {BottomNavigator} from '../components';
import {
  IconAbout,
  IconAboutAktif,
  IconAdd,
  IconAddAktif,
  IconHome,
  IconHomeAktif,
  IconNotif,
  IconNotifAktif,
} from '../assets';
import AuthContext from './AuthContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? <IconHomeAktif /> : <IconHome />;
          } else if (route.name === 'Add') {
            iconName = focused ? <IconAddAktif /> : <IconAdd />;
          } else if (route.name === 'Notif') {
            iconName = focused ? <IconNotifAktif /> : <IconNotif />;
          } else if (route.name === 'About') {
            iconName = focused ? <IconAboutAktif /> : <IconAbout />;
          }
          return iconName;
        },
      })}
      tabBarOptions={{
        tabStyle: { backgroundColor: '#334752', paddingVertical: 5 },
        labelStyle: { fontSize: 9 },
        keyboardHidesTabBar: true,
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Notif" component={Notif} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

const Router = () => {
  const { user, setUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = userStatus => {
    setUser(userStatus);
    if (initializing) {
      setInitializing(false);
    }
    setLoading(false);
  };

  const initAuth = () => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  };

  useEffect(() => {
    initAuth();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  console.log('hjasdjhasd', user);
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      {user && (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Add"
            component={Add}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainApp"
            component={MainApp}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiwayatAWS"
            component={RiwayatAWS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiwayatAWOS"
            component={RiwayatAWOS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiwayatAAWS"
            component={RiwayatAAWS}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiwayatRadar"
            component={RiwayatRadar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiwayatCeilo"
            component={RiwayatCeilo}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="RiwayatSeisc"
            component={RiwayatSeisc}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="HasilLaporan"
            component={HasilLaporan}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;

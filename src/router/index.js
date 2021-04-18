import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
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
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />} 
    tabBarOptions={{
      keyboardHidesTabBar: true
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Notif" component={Notif} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Add" component={Add} options={{headerShown: false}} />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatAWS"
        component={RiwayatAWS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatAWOS"
        component={RiwayatAWOS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatAAWS"
        component={RiwayatAAWS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatRadar"
        component={RiwayatRadar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatCeilo"
        component={RiwayatCeilo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="RiwayatSeisc"
        component={RiwayatSeisc}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HasilLaporan"
        component={HasilLaporan}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyCRZcnEcemLazF88qmRF4m0bRUvUkLWgJw',
  authDomain: 'aloptama-user.firebaseapp.com',
  databaseURL: 'https://aloptama-user-default-rtdb.firebaseio.com',
  projectId: 'aloptama-user',
  storageBucket: 'aloptama-user.appspot.com',
  messagingSenderId: '261696690074',
  appId: '1:261696690074:web:be2f276c084459dc02cc23',
  measurementId: 'G-WR5F1WPHVS',
  // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
});

const Fire = firebase;

export default Fire;

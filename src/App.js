import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

const App = () => {
  // useEffect(() => {
  //   const firebaseConfig = {
  //     apiKey: 'AIzaSyDfPdhwNpfR6btBE53MyTJ-h2HrnqxSbGM',
  //     authDomain: 'auth-1e622.firebaseapp.com',
  //     projectId: 'auth-1e622',
  //     storageBucket: 'auth-1e622.appspot.com',
  //     messagingSenderId: '1050413117556',
  //     appId: '1:1050413117556:web:9765cb207e6ad006f42121',
  //     measurementId: 'G-Y552KYRYMS',
  //   };
  //   const app = initializeApp(firebaseConfig);
  //   const analytics = getAnalytics(app);
  // }, []);
  return (
    <View>
      <Header headerText="Authentication" />
      <LoginForm />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

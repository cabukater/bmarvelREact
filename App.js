import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Routes from '~/routes'
import Header from '~/components/Header';

export default function App() {
  return (
   <>
   <View
        style={{
          flex: 1,
          backgroundColor: '#000',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight:50
        }}>
          <Header />
        <StatusBar style="light" />

      </View>
    <Routes />
  </>
  )
};

import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Routes from '~/routes'
import Header from '~/components/Header';
import { useFonts,
  BebasNeue_400Regular,
  Raleway_400Regular,
  Raleway_100Thin,
  Raleway_100Thin_Italic,
  Raleway_200ExtraLight,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    BebasNeue_400Regular,
    Raleway_400Regular,
    Raleway_100Thin,
    Raleway_100Thin_Italic,
    Raleway_200ExtraLight
  
  });

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

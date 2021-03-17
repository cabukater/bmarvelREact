import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Heroes from './../../components/Heroes'

const PUBLIC_KEY = '794421a97f19aa33c8b961b598009f98'
const PRIVATE_KEY = '1553c81b295fe0e47f9cfa1b284f43080bac185e'

const Home = ({ navigation }) => (
  <View style={styles.container}>
       <View style={styles.box, styles.header}>
       <Text>Header ;D</Text>
       </View>
       <View style={styles.box, styles.content}>
         <Heroes/>
          <View style={styles.box, styles.detaque}>
          <Text>destaque</Text>          
          </View>  
          <View style={styles.box, styles.lista}>
            <Text>lista</Text>
            </View>
       </View>
    
       <View style={styles.box, styles.footer}>
       <Text>footer</Text>
       </View>    
    </View>
);

Home.navigationOptions = {
  title: 'Home',
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        alignItems: 'stretch'    
    },
    box: {
        flex:1,
        backgroundColor: '#666',
         barderColor: '#000',
         margin: 10        
    },
    header: {
      minHeight:60
      
    },
    footer: {
      minHeight:60,
      
    },
    content:{
      flex:2,
      backgroundColor:'#f1f1f1'
    }

});

export default Home;

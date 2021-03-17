import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';

const About = () => (
<View style={styles.container} >    
    <View  style={styles.box}>
        <Text>oi</Text>
    </View>     
    <View  style={styles.box}>
        <Text>oi</Text>
    </View> 
    <View  style={styles.box}>
        <Text>oi</Text>
    </View> 
    <View  style={styles.box}>
        <Text>oi</Text>
    </View> 
</View>
);

/*About.navigationOptions = {
  title: 'About',
}*/

const styles = StyleSheet.create({
    container: {
         flexDirection: 'row',
    },
    box: {
         flex: 1,
         height: 100,
         backgroundColor: '#666',
         barderColor: '#000',
         margin:10
    }
})

export default About;
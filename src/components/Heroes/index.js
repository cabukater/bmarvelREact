import React from 'react'
import { SafeAreaView, View,StyleSheet, FlatList, Text, Image } from 'react-native'
import md5 from 'js-md5'

const PUBLIC_KEY = '794421a97f19aa33c8b961b598009f98'
const PRIVATE_KEY = '1553c81b295fe0e47f9cfa1b284f43080bac185e'

export default class Heroes extends React.PureComponent {
    static navigationOptions = {
        title: 'Heroes'
    }
    
    state = {
        data: []
    }
    
    async componentDidMount() {
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)

        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&orderBy=name&limit=50&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({data: responseJson.data.results})
    }

    _renderItem = ({item}) => {
        return  (
            <View style={styles.cards}>
                <View>
                    <Image style={{height: 100, width: 50, borderRadius: 25}} source={{uri: `${item.thumbnail.path}.${item.thumbnail.extension}` }} />
                    <Text style={{marginLeft: 10}}>{item.name}</Text>
                    <Text style={{marginLeft: 10}}>{item.description}</Text>

                </View>
            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
            <FlatList 
                data={this.state.data}
                horizontal={true}
                renderItem={this._renderItem}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={()=>
                    <View style={{height:1, backgroundColor: '#f7f7f7'}} 
                />}
            />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        
    },
    cards: {
        flex:1,
        backgroundColor: '#666',
         barderColor: '#000',
         margin: 10        
    },
  
});
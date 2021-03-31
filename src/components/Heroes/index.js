import React from 'react'
import { SafeAreaView, View, StyleSheet, FlatList, Text } from 'react-native'
import md5 from 'js-md5'
import { Card, CardHeader, CardContent, Container, Title, BoxHero, Image } from './styles';

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
        const PUBLIC_KEY = '794421a97f19aa33c8b961b598009f98';
        const PRIVATE_KEY = '1553c81b295fe0e47f9cfa1b284f43080bac185e'
        const timestamp = Number(new Date())
        const hash = md5.create()
        hash.update(timestamp + PRIVATE_KEY + PUBLIC_KEY)
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`)
        const responseJson = await response.json()
        this.setState({ data: responseJson.data.results })
      
    }

    showCard (id) {
        this.props.id(id);    
      
      }; 

    render() {
        return (
            <Container>
              
                    {
                        this.state.data.map(
                            (hero, index) => {
                                return <BoxHero   onClick={() => this.showCard(hero)}>
                                    <CardHeader>
                                        <Image  source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} />
                                    </CardHeader>
                                   
                                </BoxHero>
                              
                            }
                        )
                    }
                
            </Container>
        )

    }
}
/**<Card key={hero + index}>
                                    <CardHeader>
                                        <Image  source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }} />
                                    </CardHeader>
                                    <CardContent>
                                        <Title>{hero.name}</Title>
                                        <Description>{hero.description}</Description>
                                    </CardContent>
                                </Card> */
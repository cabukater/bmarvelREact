import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import Heroes from '~/components/Heroes'
import Hero from '~/components/Hero'

import { Container } from './styles'
export default class Home extends React.PureComponent {
  static navigationOptions = {
    title: 'Heroes'
  }

  state = { hero: '' }
  showCard = (HeroValue) => {
    this.setState({ hero: HeroValue });

  }

  state = {
    data: []
  }
  render()  {
    return (
      <Container >
        <View>
          <Hero name={this.state.hero?.name}
            dsc={this.state.hero?.description}
            image={this.state?.hero} />
          <Heroes id={this.showCard} />
        </View>
        <View >
          <Text>footer</Text>
        </View>
      </Container>
    )
  }
}
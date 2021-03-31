import {Card, CardInner, CardInfo,Footer,TextInfo,
  ListNav, Item, Nav, CardHeader, Text, Title } from './styles.js'
import React, { Component } from 'react'
import { View } from 'react-native'

export default class Hero extends Component {
  render() {
    console.log(this.props)

    return (
      <View >
        <Card className="card" style={{ backgroundImage: `url(${this.props.image?.thumbnail.path}.${this.props.image?.thumbnail.extension})` }} >
          <CardInner>
            <CardHeader>
              <Nav>
                <ListNav>
                  <Item><Text>Filmes</Text></Item>
                  <Item><Text>Histórias</Text></Item>
                  <Item><Text>Cards <small>Soon</small></Text></Item>
                </ListNav>
              </Nav>
            </CardHeader>
             <CardInfo>
                <Title className="card__title">{this.props?.name}</Title>
                <TextInfo className="card__slug">{this.props?.dsc}</TextInfo>
              </CardInfo>
        
            <Footer>
              <button className="card__btn" value="Watch trailer">CONHEÇA MAIS S ESSE HERÓI</button>
            </Footer>
          </CardInner>
        </Card>
      </View>
    )
  }
}

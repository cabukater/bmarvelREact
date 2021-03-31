import './styles.scss'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Hero extends Component {
    render() {
      console.log(this.props)   

        return (
            <View>
  <div class="card" style={{backgroundImage: `url(${this.props.image?.thumbnail.path}.${this.props.image?.thumbnail.extension})`}} >
  <div className="card__inner">
  <header className="card__header">
      <nav className="card__nav">
        <ul className="list list--nav">
          <li><a href="#">Filmes</a></li>
          <li><a href="#">Histórias</a></li>
          <li><a href="#">Cards <small>Soon</small></a></li>
        </ul>
      </nav>
    </header>
     <main className="card__body">
          <div className="card__info">
        <h1 className="card__title">{this.props?.name}</h1>
            <p className="card__slug">.{this.props?.dsc}</p>
         </div>
    </main>
     <footer className="card__footer">
    <button className="card__btn" value="Watch trailer">CONHEÇA MAIS S ESSE HERÓI</button>
    </footer>
  </div>
</div>
            </View>
        )
    }
}

import React from 'react'
import {Component} from 'react'
import PropTypes from 'prop-types'

const Color = ({ title, color, rating=0 }) =>
  <section className='color'>
    <h1>{title}</h1>
    <div className='color'
      style={{ backgroundColor: color }} />
    <div>
      <StarRating starSelected={rating} />
    </div>
  </section>

const ColorList = ({colors = []}) =>
  <div className='color-list'>
    {(colors.length === 0) ? <p>No Colors Listed. (Add a color)</p> : colors.map(
      color => <Color key={color.id} {...color} />
    )}
  </div>

class App extends Component {

  constructor (props) {
    super (props)
    this.state = {
      colors: []
    }
  }

  render () {
    const { colors } = this.state
    return (
      <div className="app">
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
    )
  }
}

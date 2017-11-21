import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class AddColorForm extends Component {
  constructor (props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit (e) {
    const { _title, _color } = this.refs
    e.preventDefault()
    // alert(`New Color: ${_title.value} ${_color.value}`)
    this.props.onNewColor(_title.value, _color.value)
    _title.value = ''
    _color.value = '#000'
    _title.focus()
  }

  render () {
    return (
      <form onSubmit={this.submit}>
        <input
          ref="_title"
          type='text'
          placeholder='color title ...'
          required />
        <input
          ref="_color"
          type='color'
          required />
        <button>ADD</button>
      </form>
    )
  }
}

const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)

const colorForm = <AddColorForm onNewColor={logColor} />

// ref={(input) => { this.textInput = input; }} />

export {AddColorForm, colorForm}

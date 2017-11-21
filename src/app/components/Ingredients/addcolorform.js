import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import propTypes from 'prop-types'

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

AddColorForm.propTypes = {
  onNewColor: propTypes.func
}

AddColorForm.defaultProps = {
  onNewColor: f => f
}

const StatelessColorForm = ({onNewColor = f => f}) => {
  let _title, _color
  const submit = e => {
    e.preventDefault()
    onNewColor(_title.value, _color.value)
    _title.value = ''
    _color.value = '#000'
    _title.focus()
  }

  // propTypes = {
  //   onNewColor: propTypes.func
  // }

  return (
    <div>
      <pre>Test {Date()}</pre>
      <form onSubmit={submit}>
        <input ref={input => _title = input}
          type='text'
          placeholder='color title...' required />
        <input ref={input => _color = input}
          type='color' required />
        <button>ADD</button>
      </form>
    </div>
  )
}

StatelessColorForm.propTypes = {
  onNewColor: propTypes.func
}

StatelessColorForm.defaultProps = {
  onNewColor: f => f
}

// const logColor = (title, color) => console.log(`New Color: ${title} | ${color}`)

const colorForm = <AddColorForm onNewColor={(title, color) => {
  console.log(`TODO: add new ${title} and ${color} to tht list`)
  console.log(`TODO: render UI with new Color`)
}} />

const StatelessForm = () => <StatelessColorForm onNewColor={(title, color) => {
  console.log(`TODO Stateless: add new ${title} and ${color} to tht list`)
  console.log(`TODO Stateless: render UI with new Color`)
}} />

// ref={(input) => { this.textInput = input; }} />

export {AddColorForm, colorForm, StatelessForm}

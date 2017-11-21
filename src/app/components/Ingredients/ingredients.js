import React from 'react'
import {Component} from 'react'
// import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
// import {data} from './data'
// import {Recipe} from './recipe'

// const Menu = ({title, recipes}) => (
//   <article>
//     <header>
//       <h1>{title}</h1>
//     </header>
//     <div className='recipes'>
//       {recipes.map((recipe, i) => <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />)}
//     </div>
//   </article>
// )

// const Summary = ({ingredients, steps, title}) => (
//   <div className='summary'>
//     <h1>{title}</h1>
//     <p>
//       <span>
//         {ingredients.length} |
//       </span>
//       <span>
//         {steps.length} Steps
//       </span>
//     </p>
//   </div>
// )

// Summary.propTypes = {
//   ingredients: PropTypes.number.isRequired,
//   steps: PropTypes.number.isRequired,
//   title: (props, propName) => (typeof props[propName] !== 'string') ? new Error('A title must be a string') : (props[propName].length > 20) ? new Error('title is over 20 characters') : null
// }

// Summary.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: '[recipe]'
// }

class Summary extends React.Component {

  static propTypes = {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: (props, propName) => (typeof props[propName] !== 'string') ? new Error('A title must be a string') : (props[propName].length > 20) ? new Error('title is over 20 characters') : null
  }

  static defaultProps = {
    ingredients: 0,
    steps: 0,
    title: '[recipe]'
  }

  render () {
    const {ingredients, steps, title} = this.props
    return (
      <div className='summary'>
        <h1>{title}</h1>
        <p>
          <span>
            {ingredients.length} |
          </span>
          <span>
            {steps.length} Steps
          </span>
        </p>
      </div>
    )
  }
}

// Summary.propTypes = {
//   ingredients: PropTypes.number.isRequired,
//   steps: PropTypes.number.isRequired,
//   title: (props, propName) => (typeof props[propName] !== 'string') ? new Error('A title must be a string') : (props[propName].length > 20) ? new Error('title is over 20 characters') : null
// }

// Summary.defaultProps = {
//   ingredients: 0,
//   steps: 0,
//   title: '[recipe]'
// }

// const list = () => <Menu recipes={data} title='Delicious Recipes' />

// class AddColorForm extends Component {
//   render() {
//     return (
//       <form onSubmit={e=>e.preventDefault()}>
//         <input type="text" placeholder="color title ..." required/>
//         <input type="color" required/>
//         <button>ADD</button>
//       </form>
//     )
//   }
// }


const list = () => <Summary />
// const color =  <AddColorForm />
export {list}

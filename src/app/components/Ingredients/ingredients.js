import React from "react"
import ReactDOM  from "react-dom"
import {data} from "./data"
import {Recipe} from "./recipe"

const Menu = ({title, recipes}) => (
  <article>
    <header>
      <h1>{title}</h1>
    </header>
    <div className="recipes">
      {recipes.map((recipe, i) => <Recipe key={i} name={recipe.name} ingredients={recipe.ingredients} steps={recipe.steps} />)}
    </div>
  </article>
)

const list = () => <Menu recipes={data} title="Delicious Recipes" />

export {list}

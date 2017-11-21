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

export {Menu}

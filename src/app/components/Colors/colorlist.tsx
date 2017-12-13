import * as React from "react";
import {StarRating} from "./starrating";

const Color = ({title, color, rating = 0}) =>
  <section className="color">
    <h1>{title}</h1>
      <div className="color" style={{backgroundColor: color}}>
    </div>
    <div>
      <StarRating starsSelected={rating} />
    </div>
  </section>;

const ColorList = ({ colors = []}) =>
<div className="color-list">
  {(colors.length === 0) ?
    <p>No Colors Listed. (Add a Color)</p> : colors.map( (color) => <Color key={color.id} {...color} />)
}
</div>;

export {ColorList};

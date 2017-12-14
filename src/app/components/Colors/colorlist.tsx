import * as React from "react";
import {Color} from "./color";
// import {StarRating} from "./starrating";
// import "./styles/Color.scss";
import "./styles/ColorList.scss";

// const Color = ({title, color, rating = 0, onRemove = (f) => f, onRate = (f) => f}) =>
//   <section className="color">
//     <h1>{title}</h1>
//     <button onClick={onRemove}>x</button>
//     <div className="color"
//       style={{backgroundColor: color}}>
//     </div>
//     <div>
//       <StarRating starsSelected={rating} onRate={onRate} />
//     </div>
//   </section>;

const ColorList = ({ colors = [], onRate = (f, a) => f, onRemove= (f) => f}) =>
<div className="color-list">
  {(colors.length === 0) ?
    <p>No Colors Listed. (Add a Color)</p> :
    colors.map( (color) => <Color key={color.id} {...color}
    onRate={(rating) => onRate(color.id, rating)}
    onRemove = {() => onRemove(color.id)}
    />)
}
</div>;

export {Color, ColorList};

import * as React from "react";
import {rateColor, removeColor} from "./actions";
import {Color} from "./color";
import "./styles/ColorList.scss";
import {sortFunction} from "./utils";

// const ColorList = ({store}) => {
//   const {colors, sort} = store.getState();
//   const sortedColors = [...colors].sort(sortFunction(sort));
//   return (
//   <div className="color-list">
//     {(colors.length === 0) ?
//       <p>No Colors Listed. (Add a Color)</p> :
//       colors.map( (color) => <Color key={color.id} {...color}
//       onRate={(rating) => store.dispatch(rateColor(color.id, rating))}
//       onRemove = {() => store.dispatch(removeColor(color.id))}
//       />)
//   }
//   </div>
//   );
// };

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

export {ColorList};
/*
const { colors, sort } = store.getState()
    const sortedColors = [...colors].sort(sortFunction(sort))
    */
/*
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
*/

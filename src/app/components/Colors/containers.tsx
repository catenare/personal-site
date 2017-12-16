import * as React from "react";
import { connect } from "react-redux";
import {addColor, rateColor, removeColor, sortColors} from "./actions";
import {AddColorForm} from "./colorform";
import {ColorList} from "./colorlist";
import {SortMenu} from "./sortmenu";
import {sortFunction} from "./utils";

// export const NewColor = (props, {store}) =>
//   <AddColorForm onNewColor={(title, color) => store.dispatch(addColor(title, color))} />;

// export const Menu = (props, {store}) =>
//   <SortMenu sort={store.getState().sort}
//     onSelect={(sortBy) => store.dispatch(sortColors(sortBy))}
//     />;

// export const Colors = (props, {store}) => {
//   const {colors, sort} = store.getState();
//   const sortedColors = [...colors].sort(sortFunction(sort));
//   return (
//     <ColorList colors={sortedColors}
//     onRemove={(id) => store.dispatch(removeColor(id))}
//     onRate={(id, rating) => store.dispatch(rateColor(id, rating))} />

//   );
// };

export const NewColor = connect(
  null,
  (dispatch) =>
      ({
          onNewColor(title, color) {
              dispatch(addColor(title, color));
          },
      }),
)(AddColorForm);

export const Menu = connect(
  (state) =>
      ({
          sort: state.sort,
      }),
  (dispatch) =>
      ({
          onSelect(sortBy) {
              dispatch(sortColors(sortBy));
          },
      }),
)(SortMenu);

export const Colors = connect(
  (state) =>
      ({
          colors: [...state.colors].sort(sortFunction(state.sort)),
      }),
  (dispatch) =>
      ({
          onRemove(id) {
              dispatch(removeColor(id));
          },
          onRate(id, rating) {
              dispatch(rateColor(id, rating));
          },
      }),
)(ColorList);

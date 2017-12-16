import * as React from "react";
import { sortColors } from "./actions";

const options = {
  date: "SORTED_BY_DATE",
  rating: "SORTED_BY_RATING",
  title: "SORTED_BY_TITLE",
};

const SortMenu = ({ sort = "SORTED_BY_DATE", onSelect = (f) => f}) =>
<nav className="menu">
    <h1>Sort Colors</h1>
    {Object.keys(options).map((item, i) =>
        <a key={i}
           href="#"
           className={(sort === options[item]) ? "selected" : null}
           onClick={(e) => {
               e.preventDefault();
               onSelect(options[item]);
           }}>{item}</a>,
    )}
</nav>;

export {SortMenu};

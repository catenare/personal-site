import * as React from "react";
import C from "./actionTypes";
import FilterLink from "./FilterLink";

const Footer = () => (
  <p>
    Show: {" "}
    <FilterLink filter = {C.SHOW_ALL}> ALL </FilterLink> {", "}
    <FilterLink filter = {C.SHOW_ACTIVE}> Active </FilterLink> {", "}
    <FilterLink filter = {C.SHOW_COMPLETED}> Completed </FilterLink>
  </p>
);

export default Footer;

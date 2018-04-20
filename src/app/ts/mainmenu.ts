export const showMenu = (selector) => {

  if ( document.readyState === "complete" ) {
    setMenu(selector);
  }

  document.addEventListener(
    "DOMContentLoaded", () => setMenu(selector), false
  );
};

const setMenu = (selector) => {
  let toggleState = false;
  const menu = document.getElementsByClassName(selector)[0];
  menu.className += " hide-menu";
  const baseState = menu.className;

  window.addEventListener(
    "resize", () => {
      toggleState = false;
      setBaseState(menu, baseState, toggleState);
    },
  ); // listen to resize

  menu.addEventListener("click", (e) => {
    toggleState = !toggleState;
    setBaseState(menu, baseState, toggleState);
  });
};

const setBaseState = (menu, baseState, toggleState) => {
  if (toggleState) {
    menu.className += " open-menu";
  } else {
    menu.className = baseState;
  }
};

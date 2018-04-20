export const showMenu = (selector) => {

  if ( document.readyState === "complete" ) {
    setMenu(selector);
  }

  document.addEventListener( "DOMContentLoaded", () => setMenu(selector), false );
};

const setMenu = (selector) => {
  let toggleState = false;
  const menu = document.getElementsByClassName(selector)[0];

  menu.className += " hide-menu";
  const baseState = menu.className;

  menu.addEventListener("click", (e) => {
    if (toggleState) {
      menu.className = baseState;
      toggleState = false;
    } else {
      menu.className += " open-menu";
      toggleState = true;
    }
  });
};

const myDoc = document.querySelector("body");

const SetScroll  = (e: any): any => {
  const scrollPos: number = window.scrollY;

  if (scrollPos <= 70) {
    myDoc.className = "";
  }

  if (scrollPos > 70) {
    myDoc.className = "sticky-shrinknav-wrapper";
  }
};

export {SetScroll};

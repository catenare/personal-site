import {connect} from "react-redux";
import Pages from "../../Pages/pages";

const PageList = connect(
  (state) => ({
    isLoaded: state.pages.loaded,
    pages: state.pages.pages,
  }),
  null,
)(Pages);

export default PageList;

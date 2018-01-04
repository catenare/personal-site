import * as React from "react";
import * as actions from "../store/actions/actions";
import Page from "./page";

class Pages extends React.Component<any, any> {

  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    this.props.dispatch(actions.getPages(this.props.url));
  }

  public render() {
    const {isLoaded, pages} = this.props;
    if (isLoaded) {
      const pageList = pages.map((page, i) => <Page Page={page} />);
      return (
        <React.Fragment>
          <div>{pageList}</div>
        </React.Fragment>
      );
    } else {
    return (
      <React.Fragment>
        <div>We're getting pages</div>
      </React.Fragment>
      );
    }
  }
}

export default Pages;

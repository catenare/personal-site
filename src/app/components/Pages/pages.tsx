import * as React from "react";
import Page from "./page";

class Pages extends React.Component<any, any> {

  public render() {
    const {isLoaded, pages} = this.props;
    if (isLoaded) {
      const pageList = pages.map((page, i) => <Page Page={page} />);
      return (
        <React.Fragment>
          {pageList}
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

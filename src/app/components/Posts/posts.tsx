import axios from "axios";
import * as React from "react";
import Article from "./featurePost";
import Post from "./post";

// https://api.paseo.org.za/johan/wp-json/wp/v2/posts?_embed
// http://paseo.demo

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    if (this.props.posts.loaded) {
    // const featured = this.props.featured[0];
    const posts = this.props.posts.posts.map((c, i) => <Post post={c} index={i} />);
    return (
      <React.Fragment>
      <div className="grid-x grid-margin-x grid-padding-x">
        <div className="large-9 cell">
              {posts}
        </div>
        {/* <div className="large-3 cell">
          <Article featured={featured} />
        </div> */}
        </div>
        </React.Fragment>
      );
  } else {
    return <div className="loader">Loading...</div>;
  }
  }
}

export default Posts;

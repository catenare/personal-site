import axios from "axios";
import * as React from "react";
import Article from "./featurePost";
import Post from "./post";
import * as actions from "./store/actions";

// https://api.paseo.org.za/johan/wp-json/wp/v2/posts?_embed
// http://paseo.demo

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    // console.log('url', this.props.url);
    // const postUrl = "http://paseo.demo/wp-json/wp/v2/posts?_embed";
    axios.get(this.props.url)
      .then( (response) => {
        this.props.dispatch(actions.setPosts(response.data));
      })
      .catch((e) => console.log("error", e));
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

import axios from "axios";
import * as React from "react";
import * as actions from "../store/actions/actions";
import Article from "./featurePost";
import Post from "./post";
// import * as actions from "./store/actions";

// https://api.paseo.org.za/johan/wp-json/wp/v2/posts?_embed
// http://paseo.demo

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public componentDidMount() {
    this.props.dispatch(actions.getAllPosts(this.props.url));
  }

  public render() {
    if (this.props.posts.loaded) {
    const feature = this.getFeaturedPost(this.props.posts.posts);
    const posts = this.props.posts.posts.map((c, i) => <Post post={c} index={i} />);
    return (
      <React.Fragment>
      <div className="article-row-section">
      <div className="article-row-section-inner">
        <h2 className="article-row-section-header">Post</h2>
        <div className="grid-x grid-padding-x">
          <div className="large-8 cell">
              {posts}
          </div>
          <div className="large-4 cell">
            <Article featured={feature} />
          </div>
        </div>
      </div>
      </div>

        </React.Fragment>
      );
  } else {
    return <div className="loader">Loading...</div>;
  }
  }

  /**
   * Retrieve the latest sticky post or first post if no sticky post.
   * @param posts
   */
  private getFeaturedPost(posts) {

    let post;
    const stickyPosts = posts.filter((p) => p.sticky === true);

    if (stickyPosts.length > 0) {
      post = stickyPosts[0];
    } else {
      post = posts[0];
    }

    return post;
  }
}

export default Posts;

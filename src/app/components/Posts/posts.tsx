import axios from "axios";
import * as React from "react";
import * as actions from "../store/actions/actions";
import Article from "./featurePost";
import Post from "./post";

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.postClicked = this.postClicked.bind(this);
  }

  public componentDidMount() {
    this.props.dispatch(actions.getAllPosts(this.props.url));
  }

  public postClicked(id, e) {
    e.preventDefault();
    this.props.history.push("/post");
  }

  public render() {
    if (this.props.posts.loaded) {
    const feature = this.getFeaturedPost(this.props.posts.posts);
    const posts = this.props.posts.posts.map((c, i) => <Post handleClick={this.postClicked} post={c} index={i} />);
    return (
      <React.Fragment>
      <div className="article-row-section">
      <div className="article-row-section-inner">
        <h2 className="article-row-section-header">Post</h2>
        <div className="grid-x grid-padding-x">
          <Article handleClick={this.postClicked} featured={feature} />
        </div>
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell">
              {posts}
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

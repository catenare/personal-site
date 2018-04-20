import * as React from "react";
import Article from "./featurePost";
import {SiteLoader} from "./loader";
import Post from "./post";

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.postClicked = this.postClicked.bind(this);
  }

  public postClicked(id, e) {
    e.preventDefault();
    this.props.history.push("/post/" + id);
  }

  public render() {
    if (this.props.posts.posts.length > 0) {
    const feature = this.getFeaturedPost(this.props.posts.posts);
    const posts = this.props.posts.posts.filter((p) => p !== feature).map(
      (c, i) => <Post handleClick={this.postClicked} post={c} index={i} />,
    );
    return (
      <React.Fragment>
        <h1>News</h1>
        <Article handleClick={this.postClicked} featured={feature} />
        {posts}
        </React.Fragment>
      );
  } else {
  return (<SiteLoader />);
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

import axios from "axios";
import * as React from "react";
import Article from "./featurePost";
import Post from "./post";

// https://api.paseo.org.za/johan/wp-json/wp/v2/posts?_embed
// http://paseo.demo

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      featured: {},
      loaded: false,
      posts: [],
    };
    this.getPosts = this.getPosts.bind(this);
  }

  public getPosts() {
    // axios.get("https://api.paseo.org.za/johan/wp-json/wp/v2/posts?_embed")
    axios.get("http://paseo.demo/wp-json/wp/v2/posts?_embed")
    .then( (response) => {
      this.setState({posts: response.data});
      this.setState(
        {featured: response.data.filter((p) => p.sticky === true)}
      );
      this.setState({loaded: true});
    } )
    .catch( (e) => console.log("error:", e));
  }

  public componentWillMount() {
    this.getPosts();
  }

  public render() {
    if (this.state.loaded) {
    const featured = this.state.featured[0];
    const posts = this.state.posts.map((c, i) => <Post post={c} index={i} />);
    return (
      <React.Fragment>
      <div className="grid-x grid-margin-x grid-padding-x">
        <div className="large-9 cell">
              {posts}
        </div>
        <div className="large-3 cell">
          <Article featured={featured} />
        </div>
        </div>
        </React.Fragment>
      );
  } else {
    return <div className="loader">Loading...</div>;
  }
  }
}

export default Posts;

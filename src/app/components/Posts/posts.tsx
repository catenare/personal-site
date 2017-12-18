import axios from "axios";
import * as React from "react";
import Article from "./article";
import Post from "./post";
import Content from "./post_data";

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
    return (<div className="grid-x">
        <div className="small-12 large-9 cell">
          <div className="article-row-section">
            <div className="article-row-section-inner">
              <h2 className="article-row-section-header">Blog News</h2>
              {posts}
            </div>
          </div>
        </div>
        <Article featured={featured} />
  </div>);
  } else {
    return <div className="loader">Loading...</div>;
  }
  }
}

export default Posts;

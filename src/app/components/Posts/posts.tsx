import axios from "axios";
import * as React from "react";
import Article from "./article";
import Post from "./post";
import Content from "./post_data";

class Posts extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      posts: [],
    };
  }

  public componentWillMount() {
    // this.setState({posts: Content});
    axios.get("http://paseo.demo/wp-json/wp/v2/posts")
      .then( (response) => {
        this.setState({posts: response.data});
        this.setState({loaded: true});
      } )
      .catch( (e) => console.log("error:", e));
  }

  public render() {
    if (this.state.loaded) {
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
        <Article />
  </div>);
  } else {
    return <div className="loader">Loading...</div>;
  }
  }
}

export default Posts;

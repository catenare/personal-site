import * as React from "react";
import {PageList, PostList} from "./store/containers/containers";

const Blog = (props) => {
  return (
    <React.Fragment>
      <section className="cn-c-blog grid-container cn-l-section">
        <PostList {...props} />
      </section>
      {/*<section className="cn-c-projects grid-container cn-l-section cn-section-internal" id="projects">*/}
        {/*<h1>Pages</h1>*/}
          {/*<section className="grid-x grid-margin-x">*/}
            {/*<PageList {...props} />*/}
          {/*</section>*/}
      {/*</section>*/}
    </React.Fragment>
  );
};

export default Blog;

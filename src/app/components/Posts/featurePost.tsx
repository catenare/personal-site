import * as React from "react";

const article = (props) => {

  if (props && props.featured.loaded) {
    console.log("Feature:", props.featured);
    const featureImage = props.featured.post._embedded["wp:featuredmedia"];
    const dateCreated = new Date(props.featured.post.date).toDateString();
    const feature = props.featured.post;
    return (
      <div className="large-3 cell">
        <div className="card news-card">
            <a href="#">
              <div className="background-card-image">
                  <img src={(featureImage) ? featureImage[0].source_url :
                  "http://placehold.it/640x427"} alt="" />
              </div>
              <div className="image-hover"></div>
            </a>
            <div className="card-section">
              <div className="news-card-tag">
                <a className="label" href="#">category</a></div>
              <div className="news-card-date">
                  <span className="time">{dateCreated}</span> &#8226;
                  <span className="author">{feature._embedded.author[0].name}</span>
              </div>
              <article className="news-card-article">
                <h4 className="news-card-title">
                  <a href="#" dangerouslySetInnerHTML={{__html: feature.title.rendered}}/>
                </h4>
                <p className="news-card-description"
                dangerouslySetInnerHTML={{__html: feature.excerpt.rendered}}/>
              </article>
              <div className="more">
                  <a href="#">Read more</a>
              </div>
        </div>
      </div>
    </div>
    );
} else {
  return (
  <div>Loading...</div>
  );
}
};

export default article;

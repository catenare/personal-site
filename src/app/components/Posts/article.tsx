import * as React from "react";

const article = (props) => {

  const featureImage = props.featured._embedded["wp:featuredmedia"];
  const dateCreated = new Date(props.featured.date).toDateString();
  if (props) {
    console.log("Featured: ", props.featured.title.rendered);
  }
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
                <span className="author">{props.featured._embedded.author[0].name}</span>
            </div>
            <article className="news-card-article">
              <h4 className="news-card-title">
                <a href="#" dangerouslySetInnerHTML={{__html: props.featured.title.rendered}}/>
              </h4>
              <p className="news-card-description" dangerouslySetInnerHTML={{__html: props.featured.excerpt.rendered}}/>
            </article>
            <div className="more">
                <a href="#">Read more</a>
            </div>
      </div>
    </div>
  </div>
  );
};
/*{(featureImage) ? featureImage[0].source_url :
                 "http://placehold.it/640x427"} width="200px" alt="picture of a whale eating a donkey" */
export default article;

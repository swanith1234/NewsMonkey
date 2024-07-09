import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url, published, author } = this.props;

    return (
      <div>
        <div className="card">
          <div
            className="card-body"
            style={{
              height: "20rem",
              overflow: "auto",

              scrollbarWidth: "none",
            }}
          >
            <img src={imageUrl} className="card-img-top  my-2" alt="..." />
            <h5 className="card-title"> {title}</h5>
            <p> {description}...</p>
          </div>

          <div
            className="time text-secondary"
            style={{
              fontSize: "1vw",
              maxHeight: "2rem",
              overflow: "auto",
              scrollbarWidth: "none",
            }}
          >
            {parseInt(new Date().getHours()) - parseInt(published.slice(9, 11))}{" "}
            hours ago by {author}
          </div>
          <a href={url} className="btn btn-primary mb-2 mx-2">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

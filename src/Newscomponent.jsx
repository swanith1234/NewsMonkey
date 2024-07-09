import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newscomponent extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    console.log("I am component");
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=12d98b805c6545dc85619375bcd981e5&page=${this.state.page}&pageSize=16`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
  }

  fetchData = async () => {
    console.log("fetch" + this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=12d98b805c6545dc85619375bcd981e5&page=${this.state.page}&pageSize=16`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      page: this.state.page + 1,
    });
    console.log("fetch data");
    console.log("fetch 2");
  };

  render() {
    return (
      <InfiniteScroll
        dataLength={this.state.articles.length} //This is important field to render the next data
        next={this.fetchData}
        hasMore={this.state.articles.length < this.state.totalResults}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">
          <div className="row g-3">
            {this.state.articles.map((element, index) => (
              <div className="col-md-3 mt-4" key={element.url + index}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  url={element.url}
                  published={element.publishedAt}
                  author={element.author}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    );
  }
}

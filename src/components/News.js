import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News=(props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const Capitalize=(str)=> {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }


  const  updateNews = async() => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);

    props.setProgress(100);

  }
  useEffect(()=>
  {
    // document.title = Capitalize(props.category);
    updateNews();

  }, [])


  const handlePrevClick = async () => {
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=d397f496fcf048f38ee129955480b6a1&page=${this.state.page-1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page-1,
    //   articles: parsedData.articles,
    //   loading:false});
    setPage(page-1);
    updateNews();
  };
  const handleNextClick = async () => {
    // if(!(this.state.page+1>Math.ceil(this.state.totalResults/props.pageSize))){
    // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=d397f496fcf048f38ee129955480b6a1&page=${this.state.page+1}&pageSize=${props.pageSize}`;
    // this.setState({loading:true});
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({
    //   page: this.state.page+1,
    //   articles: parsedData.articles,
    //   loading:false});
    // }
    setPage(page+1);
    updateNews();
  };
  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
      let data = await fetch(url);
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    
  };
    return (
      <>
        <h1 className="text-center display-6" style={{ margin: "35px 0px", marginTop: "90px" }}>
          NewsMonkey - Top Headlines from {Capitalize(props.category)} 
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row container">
          {articles.map((article) => {
              return (
                <div className="col-md-4" key={article.url}>
                  <NewsItem
                    title={article.title ? article.title.slice(0, 40) : ""}
                    description={
                      article.description
                        ? article.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={article.urlToImage}
                    newsUrl={article.url}
                    author={article.author}
                    date={article.publishedAt}
                    source={article.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-4"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / props.pageSize)
            }
            type="button"
            className="btn btn-dark my-4"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div> */}
      </>
    );
  }


News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;

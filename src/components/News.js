import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps={
      country: 'in',
      pageSize: 8,
      category: 'general'
    }
    static propTypes={
      country :PropTypes.string,
      pageSize : PropTypes.number,
      category: PropTypes.string
    }
constructor(){
  super();
  this.state = {
    articles : [],
    loading: true,
    page:1
  }
}
async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d397f496fcf048f38ee129955480b6a1&page=1&pageSize=${this.props.pageSize}`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults, loading:false});
}

handlePrevClick= async ()=>{
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d397f496fcf048f38ee129955480b6a1&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page-1,
    articles: parsedData.articles,
    loading:false});
}
handleNextClick= async ()=>{
  if(!(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize))){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=d397f496fcf048f38ee129955480b6a1&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
  this.setState({loading:true});
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page+1,
    articles: parsedData.articles,
    loading:false});
  }
}
  render() {
    return (

      <div className ="container">
        <h1 className='text-center display-6' style={{margin:"35px 0px"}}>NewsMonkey - Top Headlines</h1>
{        this.state.loading && <Spinner/>}
        <div className="row container">
          {!this.state.loading && this.state.articles.map((article) =>{
              return <div className="col-md-4" key={article.url}>        
              <NewsItem title = {article.title?article.title.slice(0,40):""} description = {article.description?article.description.slice(0,88):""} imageUrl={article.urlToImage} newsUrl={article.url}/>
              </div>  
          })}
            
        
  
        </div>
        <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark my-4" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark my-4" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
        
    

      </div>

    )
  }
}

export default News

import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {

constructor(){
  super();
  this.state = {
    articles : [],
    loading: false,
    page:1
  }
}
async componentDidMount(){
  let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=d397f496fcf048f38ee129955480b6a1&page=1&pageSize=20";
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({articles: parsedData.articles, totalResults:parsedData.totalResults});
}

handlePrevClick= async ()=>{
  if(this.state.page-1<Math.ceil(this.state.totalResults/20)){}
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d397f496fcf048f38ee129955480b6a1&page=${this.state.page-1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page-1,
    articles: parsedData.articles});}
}
handleNextClick= async ()=>{
  if(this.state.page+1>Math.ceil(this.state.totalResults/20)){}
  else{
  let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=d397f496fcf048f38ee129955480b6a1&page=${this.state.page+1}&pageSize=20`;
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page: this.state.page+1,
    articles: parsedData.articles});}
}
  render() {
    return (
      <div className ="container">
        <h2 className='display-6'>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((article) =>{
              return <div className="col-md-4" key={article.url}>        
              <NewsItem title = {article.title?article.title.slice(0,40):""} description = {article.description?article.description.slice(0,88):""} imageUrl={article.urlToImage} newsUrl={article.url}/>
              </div>  
          })}
            
        
  
        </div>
        <div className='container d-flex justify-content-between'>
          <button type="button" class="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

        </div>
        
    

      </div>

    )
  }
}

export default News

import React, { Component } from 'react'

export class NewsItem extends Component {
  static propTypes = {

  }

  render() {
    let {title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card" >
        <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/02/05/1600x900/NASA_discovers_potentially_habitable_super-Earth_1707109205359_1707109211354.png":imageUrl} height="224px" className="card-img-top" alt="..." />
        <div className="card-body" style={{maxHeight:"278px", minHeight:"278px"}}>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {date} 3 min age</small></p>
            <a rel = "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  }
}

export default NewsItem

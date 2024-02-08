const NewsItem = (props) => {

  
    let {title, description, imageUrl, newsUrl, author, date, source } = props;
    let d = new Date(date);
    return (
      <div className="my-3" >
        <div className="card" >
          <div>
          <span className=" badge    bg-danger" style={{position:'absolute',right:'0',justifyContent:'flex-end', display:'flex'}}>{source}<span className="visually-hidden">unread messages</span>
          </span>

          </div>
        <img src={!imageUrl?"https://www.hindustantimes.com/ht-img/img/2024/02/05/1600x900/NASA_discovers_potentially_habitable_super-Earth_1707109205359_1707109211354.png":imageUrl} height="224px" className="card-img-top" alt="..." />
        <div className="card-body" style={{maxHeight:"278px", minHeight:"300px"}}>
            <h5 className="card-title">{title}  </h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {!author?"unknown":author} on {d.toGMTString()}</small></p>
            <a rel = "noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
        </div>
      </div>
    )
  
}

export default NewsItem

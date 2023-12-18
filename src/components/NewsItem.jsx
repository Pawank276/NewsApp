import React from 'react'

const NewsItem = ({ item }) => {
    return (
        <div className="col-md-4 mb-2 mt-2">
            <div className=' card bg-dark'>
                <img src={!item.urlToImage ? "image/user.png" : item.urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white">{item.title}</h5>
                    <p className="card-text  text-white">{item.description}</p>
                    <a href={item.url} target='_blank' className="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
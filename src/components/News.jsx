import React from 'react'
import { useSelector } from 'react-redux'
import NewsItem from './NewsItem'

const News = () => {
    const NewsItems = useSelector(store => store.news);
    return (
        <div className="container mb-4">
            <h2>Top Handlines</h2>
            <div className="row">
                <div className="col-md-6">
                    {NewsItems.map(item => (<NewsItem key={item.description} item={item} />))}
                </div>
            </div>
        </div>
    )
}

export default News
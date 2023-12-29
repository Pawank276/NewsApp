import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewsItemSliceActions } from '../store/NewsItemSlice';
import axios from 'axios'
import NewsItem from "../components/NewsItem"
import LoadingSpinner from '../components/LoadingSpinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'
const Home = ({ country, pageSize, category }) => {
    const newsItems = useSelector(store => store.news);
    const [fetching, setFetching] = useState(true)
    const [progress, setProgress] = useState(10)
    const [page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const dispatch = useDispatch();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    useEffect(() => {
        setPage(1);
        document.title = `${capitalizeFirstLetter(category)} - NewsApp`;
        setProgress(30);
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e6ad4701e514494aa59a8c90f60e1faa&page=${page}&pageSize=${pageSize}`)
            .then((item) => {
                setProgress(70);
                dispatch(NewsItemSliceActions.addInitialItems(item.data.articles))
                settotalResults(item.data.totalResults);
                setProgress(100);
                setFetching(false)
            });
    }, [])

    const fetchMoreData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e6ad4701e514494aa59a8c90f60e1faa&page=${page + 1}&pageSize=${pageSize}`)
            .then((item) => {
                dispatch(NewsItemSliceActions.addInitialItems(newsItems.concat(item.data.articles)))
                settotalResults(item.data.totalResults);
                setPage(page + 1);
            });
    };
    return (
        <>
            <LoadingBar
                height={3}
                color='#f11946'
                progress={progress}
            />
            <h1 className='text-center fw-bold text-primary' style={{ marginTop: '90px' }}>Top {capitalizeFirstLetter(category)} Handlines</h1>
            {fetching && <LoadingSpinner />}
            <InfiniteScroll
                dataLength={newsItems.length}
                next={fetchMoreData}
                hasMore={newsItems.length !== totalResults}
                loader={<LoadingSpinner />}
            >
                <div className="container">
                    <div className="row">
                        {newsItems.map((item, i) => <NewsItem key={i} item={item} />)}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Home
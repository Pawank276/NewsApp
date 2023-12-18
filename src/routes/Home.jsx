import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NewsItemSliceActions } from '../store/NewsItemSlice';
import { PageNoSliceActions } from '../store/PageNoSlice';
import axios from 'axios'
import NewsItem from "../components/NewsItem"
import LoadingSpinner from '../components/LoadingSpinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'
const Home = ({ country, category }) => {
    const newsItems = useSelector(store => store.news);
    const page = useSelector(store => store.page);
    const [fetching, setFetching] = useState(true)
    const [progress, setProgress] = useState(10)
    const [totalResults, settotalResults] = useState(0)
    const dispatch = useDispatch();

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const fetchItems = () => {
        setProgress(30);
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e6ad4701e514494aa59a8c90f60e1faa&page=${page.pageNo}&pageSize=${page.pageSize}`).then((item) => {
            setProgress(70);
            dispatch(NewsItemSliceActions.addInitialItems(item.data.articles))
            settotalResults(item.data.totalResults);
            setProgress(100);
            setFetching(false)
        });
    }
    useEffect(() => {
        document.title = `${capitalizeFirstLetter(category)} - NewsApp`;
        const controller = new AbortController();
        const signal = controller.signal;
        fetchItems();
        return () => {
            controller.abort(signal);
        }
    }, [fetching])

    const fetchMoreData = () => {
        axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=e6ad4701e514494aa59a8c90f60e1faa&page=${page.pageNo + 1}&pageSize=${page.pageSize}`)
            .then((item) => {
                dispatch(PageNoSliceActions.next())
                dispatch(NewsItemSliceActions.addInitialItems(newsItems.concat(item.data.articles)))
                settotalResults(item.data.totalResults);
                setFetching(false)

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
                        {newsItems.map(item => <NewsItem key={item.title} item={item} />)}
                    </div>
                    {page.pageNo > page.pageNo + 1 &&
                        <div className="alert alert-success bg-success " role="alert">
                            <h4 className="alert-heading text-center text-white fw-bolder">Well done!</h4>
                            <p className='text-center'><b>Yay! You have seen it all</b></p>
                            <hr />
                        </div>
                    }
                </div>
            </InfiniteScroll>
        </>
    )
}

export default Home
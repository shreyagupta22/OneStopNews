// import React, { useEffect, useState } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



// const NewsComponent = (props) => {

//   const [articles, setArticles] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [page, setPage] = useState(1)
//   const [totalResults, setTotalResults] = useState(0)

//   const capitalize = (string) => {
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }

//   const updateNews = async () => {
//     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
//     setLoading(true)
    
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(parsedData.articles)
//     setTotalResults(parsedData.totalResults)
//     setLoading(false)

//   }
//   useEffect(() => {
//     document.title = `NewsMonkey-${capitalize(props.category)}`
//     updateNews()
//   }, [])



//   const handlePrevClick = async () => {
//     setPage(page - 1)
//     updateNews()
//   }


//   const handleNextClick = async () => {
//     if (page + 1 > Math.ceil(totalResults / props.pageSize)) {

//     }
//     else {
//       setPage(page + 1)

//       updateNews()
//     }


//   }

//   const fetchMoreData = async () => {

//     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=dacd4e61a3724b56b51968c7498ba86c&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}`;
//     setPage(page + 1)

//     let data = await fetch(url);
//     let parsedData = await data.json();
//     setArticles(articles.concat(parsedData.articles))
//     setTotalResults(parsedData.totalResults)

//   }


//   return (
//     <>
//       <h1 className='text-center ' style={{ textDecoration: "underline", marginTop: '90px' }}>OneStopNews- Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>
//       {loading && <Spinner />}

//       <InfiniteScroll
//         dataLength={articles.length}
//         next={fetchMoreData}
//         hasMore={articles.length !== totalResults}
//         loader={<Spinner />}
//       >
//         <div className="container my-4">
//           <div className="row">
//             {articles.map((element) => {
//               return <div className="col-md-4" key={element.url} >
               
//                 <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} sourceName={element.source.name} />
//               </div>
//             })}
//           </div>
//         </div>
//       </InfiniteScroll>


//     </>
//   )

// }

// NewsComponent.defaultProps = {
//   pageSize: 9,
//   country: "in"
// }
// NewsComponent.propTypes = {
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
// }
// export default NewsComponent

import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

const NewsComponent = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}&category=${props.category}`;
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    document.title = `NewsMonkey - ${capitalize(props.category)}`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}&category=${props.category}`;
    setPage(page + 1);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <h1 className="text-center" style={{ textDecoration: "underline", marginTop: '90px' }}>
        OneStopNews - Top {capitalize(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container my-4">
          <div className="row g-4">
            {articles.map((element) => (
              <div className="col-md-4 d-flex align-items-stretch" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  sourceName={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

NewsComponent.defaultProps = {
  pageSize: 9,
  country: "in"
};

NewsComponent.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired
};

export default NewsComponent;

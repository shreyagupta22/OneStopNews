// import React from 'react'

// const NewsItem =(props)=> {
  
//     let { title, description, imageUrl, newsUrl } = props;
//     return (
//       <div >
//         {/* <div className="card my-3" style={{width: "18rem"}}> */}
//         <div className="card my-3" >
//           <span className="position-absolute top-0 translate-middle badge bg-dark" style={{borderRadius : "0px", zIndex: 10, left: "85%" ,fontSize: "0.8em"}}>
//             {props.sourceName}

//           </span>
//           <img src={imageUrl ? imageUrl : "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"} className="card-img-top" alt="Img" />
//           <div className="card-body">
//             <h5 className="card-title">{title}</h5>
//             <p className="card-text "><small className="text-body-secondary">By {props.author ? props.author : "Unknown Author"} at {new Date(props.date).toGMTString()}</small></p>
//             <p className="card-text"> {description} </p>
//             <div className="text-center">
//               <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-dark mt-4">Read More</a>

//             </div>
//           </div>
//         </div>

//       </div>
//     )
  
// }
// export default NewsItem

// import React from 'react';

// const NewsItem = (props) => {
//   const { title, description, imageUrl, newsUrl, sourceName, author, date } = props;

//   return (
//     <div className="card h-100 d-flex flex-column position-relative">
//       <span
//         className="position-absolute top-0 translate-middle badge bg-dark"
//         style={{ borderRadius: "0px", zIndex: 10, left: "85%", fontSize: "0.8em" }}
//       >
//         {sourceName}
//       </span>

//       <img
//         src={imageUrl || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"}
//         className="card-img-top"
//         alt="News"
//         style={{ height: "180px", objectFit: "cover" }}
//       />

//       <div className="card-body d-flex flex-column">
//         <h5 className="card-title" style={{ minHeight: "3em" }}>{title}</h5>
//         <p className="card-text">
//           <small className="text-muted">
//             By {author || "Unknown Author"} at {new Date(date).toGMTString()}
//           </small>
//         </p>
//         <p className="card-text" style={{ flexGrow: 1 }}>{description}</p>
//         <div className="text-center mt-auto">
//           <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark mt-2">
//             Read More
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewsItem;


import React, { useState, useEffect } from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, sourceName, author, date }) => {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("bookmarks");
    if (saved) {
      const parsed = JSON.parse(saved);
      const exists = parsed.some(item => item.url === newsUrl);
      setBookmarked(exists);
    }
  }, [newsUrl]);

  const toggleBookmark = () => {
    const saved = localStorage.getItem("bookmarks");
    const bookmarks = saved ? JSON.parse(saved) : [];

    if (bookmarked) {
      const updated = bookmarks.filter(item => item.url !== newsUrl);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setBookmarked(false);
    } else {
      const newBookmark = { title, description, imageUrl, newsUrl, sourceName, author, date };
      bookmarks.push(newBookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      setBookmarked(true);
    }
  };

  return (
    <div className="card h-100 d-flex flex-column position-relative">
      {/* Source badge */}
      <span className="position-absolute top-0 start-0 badge bg-dark" style={{ borderRadius: "0px", fontSize: "0.8em", zIndex: 10 }}>
        {sourceName}
      </span>

      {/* Bookmark icon */}
      <span
        className="position-absolute top-0 end-0 p-2"
        style={{ cursor: 'pointer', zIndex: 10, fontSize: "1.4em", color: bookmarked ? 'red' : 'gray' }}
        onClick={toggleBookmark}
        title={bookmarked ? "Remove Bookmark" : "Add Bookmark"}
      >
        {bookmarked ? '❤️' : '🤍'}
      </span>

      {/* Image */}
      <img
        src={imageUrl || "https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png"}
        className="card-img-top"
        alt="News"
        style={{ height: "180px", objectFit: "cover" }}
      />

      {/* Content */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ minHeight: "3em" }}>{title}</h5>
        <p className="card-text">
          <small className="text-muted">By {author || "Unknown Author"} at {new Date(date).toGMTString()}</small>
        </p>
        <p className="card-text" style={{ flexGrow: 1 }}>{description}</p>
        <div className="text-center mt-auto">
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark mt-2">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

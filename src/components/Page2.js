// import React, { useState } from "react";
// import Navbar from "./Navbar";
// import Content from "./Content";
// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
//   useLocation,
// } from "react-router-dom";

// export default function Page2() {
//   const articlesPerPage = 6;
//   const articles = [
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 1,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 2,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 3,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 4,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 5,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 6,
//     },
//     {
//       img: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17D0E/production/_130105579_ashespreviewv2.jpg",
//       url: "/videos/vid1.mp4",
//       no: 7,
//     },
//     {
//       img: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17D0E/production/_130105579_ashespreviewv2.jpg",
//       url: "/videos/vid1.mp4",
//       no: 8,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 9,
//     },
//     {
//       img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
//       url: "/videos/vid1.mp4",
//       no: 10,
//     },
//   ];

//   const VideoPage = () => {
//     const location = useLocation();
//     const { movieurl } = location.state;
//     return (
//       <div>
//         <div className="video-container">
//           <video controls className="responsive-video">
//             <source src={movieurl} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     );
//   };
//   const [currentPage, setCurrentPage] = useState(1);

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const startIndex = (currentPage - 1) * articlesPerPage;
//   const endIndex = startIndex + articlesPerPage;
//   const displayedArticles = articles.slice(startIndex, endIndex);

//   const isPreviousDisabled = currentPage === 1;
//   const isNextDisabled = endIndex >= articles.length;

//   return (
//     <div>
//       <Navbar />
//       <br />
//       <div className="container">
//         <div className="container d-flex justify-content-between">
//           <button
//             className="btn btn-dark"
//             onClick={handlePreviousPage}
//             disabled={isPreviousDisabled}
//           >
//             Previous
//           </button>
//           <button
//             className="btn btn-dark"
//             onClick={handleNextPage}
//             disabled={isNextDisabled}
//           >
//             Next
//           </button>
//         </div>
//         <div className="row">
//           <Router>
//             <Switch>
//               <Route path="/video-page" component={VideoPage} />

//               <Route path="/">
//                 {displayedArticles.map((element) => (
//                   <div className="col-md-4" key={element.no}>
//                     <Content imageurl={element.img} movieurl={element.url} />
//                   </div>
//                 ))}
//               </Route>
//             </Switch>
//           </Router>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import { Link, BrowserRouter as Router, Route, Switch, useLocation, useHistory} from "react-router-dom";
import Navbar from "./Navbar";
import Content from "./Content";
import {
  MDBIcon
} from 'mdb-react-ui-kit';

const Page2 = () => {
  const articlesPerPage = 6;
  const articles = [
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 1,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 2,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 3,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 4,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 5,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 6,
    },
    {
      img: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17D0E/production/_130105579_ashespreviewv2.jpg",
      url: "/videos/vid1.mp4",
      no: 7,
    },
    {
      img: "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17D0E/production/_130105579_ashespreviewv2.jpg",
      url: "/videos/vid1.mp4",
      no: 8,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 9,
    },
    {
      img: "https://talksport.com/wp-content/uploads/sites/5/2023/06/LB-tsport-freddie-copy.jpg?strip=all&quality=100&w=1500&h=1000&crop=1",
      url: "/videos/vid1.mp4",
      no: 10,
    },
  ];

  const VideoPage = () => {
    const location = useLocation();
    const { movieurl } = location.state;
    const history = useHistory(); 

    const handleBack = () => {
      history.goBack(); // Go back to the previous page
    };

    const handleDownload = () => {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = movieurl;
      link.download = 'video.mp4';
      link.click();
    };
    return (
      <div>
        <br />
        <br />
        <div className="container">
        <div className='d-flex justify-content-start'><button className="bn632-hover bn21" onClick={handleBack}><MDBIcon fas icon="arrow-left" /> &nbsp;&nbsp;&nbsp; Back</button></div>
        <center><h1 className="down">Scroll down to download this video</h1></center>
        <div className="video-container">
          <video controls className="responsive-video">
            <source src={movieurl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div><center><button className="bn53" onClick={handleDownload}><MDBIcon fas icon="arrow-down" /> &nbsp;&nbsp;&nbsp; Download</button></center></div>
        </div>
      </div>
    );
  };

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = endIndex >= articles.length;

  return (
    <div className="pagebody">
      <Router>
        <Switch>
          <Route exact path="/Page2">
            <Navbar />
            <br />
            <div className="container">
              <div className="container d-flex justify-content-between">
                <button className="bn632-hover bn21 btn btn-dark" onClick={handlePreviousPage} disabled={isPreviousDisabled}><MDBIcon fas icon="arrow-left" /> &nbsp;&nbsp;&nbsp; Previous</button>
                <button className="bn632-hover bn21 btn btn-dark" onClick={handleNextPage} disabled={isNextDisabled}>Next &nbsp;&nbsp;&nbsp;<MDBIcon fas icon="arrow-right" /></button>
              </div>
              <div className="row">
                {displayedArticles.map((element) => (
                  <div className="col-md-4" key={element.no}>
                    <Content imageurl={element.img} movieurl={element.url} />
                  </div>
                ))}
              </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button className="bn632-hover bn21 btn btn-dark" onClick={handlePreviousPage} disabled={isPreviousDisabled}><MDBIcon fas icon="arrow-left" /> &nbsp;&nbsp;&nbsp; Previous</button>
                <button className="bn632-hover bn21 btn btn-dark" onClick={handleNextPage} disabled={isNextDisabled}>Next &nbsp;&nbsp;&nbsp;<MDBIcon fas icon="arrow-right" /></button>
              </div>
          </Route>
          <Route path="/video-page" component={VideoPage} />
        </Switch>
      </Router>
      
    </div>
  );
};

export default Page2;
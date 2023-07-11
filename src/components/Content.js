import React from "react";
import { Link } from "react-router-dom";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Content(props) {
  const { imageurl, movieurl } = props;

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="items col-md">
            <div className="bg-image">
              <img src={imageurl} className="img-fluid" alt="Sample" />
              <div className="mask">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <Link to={{ pathname: "/video-page", state: { movieurl } }}>
                    <p className="contenticon text-white mb-0">
                      <MDBIcon far icon="play-circle" />
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react'
import {
    MDBBtn,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import Page2 from './Page2';
  import {Link } from 'react-router-dom';
  import Navbar from './Navbar';
  import Footer from './Footer';

export default function Header() {
  return (
    <div>
      <Navbar/>
      <div id='intro-example' className='p-5 text-center bg-image'>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className=' headertitle mb-4'>Watch <span>WEB SERIES</span> for free</h1>
              {/* <button class="button-32" role="button" onClick={handleClick}> <span><MDBIcon far icon="play-circle" /></span> Watch Now</button> */}
              <Link to="/page2">
                <button className="button-32" role="button">
                  <span><MDBIcon far icon="play-circle" /></span> Watch Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <center><h1 className='contact'>For any business or promotion contact me <span><MDBIcon fas icon="envelope" /></span> ajatinpatel@gmail.com</h1></center>
      <Footer/>
    </div>
  )
}



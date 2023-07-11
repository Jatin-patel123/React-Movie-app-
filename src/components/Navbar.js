import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className="mainnav" expand='lg' light >
      <MDBContainer fluid>
      <MDBNavbarBrand href='/'> <img src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp' height='30' alt='' loading='lazy'/></MDBNavbarBrand>
        <MDBNavbarToggler aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' onClick={() => setShowBasic(!showBasic)}><MDBIcon icon='bars' fas /></MDBNavbarToggler>
        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav>
            <MDBNavbarItem className='nav'>
              <MDBNavbarLink className='button-21' href='/'>Home</MDBNavbarLink>
            </MDBNavbarItem>
            {/* <MDBNavbarItem className='nav'>
              <MDBNavbarLink className='button-21' href='#'>Cat1</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='nav'>
              <MDBNavbarLink className='button-21' href='#'>Cat2</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='nav'>
              <MDBNavbarLink className='button-21' href='#'>Cat3</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className='nav'>
              <MDBNavbarLink className='button-21' href='#'>Cat4</MDBNavbarLink>
            </MDBNavbarItem> */}
            {/* <MDBNavbarItem className='nav'>
              <MDBNavbarLink href='/' tabIndex={-1} aria-disabled='true'>About</MDBNavbarLink>
            </MDBNavbarItem> */}
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}
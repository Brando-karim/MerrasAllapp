import React from 'react';
import { Link } from 'react-router-dom';
import "./NotFound.css"

const Moon = '/assets/images/moon.png';
const Rocket = '/assets/images/rocket.png';

function Content(props) {
return (
  
  <div className="content ">
    <div className="header row py-2 bg-dark text-light">
            <div className="col">
                <span className="header-logo ">404 NOT FOUND</span>
            </div>
        </div>
    <div className='row'>
      <div className=" imgm content-col-left col-md p-5 align-self-center">
          <img src={ Moon } alt="" className="img-fluid"/>
      </div>
      <div className="content-col-right col-md p-5 align-self-center text-light">
          <h1 className="content-title text-left">404 Not Found</h1>
          <p className="text-left">We sorry, the page you are looking for does not appear. Please back home by pressing button bellow.</p>
          <Link to="/">Go back to the homepage</Link>
          <img src={ Rocket } alt="" className="img-fluid"/>
      </div>
      </div>
      <div className="footer row py-2 bg-dark text-light">
            <div className="col text-center">
                <span>Mohamed Merras</span>
            </div>
        </div>
  </div>
);
}

export default Content;

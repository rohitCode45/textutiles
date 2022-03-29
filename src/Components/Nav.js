import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function Nav(props) { 
  return (
    <div>
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/About">{props.about}</Link>
              </li>
              
            </ul>
        </div>
        <div className={`form-check mx-3 form-switch text-${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable  Dark Mode</label>
          </div>
</div>
      </nav>
    </div>
   
  )
}


Nav.propTypes = {
  title: propTypes.string.isRequired,
  about: propTypes.string.isRequired
}

Nav.defaultProps = {
  title : "set title here",
  about: "About Text Here" 
}


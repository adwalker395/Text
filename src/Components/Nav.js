import React from 'react'
import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
export default function Nav(props) {
  // let location=useLocation();
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{textAlign:'center'}}>
        <li className="nav-item" >
          <a className="nav-link" aria-current="page" href="/" >Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about" >{props.aboutText}</a>
        </li> */}
      </ul>
    
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode==='light'?'Enable Dark Mode':'Disable Dark Mode'}`}</label>
</div>
    </div>
  </div>
</nav>
  )
}
Nav.propTypes={
  title: PropTypes.string.isRequired,
  About: PropTypes.string
}
Nav.defaultProps={
  title: 'TextUtils',
  aboutText: 'About'
};
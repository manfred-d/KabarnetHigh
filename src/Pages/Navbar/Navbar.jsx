import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
// import { Link } from 'react';

function Navbar() {
  return (
    <>
      <header className="">
        <nav className="header">
          <div className="logo">
            <a href="/">Kabarnet.</a>
          </div>
          <div id="navbar" className="nav-menu">
            <ul>
              <li className="menu-item active">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link>
                  About Us <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to={"/about"}>About</Link>
                  </li>
                  <li>
                    <Link to="/history">History</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link className="">
                  Academics <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/performance">Performance</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link className="outer-shadow ">
                  Departments <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/ict">ICT</Link>
                  </li>
                  <li>
                    <Link to="/math">Math Dept</Link>
                  </li>
                  <li>
                    <Link to="/english">English Dept</Link>
                  </li>
                  <li>
                    <Link to="/science">Science Dept</Link>
                  </li>
                  <li>
                    <Link to="/sports">Sports</Link>
                  </li>
                  <li>
                    <Link to="/boarding">Boarding Dept</Link>
                  </li>
                  <li>
                    <Link to="/guidingandcounseling">Quiding and Counseling</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/library" className="outer-shadow ">
                  Library
                </Link>
              </li>
              <li className="menu-item">
                <Link className="outer-shadow ">
                  Clubs & Societies <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/cu">C.U</Link>
                  </li>
                  <li>
                    <Link to="/ycs">YCS</Link>
                  </li>
                  <li>
                    <Link to="/muslims">Muslims</Link>
                  </li>
                  <li>
                    <Link to="/music">Music</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/contacts" className="outer-shadow ">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar
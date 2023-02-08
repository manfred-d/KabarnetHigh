
import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
// import { Link } from 'react';

function Navbar() {

  const [showNavbar, setshowNavbar] = useState(false);

  
  function handleOnClick() {
    // document.querySelector(".nav-menu").classList.toggle("active");
    setshowNavbar(!showNavbar);
    document.querySelector("body").classList.toggle("active");
  }
  // remove body active class of large screen
  // if (window.screen.width > 991) {
  //   const body = document.querySelector("body");
  //   if (body.classList.contains('active')) {
  //     body.classList.remove('active');
  //   }
  // }
  
  // function navitems(){
    
  //   const navlinks = document.querySelectorAll(".nav-link").forEach(dropdownfn);

  //   function dropdownfn(dropDown) {
  //     console.log(dropDown.classList.contains('nav-link') === true);
  //   }
  //   console.log(navlinks);
     
  //   };
  useEffect(() => {
    navitems();
  });
  function navitems(){
    const navlinks = document.querySelectorAll(".menu-item");
    const links = document.querySelectorAll(".dropdown-item");
    const linksArray = Array.from(navlinks);

    linksArray.forEach(button =>{
      button.addEventListener('click',(e) =>{
        if(!button.classList.contains('dropdown')){
          CloseAnotherBtn(button);
          button.classList.toggle("active");
          handleOnClick();          
        }
        else{
          button.classList.toggle("active");
          CloseAnotherBtn(button);
          links.forEach((link) => {            
            link.addEventListener("click", () => {
              handleOnClick();
            });
          });
        }
      });
    });
    function CloseAnotherBtn(ActiveBtn){
      linksArray.forEach(button =>{
        if(button !== ActiveBtn){
          if(button.classList.contains('active')){
            button.classList.remove('active');
          }
        }
      })
    }
  }
  
  return (
    <>
      <header className="">
        <nav className="header">
          <div className="logo">
            <a href="/">Kabarnet.</a>
          </div>
          <div id="navbar" className={`nav-menu ${showNavbar && "active"}`}>
            <ul id="nav-items" className="">
              <li className="menu-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="menu-item dropdown">
                <Link className="nav-link ">
                  About Us <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu dropdown-menu">
                  <li>
                    <Link to="/about" className="dropdown-item">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/history" className="dropdown-item">
                      History
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="dropdown-item">
                      Gallery
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-item dropdown">
                <Link className="nav-link">
                  Academics <i className="fas fa-caret-down"></i>
                </Link>
                <ul
                  className="sub-menu dropdown-menu"
                  aria-labelledby="dropdown02"
                >
                  <li>
                    <Link to="/performance" className="dropdown-item">
                      Performance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item dropdown">
                <Link className="nav-link ">
                  Departments <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu dropdown-menu">
                  <li>
                    <Link to="/ict" className=" dropdown-item">
                      ICT
                    </Link>
                  </li>
                  <li>
                    <Link to="/math" className="dropdown-item">
                      Math Dept
                    </Link>
                  </li>
                  <li>
                    <Link to="/english" className="dropdown-item">
                      English Dept
                    </Link>
                  </li>
                  <li>
                    <Link to="/science" className="dropdown-item">
                      Science Dept
                    </Link>
                  </li>
                  <li>
                    <Link to="/sports" className="dropdown-item">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="/boarding" className="dropdown-item">
                      Boarding Dept
                    </Link>
                  </li>
                  <li>
                    <Link to="/guidingandcounseling" className="dropdown-item">
                      Quiding and Counseling
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item dropdown">
                <Link className="nav-link">
                  Clubs & Societies <i className="fas fa-caret-down"></i>
                </Link>
                <ul className="sub-menu dropdown-menu">
                  <li>
                    <Link to="/cu" className="dropdown-item">
                      C.U
                    </Link>
                  </li>
                  <li>
                    <Link to="/ycs" className="dropdown-item">
                      YCS
                    </Link>
                  </li>
                  <li>
                    <Link to="/muslims" className="dropdown-item">
                      Muslims
                    </Link>
                  </li>
                  <li>
                    <Link to="/music" className="dropdown-item">
                      Music
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/library" className="nav-link">
                  Library
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contacts" className="nav-link">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          {/* toggler */}
          <button
            type="button"
            className="toggle_icon"
            id="toggler"
            onClick={handleOnClick}
          >
            {" "}
            {/* */}
            <span>Menu</span>
          </button>
        </nav>
      </header>
    </>
  );
}


export default Navbar;
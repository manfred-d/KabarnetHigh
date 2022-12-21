import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <>
        {/* <!-- footer section --> */}
        <footer>
          <div className="container">
            <div className="row footer-part">
              <div className="quick-links col-sm-6 col-lg-2">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a href="https://kabarnet.high/about">About Us</a>
                  </li>
                  <li>
                    <a href="https://kabarnet.high/academics">Academics</a>
                  </li>
                  <li>
                    <a href="https://kabarnet.high/departments">Departments</a>
                  </li>
                  <li>
                    <a href="https://kabarnet.high/library">Library</a>
                  </li>
                  <li>
                    <a href="https://kabarnet.high/societies">
                      Club & Societies
                    </a>
                  </li>
                  <li>
                    <a href="https://kabarnet.high/sports">sports</a>
                  </li>
                </ul>
              </div>
              <div className="contact-us col-sm-6 col-lg-3">
                <h4>Contact us</h4>
                <ul className="contacts">
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>
                      <a href="https://kabarnet.high">
                        Kabarnet High, P.O Box 3 30400,<br></br> Kabarnet.
                      </a>
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-phone"></i>
                    <span>
                      <a href="tel:+254 704 300 300">+254 704 300 300</a>,
                      <br></br>&nbsp;
                      <a href="tel:+254 700 000 000">+254 700 000 000</a>
                    </span>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>
                      <a href="emailto:infor@kabarnet.ac.ke">
                        info@kabarnethigh.ac.ke
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="completed-projects col-sm-5 col-lg-3">
                <h4>Upcoming Projects</h4>
                <p>
                  The Contructions of the New hostel,<br></br> Samoei Hostel
                </p>
              </div>
              <div className="newsletter col-sm-7 col-lg-3 col-md-8">
                <div className="newsletters">
                  <h4>Newsletter</h4>
                  <p>Trust us, we won't spam you.</p>
                    <form action="" method="post">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id=""
                        placeholder="Enter your email"
                        required
                      ></input>
                      <button type="submit" className="btn btn-append">
                        Send
                      </button>
                    </form>
                </div>
                <div className="follow">
                  <div className="follow-us">
                    <h4>Follow Us</h4>
                    <div className="links">
                      <a href="https://kabarnet.high">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="https://kabarnet.high">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="https://kabarnet.high">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="https://kabarnet.high">
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <span>
                copyright &copy;
                <script>document.write( new Date().getFullYear() );</script>,
                Kabarnet High School.
              </span>
            </div>
          </div>
        </footer>
      </>
    );
}

export default Footer;

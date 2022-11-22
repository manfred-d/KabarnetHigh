import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
      <>
        {/* <!-- footer section --> */}
        <footer>
          <div class="container">
            <div class="row footer-part">
              <div class="quick-links col-sm-6 col-lg-2">
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
              <div class="contact-us col-sm-6 col-lg-3">
                <h4>Contact us</h4>
                <ul class="contacts">
                  <li>
                    <i class="fa fa-map-marker"></i>
                    <span>
                      <a href="https://kabarnet.high">
                        Kabarnet High, P.O Box 3 30400,<br></br> Kabarnet.
                      </a>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-phone"></i>
                    <span>
                      <a href="tel:+254 704 300 300">+254 704 300 300</a>,
                      <br></br>&nbsp;
                      <a href="tel:+254 700 000 000">+254 700 000 000</a>
                    </span>
                  </li>
                  <li>
                    <i class="fa fa-envelope"></i>
                    <span>
                      <a href="emailto:infor@kabarnet.ac.ke">
                        info@kabarnethigh.ac.ke
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
              <div class="completed-projects col-sm-5 col-lg-3">
                <h4>Upcoming Projects</h4>
                <p>
                  The Contructions of the New hostel,<br></br> Samoei Hostel
                </p>
              </div>
              <div class="newsletter col-sm-7 col-lg-3 col-md-8">
                <div class="newsletters">
                  <h4>Newsletter</h4>
                  <p>Trust us, we won't spam you.</p>
                  <form action="">
                    <div class="input-group">
                      <form action="" method="post">
                        <input
                          type="text"
                          class="form-control"
                          name="email"
                          id=""
                          placeholder="Enter your email"
                          required
                        ></input>
                      </form>
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-append">
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="follow">
                  <div class="follow-us">
                    <h4>Follow Us</h4>
                    <div class="links">
                      <a href="https://kabarnet.high">
                        <i class="fab fa-facebook"></i>
                      </a>
                      <a href="https://kabarnet.high">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="https://kabarnet.high">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="https://kabarnet.high">
                        <i class="fab fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="copyright">
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

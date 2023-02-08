import React from 'react';
// import GoogleMapReact from 'google-map-react';
import './Contact.css';

function Contact() {
  return (
    <div className=" mt-5 pt-5">
      <section className="contacts-page">
        <div className="container">
          <div className="row mt-5 mb-5"></div>
          <div className=" row_contact ">
            <div className="card">
              <i className="fas fa-envelope"></i>
              <span>Email:</span>
              <a href="http://">info@kabarnet.ac.ke</a>
            </div>
            <div className="card">
              <i className="fas fa-map"></i>
              <span>Address:</span>
              <code>P.O Box 3-30400</code>
              <a href="http://">Kabarnet</a>
            </div>
            <div className="card">
              <i className="fas fa-phone"></i>
              <span>Tel:</span>
              <a href="tel:+2225001">+2225001</a>
              <a href="tel:+2225001">+2225009</a>
            </div>
          </div>
          <div className="row row_message">
            <form action="" method="post" className=" py-4 w-100">
              <div className="row">
                <div className="col-lg-6 px-2 col-md-12">
                  <div className="input-group form-group mb-4">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="form-group input-group mb-4">
                    <input
                      type="email"
                      className="form-control p-4"
                      placeholder="Enter your Email"
                      required
                    />
                  </div>
                  <div className="form-group input-group mb-4">
                    <input
                      type="text"
                      className="form-control p-4"
                      placeholder="Enter the Subject"
                      required
                    />
                  </div>
                </div>
                <div className="col-lg-6 px-2 col-md-12 px-2">
                  <div className="form-group input-group mb-4">
                    <textarea
                      name="text"
                      id=""
                      rows={4}
                      className="form-control px-3"
                      placeholder="Enter your Message"
                      required
                    ></textarea>
                  </div>
                  <div className="form-button mt-2">
                    <input
                      type="submit"
                      className="btn btn-success w-100 p-2"
                      value="Send Us A Message"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* 0.49311252379746934, 35.74721421532878 */}
      <section className="maps"></section>
    </div>
  );
}

export default Contact
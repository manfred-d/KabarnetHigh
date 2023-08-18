import React from 'react';
import './About.css';

function About() {
  return (
    <>
      {/* <!-- main about section  --> */}
      <section className="about">
        <div className="container">
          <div className="row">
            {/* about section */}
            <div className="first-part col-sm-10 col-lg-5">
              <div className="title">
                <h4>About Kabarnet High</h4>
              </div>
              <div className="body">
                <p>
                  <strong>Baringo, Kenya:</strong> Christened ‘School of
                  Excellence’ Boys High School by current and old boys,
                  Government African Schools Kabarnet Boys in Baringo County has
                  over the years lived up to its slogan by maintaining its
                  position as the best public school in the county.
                </p>
                <p></p>
              </div>
            </div>
            <div className="sec-part col-sm-10 col-lg-7">
              <div className="img-part">
                <img
                  src="/assets/images/kabarnet4.jpg"
                  alt="About Kbt"
                  sizes=""
                  srcset=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- main section ends --> */}
      <section className="more_about">
        <div className="container">
          {/* mission, vission */}
          <div className="row">
            <div className="more_about_info col-lg-12 col-sm-12">
              {/* motto */}
              <div className="motto col-sm-12">
                <div className="motto_title">
                  <h4>Motto</h4>
                </div>
                <div className="motto_body text">
                  Centre for Academic excellence
                </div>
              </div>
              {/* mission */}
              <div className="mission col-sm-12">
                <div className="mission_title">
                  <h4>Mission</h4>
                </div>
                <div className="mission_body text">
                  To be the best teaching and training school
                </div>
              </div>
              {/* vision */}
              <div className="vision col-sm-12">
                <div className="vision_title">
                  <h4>Vision</h4>
                </div>
                <div className="vision_body text">
                  Strong to Excell.Strong to Excell.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
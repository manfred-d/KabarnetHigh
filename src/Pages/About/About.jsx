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
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto recusandae dolor tenetur cum,<br></br> porro
                  voluptatem quasi quos rerum corrupti modi obcaecati natus
                  quidem minus esse quam vitae odio debitis reprehenderit minima
                  sit vel voluptate iste?<br></br> Necessitatibus repudiandae
                  incidunt, minima veritatis a quo recusandae dolores quam
                  dolorem beatae nostrum rem ad.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos
                  nihil debitis nemo totam consequuntur accusamus beatae nobis
                  nesciunt obcaecati sunt.
                </p>
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perferendis est ut, ad explicabo labore doloribus dolore illo
                  perspiciatis facere quidem.
                </div>
              </div>
              {/* mission */}
              <div className="mission col-sm-12">
                <div className="mission_title">
                  <h4>Mission</h4>
                </div>
                <div className="mission_body text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perferendis est ut, ad explicabo labore doloribus dolore illo
                  perspiciatis facere quidem.
                </div>
              </div>
              {/* vision */}
              <div className="vision col-sm-12">
                <div className="vision_title">
                  <h4>Vision</h4>
                </div>
                <div className="vision_body text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Perferendis est ut, ad explicabo labore doloribus dolore illo
                  perspiciatis facere quidem.
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
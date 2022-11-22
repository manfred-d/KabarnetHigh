import React from 'react';
import './About.css';

function History() {
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
            <div className="sec-part col-sm-10 col-lg-6">
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
      <section>
        
      </section>
    </>
  );
}

export default History;
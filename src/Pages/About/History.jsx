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
                <h4>History of The Mighty Kabarnet High</h4>
              </div>
              <div className="body">
                <div style={{ fontSize: "1.5rem", color: "GrayText" }}>
                  Established in 1963
                </div>
                <p>
                  The school's unique architecture and history pushed it to
                  grace the Sh10 note. Academic excellence and the privilege of
                  being the school where former President Moi studied and taught
                  also set the school apart.
                </p>
                <p>
                  During the 1980s, many of its students made it directly to
                  university. Since then, it has maintained its pace and
                  upgraded its status.
                </p>
                <p>
                  It was recently given county status, an elevation that was
                  informed by its performance, facilities and structures.
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
    </>
  );
}

export default History;
import React from "react";
import "./About.css";

function Gallery() {
  return (
    <div className="">
      <div className="upper" style={{ margin: "10rem" }}></div>
      <section
        className="gallery mt-5 pt-5"
        style={{ backgroundColor: "#fffbe9" }}
      >
        <div className="container">
          <div
            className="row mt mb-5"
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,300px),1fr)) ",
              gap: "1rem",
            }}
          >
            {/* cards start */}
            <div className="cards shadow-lg border ">
              <div className="card__image">
                <picture>
                  <img
                    src="/assets/images/gallery/school_teachers.jpg"
                    alt="kabarnet_high"
                    style={{ width: "100%" }}
                  />
                </picture>
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                School teachers during the session
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <picture>
                  <img
                    src="/assets/images/gallery/school_van.jpg"
                    alt="kabarnet_high"
                    style={{ width: "100%" }}
                  />
                </picture>
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Kabarnet high School Van
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <picture>
                  <img
                    src="/assets/images/gallery/motivation_speaker.jpg"
                    alt="kabarnet_high"
                    style={{ width: "100%" }}
                  />
                </picture>
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Kabarnet high School Speaker during the motivation session
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <img
                  src="/assets/images/gallery/students_writing_notes.jpg"
                  alt="kabarnet_high"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Students During the motivation session
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <img
                  src="/assets/images/gallery/kagali.jpg"
                  alt="kabarnet_high"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Mr. Kagali During the motivation session
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <img
                  src="/assets/images/kabarnet-alumni.jpg"
                  alt="kabarnet_high"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Kabarnet alumni during the alumni day
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <img
                  src="/assets/images/kabarnetsch.jpg"
                  alt="kabarnet_high"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Kabarnet Main Administration building
                <br />
                <code className=" text-white">Cc Kabarnet Alumni</code>
              </div>
            </div>
            {/* cards end */}
            {/* cards start */}
            <div className="cards shadow-lg border">
              <div className="card__image">
                <img
                  src="/assets/images/gallery/admin_back.jpeg"
                  alt="kabarnet_high"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="card__info" style={{ width: "100%" }}>
                Kabarnet Main Administration building from the back
                <br />
                <code className=" text-white">Cc Emmanuel</code>
              </div>
            </div>
            {/* cards end */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;

import React from 'react';
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import './Home.css';
// import kabarnet from '../../../public/assets/images/Kabarnet1.jpg';

function Home() {
  return (
    <>
      {/* <!-- Home sections start --> */}
      <section className="home">
        <div className="swiper-container">
          <Splide
            tag="section"
            className="swiper-wrapper"
            options={{
              perPage: 1,
              arrows: true,
              rewind: true,
              drag: "free",
              gap: "0",
              autoplay: true,
              pauseOnHover: false,
              pauseOnFocus: true,
              perMove: 1,
              speed: 3000,
              snap: true,
              easing: "ease",
              width: "100vw",
            }}
            hasTrack={false}
          >
            {/* progress bar */}
            <div className="splide__progress">
              <div className="splide__progress__bar" />
            </div>
            {/* splides */}
            <SplideTrack>
              <SplideSlide className="swiper-slide">
                <h2>The School Block</h2>
                <img src="/assets/images/kabarnetsch.jpg" alt="kabarnethigh" />
              </SplideSlide>
              <SplideSlide className="swiper-slide">
                <h2 className="history">Our History</h2>
                <img
                  src="/assets/images/kabarnet-ten.jpeg"
                  alt="kabarnet high"
                />
              </SplideSlide>
              <SplideSlide className="swiper-slide">
                <h2>The Administration Block</h2>
                <img src="/assets/images/kabarnet1.jpg" alt="kabarnet admin" />
              </SplideSlide>
              <SplideSlide className="swiper-slide">
                <h2>The students Assembly</h2>
                <img
                  src="/assets/images/kabarnet4.jpg"
                  alt="kabarnet Assembly"
                />
              </SplideSlide>
              <SplideSlide className="swiper-slide">
                <h2>The Alumni</h2>
                <img
                  src="/assets/images/kabarnet-alumni.jpg"
                  alt="kabarnet Assembly"
                />
              </SplideSlide>
              <SplideSlide className="swiper-slide">
                <h2>Students playing chessl</h2>
                <img
                  src="/assets/images/kabarnet4.jpeg"
                  alt="kabarnet Dinning Hall"
                />
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </div>
      </section>

      {/* <!-- ===completed students Hostel --> */}
      <section className="new-hostel">
        <div className="container">
          <div className="row samoei-hostel">
            <div className="hostel-img col-sm-10 col-lg-6">
              <img src="/assets/images/kabarnet1.jpg" alt="kabarnet1" />
            </div>
            <div className="hostel-info col-sm-10 col-lg-5">
              <h4>New samoei hostel Completed</h4>
              <p>
                Over the years, the school has had many new and improved hostels
                developed.<br></br> Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Natus omnis cupiditate sint atque. Sunt
                deserunt dolorem blanditiis consectetur consequuntur
                necessitatibus iure? Quam sed esse debitis? Accusantium, quia
                laboriosam. Soluta hic quod animi labore consequatur
                perspiciatis magnam ullam accusantium dolore eos expedita
                suscipit, aspernatur illum incidunt repellat tempore in! Odit,
                voluptatem.
              </p>
              <br></br>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
                quaerat aliquid sed rem. Minus, iure laborum? Dolores unde nobis
                tenetur illum repellat adipisci, qui, itaque mollitia laboriosam
                minus, rem inventore temporibus tempore voluptatem cupiditate
                tempora similique nesciunt quidem veniam blanditiis iure
                officiis quaerat. Impedit quam libero consequuntur quaerat ea!
                Nobis veritatis dicta rem qui atque libero obcaecati nisi
                placeat consequuntur enim? Obcaecati sequi eum error ex nisi
                eligendi consequatur voluptate! Possimus commodi architecto
                minus iusto ut exercitationem nisi alias ex facere earum
                expedita esse, deserunt reiciendis quasi aliquid ad nesciunt non
                illo veritatis! Quam sed veniam nam consequatur dolore quas.
              </p>
              <p>
                {" "}
                Dr. William Samoei Ruto opened the newly constructed hostel
                which is named after him.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==== More About Kbt --> */}
      <section className="more">
        <div className="container">
          <div className="row more-about">
            {/* <!-- ==card start == --> */}
            <div className="cards  col-md-10 col-lg-3">
              <div className="card-header">
                <h5>About KHS</h5>
              </div>
              <div className="card-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sint ipsum ut expedita repellat rem culpa quod
                  excepturi amet perspiciatis, iusto reiciendis deserunt
                  similique laudantium error et voluptas commodi distinctio
                  tempore placeat nobis doloremque rerum velit libero! Ipsa,
                  assumenda laboriosam adipisci placeat beatae sunt iste commodi
                  enim rerum illum! Voluptate eius eveniet tempora non sequi
                  fuga, soluta nemo, aspernatur molestiae nulla omnis quisquam
                  suscipit dolore qui repellat, consequatur modi pariatur error
                  accusamus animi? Quidem quisquam magni modi beatae praesentium
                  saepe in, provident minima nemo numquam et quos nobis labore
                  at veniam sint
                </p>
              </div>
              <div className="card-footer">
                <a href="http://">read more...</a>
              </div>
            </div>
            {/* <!-- == card ends == --> */}
            {/* <!-- ==card start == --> */}
            <div className="cards col-md-10 col-lg-3">
              <div className="card-header">
                <h5>Admissions</h5>
              </div>
              <div className="card-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sint ipsum ut expedita repellat rem culpa quod
                  excepturi amet perspiciatis, iusto reiciendis deserunt
                  similique laudantium error et voluptas commodi distinctio
                  tempore placeat nobis doloremque rerum velit libero! Ipsa,
                  assumenda laboriosam adipisci placeat beatae sunt iste commodi
                  enim rerum illum! Voluptate eius eveniet tempora non sequi
                  fuga, soluta nemo, aspernatur molestiae nulla omnis quisquam
                  suscipit dolore qui repellat, consequatur modi pariatur error
                  accusamus animi? Quidem quisquam magni modi
                </p>
              </div>
              <div className="card-footer">
                <a href="http://">read more...</a>
              </div>
            </div>
            {/* <!-- == card ends == --> */}
            {/* <!-- ==card start == --> */}
            <div className="cards col-md-10 col-lg-3">
              <div className="card-header">
                <h5>Library</h5>
              </div>
              <div className="card-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sint ipsum ut expedita repellat rem culpa quod
                  excepturi amet perspiciatis, iusto reiciendis deserunt
                  similique laudantium error et voluptas commodi distinctio
                  tempore placeat nobis doloremque rerum velit libero! Ipsa,
                  assumenda laboriosam adipisci placeat beatae sunt iste commodi
                  enim rerum illum! Voluptate eius eveniet tempora non sequi
                  fuga, soluta nemo, aspernatur molestiae nulla omnis quisquam
                  suscipit dolore qui repellat, consequatur modi pariatur error
                  accusamus animi? Quidem quisquam magni modi
                </p>
              </div>
              <div className="card-footer">
                <a href="http://">read more...</a>
              </div>
            </div>
            {/* <!-- == card ends == --> */}
            {/* <!-- ==card start == --> */}
            <div className="cards col-md-10 col-lg-3">
              <div className="card-header">
                <h5>Academics</h5>
              </div>
              <div className="card-info">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem sint ipsum ut expedita repellat rem culpa quod
                  excepturi amet perspiciatis, iusto reiciendis deserunt
                  similique laudantium error et voluptas commodi distinctio
                  tempore placeat nobis doloremque rerum velit libero! Ipsa,
                  assumenda laboriosam adipisci placeat beatae sunt iste commodi
                  enim rerum illum! Voluptate eius eveniet tempora non sequi
                  fuga, soluta nemo, aspernatur molestiae nulla omnis quisquam
                  suscipit dolore qui repellat, consequatur modi pariatur error
                  accusamus animi? Quidem quisquam magni modi. Academics...read
                  more
                </p>
              </div>
              <div className="card-footer">
                <a href="http://">read more...</a>
              </div>
            </div>
            {/* <!-- == card ends == --> */}
          </div>
        </div>
      </section>
      {/* messgae from principal */}
      <section className="principals">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card_img col-sm-12 col-lg-6 col-md-6">
                <img src="/assets/images/games.jpg" alt="" />
              </div>
              <div className="card_body col-sm-12 col-lg-6 col-md-6">
                <h5>Message from the Principal</h5>
                <code>Mr. Tarus</code>
                <p>
                  <i className='fas fa-quote-left'></i><br></br>
                  The school has three basketball courts, two football pitches,
                  two hockey pitches, a swimming pool, a handball field,
                  an athletics track and a table tennis table.
                </p>
                <div className="contacts">
                  <a href="mailto:email@email.com">tarusprincipal@email.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
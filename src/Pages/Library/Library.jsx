import React from 'react';
import './Library.css';

function Library() {
  return (
    <>
      <section className="library">
        <div className="container">
          <div className="row">
            <div className="library_page col-sm-12 col-lg-6">
              <div className="library_title">
                <h4>Newly Built Library</h4>
              </div>
              <div className="library_body">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  aliquam nihil accusamus temporibus dolore suscipit nisi et
                  labore nam consequuntur.
                </p>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nam labore iste quis facilis natus exercitationem officiis
                  architecto dignissimos qui?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nam labore iste quis facilis natus exercitationem officiis
                  architecto dignissimos qui?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  nam labore iste quis facilis natus exercitationem officiis
                  architecto dignissimos qui?
                </p>
              </div>
            </div>
            <div className="library_img col-sm-10 col-lg-6">
              <img src="/assets/images/kabarnet4.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="librarian">
        <div className="container">
          {/* open hours */}
          <div className="row opening_hours">
            <div className="weekdays col-sm-12 col-lg-3">
              <table>
                <thead>
                  <tr>
                    <td>Monday - Friday</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8:00 AM - 5:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="saturdays col-sm-12 col-lg-3">
              <table>
                <thead>
                  <tr>
                    <td>Saturdays</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>10:00 AM - 5:00 PM</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="sundays col-sm-12 col-lg-3">
              <table>
                <thead>
                  <tr>
                    <td>Sundays & Holidays</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* librarian info */}
          <div className="row my-5">
            <div className="librarian_img col-sm-10 col-lg-6">
              <img src="/assets/images/kabarnet-alumni.jpg" alt="" />
              <div className="librarian_name">
                <label>Mr. Limo</label>
                <p>Librarian</p>
              </div>
            </div>
            <div className="librarian_info col-sm-10 col-lg-6">
              <div className="librarian_body">
                <div className="quotes">
                  <i className="fas fa-quote-left"></i>
                </div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam cupiditate earum libero vitae maxime. Obcaecati eos ex
                  cupiditate reprehenderit vero.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam cupiditate earum libero vitae maxime. Obcaecati eos ex
                  cupiditate reprehenderit vero.
                </p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aperiam cupiditate earum libero vitae maxime. Obcaecati eos ex
                  cupiditate reprehenderit vero.
                </p>
                <div className="quotes">
                  <i className="fas fa-quote-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Library;
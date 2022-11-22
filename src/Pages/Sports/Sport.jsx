import React from 'react';
import './Sport.css';

function Sport() {
  return (
    <>
      <section className="sports">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card_info col-sm-12 col-lg-6 col-md-6">
                The school has three basketball courts, two football pitches,
                two hockey pitches, a swimming pool, a handball field,
                an athletics track and a table tennis table.The school’s routine
                includes a games period every weekday from 16:15hrs to 17:40hrs.
                On Tuesdays the program is suspended for clubs’ and societies’
                meetings. There are inter-house sports competitions spread
                across the three school terms.During the second school term, a
                mini Olympics is held in the school. During this event, the
                twelve houses compete against each other in track and field
                events.
              </div>
              <div className="card_message col-sm-12 col-lg-6 col-md-6">
                <img src="/assets/images/games.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sports_captain">
        <div className="container">
          <div className="row">
            <div className="card">
              <div className="card_message col-sm-12 col-lg-6 col-md-6">
                <img src="/assets/images/games.jpg" alt="" />
              </div>
              <div className="card_info col-sm-12 col-lg-6 col-md-6">
                <h5>Message from Games Captain.</h5>
                <code>Mr. Tarus</code>
                <p>
                  The school has three basketball courts, two football pitches,
                  two hockey pitches, a swimming pool, a handball field,
                  an athletics track and a table tennis table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sport;
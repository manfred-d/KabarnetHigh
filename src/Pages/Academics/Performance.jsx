import React from 'react';
import './Academic.css';

function Performance() {
  return (
    <>
      <section className="performance">
        <div className="container">
          <div className="row">
            <div className="cards col-sm-12 col-lg-5">
              <div className="card_title">Best Performance</div>
              <div className="card_body">
                <p>
                  The school is among the best performing high schools in the
                  country academically, ranked amongst the top 10 positions
                  every year. Bush holds the country record for most consecutive
                  years holding the pole position in the national exams
                  (1960–1985). In the K.C.S.E results announced in 2011, the
                  school emerged top in the country. In that same year, the
                  school had more than 100 students scoring a mean grade of A in
                  the national exams.
                </p>
                <p>
                  Mr. Tarus, Principal KHS receiving a present during the
                  presents day for exemplary performance of KSCE.
                </p>
              </div>
            </div>
            <div className="cards col-sm-12 col-lg-5">
              <div className="card_title">Always at the Top</div>
              <div className="card_body">
                <p>
                  The school is among the best performing high schools in the
                  country academically, ranked amongst the top 10 positions
                  every year. Bush holds the country record for most consecutive
                  years holding the pole position in the national exams
                  (1960–1985). In the K.C.S.E results announced in 2011, the
                  school emerged top in the country. In that same year, the
                  school had more than 100 students scoring a mean grade of A in
                  the national exams.
                </p>
              </div>
            </div>
          </div>
          {/* excelence */}
          <div className="row">
            <div className="card">
              <div className="card_body">
                <div className="card_header">
                  KHS has continued to excel in other various categories
                </div>
                <p>
                  The school is among the best performing high schools in the
                  country academically, ranked amongst the top 10 positions
                  every year. In the K.C.S.E results announced in 2015, the
                  school emerged among the top in the country. In that same
                  year, the school had more than 50 students scoring a mean
                  grade of A in the national exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Performance;
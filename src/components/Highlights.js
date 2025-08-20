import React from "react";

function Highlights() {
  return (
    <section id="highlights" className="py-5 text-center">
      <div className="container">
        <h2 className="fw-bold">Event Highlights</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Keynote Speakers</h5>
                <p className="card-text">Hear from leading voices in tech innovation.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Workshops</h5>
                <p className="card-text">Hands-on sessions to sharpen your skills.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">Networking</h5>
                <p className="card-text">Connect with professionals and innovators worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;

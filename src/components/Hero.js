import React from "react";

function Hero() {
  return (
    <section id="home" className="bg-dark text-light text-center d-flex align-items-center" style={{height: "100vh"}}>
      <div className="container">
        <h1 className="display-3 fw-bold">Tech Summit 2025</h1>
        <p className="lead">Join innovators, creators, and leaders for an unforgettable experience</p>
        <p className="mb-4">📍 New York City | 🗓️ October 10, 2025</p>
        <a href="#register" className="btn btn-primary btn-lg px-4">Register Now</a>
      </div>
    </section>
  );
}

export default Hero;

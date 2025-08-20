import React from "react";

function Register() {
  return (
    <section id="register" className="py-5 bg-primary text-light text-center">
      <div className="container">
        <h2 className="fw-bold">Save Your Spot!</h2>
        <p className="mt-3">Don’t miss out on the future of technology.</p>
        <form className="row g-3 justify-content-center mt-4">
          <div className="col-md-4">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="col-md-4">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-dark w-100">Register</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Register;

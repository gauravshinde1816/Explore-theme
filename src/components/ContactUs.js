import React from "react";

const ContactUs = () => {
  return (
    <section id="newsletter" className="text-center p-5 bg-primary text-white">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Get In Touch</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              asperiores consectetur, quae ducimus voluptates vero repellendus
              architecto maiores recusandae mollitia?
            </p>
            <form className="form-inline justify-content-center">
              <input
                type="text"
                className="form-control mb-2 mr-2"
                placeholder="Enter Name"
              />
              <input
                type="text"
                className="form-control mb-2 mr-2"
                placeholder="Enter Email"
              />
              <button className="btn btn-success mb-2">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

import React from "react";
import pricing from "./Carousel/img/img5.jpg";
const Pricing = () => {
  return (
    <section id="info" className="py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 align-self-center">
            <h3>Check Our Pricing</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              eveniet blanditiis incidunt iusto corrupti illum cum laudantium ex
              sequi amet.
            </p>
            <a href="about.html" className="btn btn-outline-danger btn-lg">
              Learn More
            </a>
          </div>
          <div className="col-md-6">
            <img src={pricing} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

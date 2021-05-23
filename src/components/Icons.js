import React from "react";

const Icons = () => {
  return (
    <section id="home-icons" className="py-5 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-hiking  fa-3x mb-2 text-success"></i>
            <h3>Trek More</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              veniam.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center">
            <i className="fas fa-map-marked-alt fa-3x mb-2 text-secondary"></i>
            <h3>Explore More</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              veniam.
            </p>
          </div>
          <div className="col-md-4 mb-4 text-center ">
            <i className="fas fa-heartbeat fa-3x mb-2 text-danger"></i>
            <h3>Live More</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
              veniam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Icons;

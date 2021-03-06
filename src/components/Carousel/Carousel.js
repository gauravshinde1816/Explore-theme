import React from "react";
import "./styles.css";
const Carousel = () => {
  return (
    <section id="showcase">
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="2000"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item carousel-image-1 active">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
                <h1 className="display-3">Heading One</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  aperiam vel ullam deleniti reiciendis ratione quod aliquid
                  inventore vero perspiciatis.
                </p>
                <a href="#" className="btn btn-danger btn-lg">
                  Sign Up Now
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-2">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block mb-5">
                <h1 className="display-3">Heading Two</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  aperiam vel ullam deleniti reiciendis ratione quod aliquid
                  inventore vero perspiciatis.
                </p>
                <a href="#" className="btn btn-primary btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item carousel-image-3">
            <div className="container">
              <div className="carousel-caption d-none d-sm-block text-right mb-5">
                <h1 className="display-3">Heading Three</h1>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
                  aperiam vel ullam deleniti reiciendis ratione quod aliquid
                  inventore vero perspiciatis.
                </p>
                <a href="#" className="btn btn-success btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#myCarousel"
          data-slide="prev"
          className="carousel-control-prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </a>

        <a
          href="#myCarousel"
          data-slide="next"
          className="carousel-control-next"
        >
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </section>
  );
};

export default Carousel;

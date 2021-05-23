import React from "react";

const Footer = () => {
  return (
    <footer id="main-footer" className="text-center text-white p-4 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col">
            <p>
              Copyright &copy;
              <span id="year"></span> Explorrr
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="conatainer pt-5">
        <div className="row">
          <div className="footer fixed-bottom text-center">
            © 2020 Copyright:
            <Link to="#" style={{ color: "white", paddingLeft: "0.5rem" }}>
              The Best Beauty Store
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

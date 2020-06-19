import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
// get our fontawesome imports
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
import { ButtonContainer } from "./Button";

class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar fixed-top navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-3">
              <Link to="/" className="nav-link">
                <span className="text-color">Products</span>
              </Link>
            </li>
            <li className="nav-item ml-3">
              <Link to="/aboutus" className="nav-link">
                <span className="text-color">AboutUs</span>
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <ButtonContainer>
              <span className="mr-2">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              My Cart
            </ButtonContainer>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

export default Navbar;

const NavWrapper = styled.nav`
  background: rgb(3, 219, 13);
  background: linear-gradient(
    90deg,
    rgba(3, 219, 13, 1) 0%,
    rgba(4, 211, 66, 1) 53%,
    rgba(6, 223, 166, 1) 100%,
    rgba(6, 223, 199, 1) 100%,
    rgba(0, 255, 235, 1) 100%
  );
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;

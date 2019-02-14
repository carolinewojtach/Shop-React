import React, { Component } from "react";
import Container from "../Container/Container";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <Container>
            <ul className="nav">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/catalog">Catalog</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </Container>
        </nav>
      </div>
    );
  }
}
export default Navbar;

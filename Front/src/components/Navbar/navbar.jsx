// NavbarComponent.js
import React from "react";

import navcolors from "/nav-colors.png";
import logobosch from "/logo-bosch.png";

import "./navbar.css";

function NavbarComponent() {
  return (
    <header>
      <img src={navcolors} className="nav-colors" alt="Nav Colors" />
      <nav>
        <img src={logobosch} className="logo" alt="Bosch Logo" />
      </nav>
    </header>
  );
}

export default NavbarComponent;
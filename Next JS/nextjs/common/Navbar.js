import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/about" className="nav-link active">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/ourProducts" className="nav-link active">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link active">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="d-flex">
          <Link href="/login">Login</Link>&nbsp; | &nbsp;
          <Link href="/registration">Registration</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import { Container } from "react-bootstrap";
import { Footer } from "./Footer";
export const UserLayout = ({ title, children }) => {
  return (
    <>
      <div className="d-flex">
        <div className="left-menu bg-dark text-light">
          <div className="text-center mt-3">ADMIN</div>
          <hr />
          <ul>
            <li>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
        <div className="right-page w-100">
          <Header />
          <Container className="main">
            <h1 className="mt-1">{title}</h1>
            <hr />
            {children}
          </Container>
          <Footer />
        </div>
      </div>
    </>
  );
};

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { ImLibrary } from "react-icons/im";
import { FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../pages/signup-signin/userSlice";
import { persistor } from "../../redux/store.js";

export const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userInfo);
  const handleOnSignOut = () => {
    persistor.purge().then(() => {
      console.log("Signed Out");
    });

    dispatch(setUser({}));
  };
  return (
    <Navbar expand="md" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/" className="nav-link">
            <ImLibrary />
            Library
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/" className="nav-link">
                  <AiFillHome />
                  Home
                </Link>
                <Link to="/dashboard" className="nav-link">
                  <MdDashboard />
                  Dashboard
                </Link>
                <Link to="/ " className="nav-link" onClick={handleOnSignOut}>
                  <FaSignOutAlt />
                  Signout
                </Link>
              </>
            ) : (
              <>
                <Link to="/signin" className="nav-link">
                  <FaSignInAlt />
                  Singin
                </Link>
                <Link to="/signup" className="nav-link">
                  <FaUserPlus />
                  Singup
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

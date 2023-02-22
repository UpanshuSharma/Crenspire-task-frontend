import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { logout } from "./../../redux/action/UserAuthAction";
function NavBar() {
  const user = useSelector((state) => state.UserAuthReducer.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CRENSPIRE-TASK</Navbar.Brand>
        {user ? (
          <>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />

            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-5">
                <Nav.Link to="/home">Home</Nav.Link>
                <Nav.Link to="/logout" onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </>
        ) : (
          ""
        )}
      </Container>
    </Navbar>
  );
}

export default NavBar;

import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { MdDeveloperMode } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import { Auth } from "../hoc/Auth";

function NavBar(props) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  const handleLogout = () =>{
    localStorage.removeItem('UserAccessToken');
    const userAccessToken = localStorage.getItem('UserAccessToken');
    console.log("userAccessToken navbar", userAccessToken);
    props.setCheckIsAdmin(false);
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="#" target="_blank">
          <MdDeveloperMode style={{ marginBottom: "2px" }} /> AjAy SHEOKAND
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/Tools"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Tools
              </Nav.Link>
            </Nav.Item>

           <Nav.Item>
              <Nav.Link
                as={Link}
                to={props.checkIsAdmin ? "/add_user" : "/login"}
                onClick={() => props.checkIsAdmin ? handleLogout() : updateExpanded(false) }
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {props.checkIsAdmin ? "Logout" : "Login" }
              </Nav.Link>
            </Nav.Item> 
           

            {props.checkIsAdmin && <Nav.Item>
              <Nav.Link
                as={Link}
                to={props.checkIsAdmin ? "/add_user" : ""}
                target="_blank"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> Register
              </Nav.Link>
            </Nav.Item>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Auth(NavBar);

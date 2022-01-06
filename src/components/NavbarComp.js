import React, { Component } from 'react'
import {Navbar, Container,Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'


export default class NavbarComp extends Component {
  render() {
    return(
      <div>

          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home"><u>Algo Viz</u></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">About Us</Nav.Link>
                <NavDropdown title="Algorithm List" id="collasible-nav-dropdown">

                    <NavDropdown.Item href="https://en.wikipedia.org/wiki/Bubble_sort" target="_blank">Bubble Sort</NavDropdown.Item>
                    <NavDropdown.Item href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">Insertion Sort</NavDropdown.Item>
                    <NavDropdown.Item href="https://en.wikipedia.org/wiki/Insertion_sort" target="_blank">Selection Sort</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://en.wikipedia.org/wiki/Merge_sort" target="_blank">Merge Sort</NavDropdown.Item>
                    <NavDropdown.Item href="https://en.wikipedia.org/wiki/Quicksort" target="_blank">Quick Sort</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="https://en.wikipedia.org/wiki/Radix_sort" target="_blank">Radix Sort</NavDropdown.Item>

                </NavDropdown>
              </Nav>
              <Nav>

                <Nav.Link eventKey={2} href="https://www.instagram.com/algomemes1/?hl=en" target="_blank">
                  Algo Memes
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>


        <Navbar fixed="bottom" bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav.Link href="#home">© 2022 Ctrl Alt Elite</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>

          </Container>
        </Navbar>
      </div>
    )
  }
}

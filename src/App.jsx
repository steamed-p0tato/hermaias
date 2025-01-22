import './App.css'
import { Navbar, Container, Nav, Row, Card, Col, Button } from 'react-bootstrap'
import { Link, Outlet } from 'react-router'

function App() {

  return (
    <>
      <Navbar expand='lg' fixed='top' style={{
        backgroundColor: '#0f0f0f'
      }} data-bs-theme="dark">
        <Container style={
          {fontSize: '20px',
            padding: '5px',
          }}>
          <Navbar.Brand style={{
          fontWeight: 'bolder',}} href='/#home'>HERMEiAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#products">Products</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  )
}

export default App

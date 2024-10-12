"use client"
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function Pagina(props) {
  return (
    <>
      {/* navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Conversor de Moedas</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Investimeto</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* titulo */}
      <div className='text center'>
        {props.tituo}
      </div>


      {/* conteudo */}
      <Container>
        {props.children}
      </Container>
    </>
  )
}

import React, { useState } from 'react'
import { Row ,Navbar,Container,Nav,Form} from 'react-bootstrap'

function NavBar({searchBar}) {
  const [search,setSearch] =useState('');

  const onSearch = (e) => {
    e.preventDefault();
    searchBar(search);
    setSearch('')
  }

  return (
    <Row>
    <Navbar expand="lg"   bg='dark' variant='dark'>
    <Container>
      <Navbar.Brand href="#">
        <div className='brand-color'>سيعوو فووت</div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="text"
            placeholder="بحث..."
            className="mx-2"
            onChange={(e) =>setSearch(e.target.value)}
            value={search}/>
          <button variant="outline-success" onClick={onSearch} className='btn-search'>أبحث</button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </Row>
  )
}

export default NavBar

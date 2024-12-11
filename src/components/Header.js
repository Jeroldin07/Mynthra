import logo1 from './Articles/mynthralogo.png'
import  "bootstrap/dist/css/bootstrap.min.css"
// import Button from 'react-bootstrap/Button';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { RiShoppingCartLine } from "react-icons/ri";
// import Search from "./components/search/Search";
import { useEffect, useState } from 'react';

export default function Header() {

  // const [searchValue, setSearchValue] = useState("");

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((data) => setItem(data));
  //   console.count("hi");
  // }, []);
  
  
    return(




        <Navbar expand="lg" className="Navbody bg-body-secondary">
            <Container fluid>
                <Navbar.Brand href="./"> <img src={logo1} /> </Navbar.Brand>
                <Navbar.Toggle className='toglebox' aria-controls='navbarScroll'><FiSearch className='Searchicon' /></Navbar.Toggle>
                    <Navbar.Collapse id="navbarScroll">
                  
          <Form className="d-flex">
          {/* <div className="nav-right">
            <search
              products={items}
              value={searchValue}
              onChangeData={changingSrarchData}
            />
            
          </div> */}
           
          </Form>
        </Navbar.Collapse>

        <div className='divsinout'>
        <Link to='/Signin' className="cardlinks">
            <Button className='SnInBtn' variant="outline-secondary">Sign-In</Button>
        </Link>
        <Link to='/SignOut' className="cardlinks">
            <Button className='SnOutBtn' variant="outline-secondary">Sign-Out</Button>
        </Link>
        </div>
        <Link to='/AddCard' className='cardlinks'>
        <Button >Cart <RiShoppingCartLine className='fa-xl' /></Button>
        </Link>
      </Container>
    </Navbar>
    )
}
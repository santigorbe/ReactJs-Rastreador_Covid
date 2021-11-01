import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css';

const NavBar = () =>{
    return(
            <Navbar className='navBar'>
                <Navbar.Brand>
                    <h1>Rastreador Covid 19 ||   Santiago Gorbea</h1>
                </Navbar.Brand>
            </Navbar>
    )
} 
export default NavBar;
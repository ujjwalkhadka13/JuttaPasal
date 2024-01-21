import { Navbar, Nav, Container} from 'react-bootstrap';
import { FaShoppingCart} from 'react-icons/fa';
import {LinkContainer} from 'react-router-bootstrap';
import { FaUser } from "react-icons/fa";
import logo from '../assets/logo.png'




const Header = () => {
  return (
    <header>
        <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                <Navbar.Brand>
                    <img src={logo} alt='Juttapasal' />
                    JuttaPasal
                     </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <nav className="ms-auto">
                        <LinkContainer to='/cart'>
                    
                     <Nav.Link>
                        <FaShoppingCart /> Cart
                    
                     </Nav.Link>
                     </LinkContainer>
                     <LinkContainer to='/login'>
                     <Nav.Link href='/login'>
                        <FaUser /> Sign In
                        </Nav.Link>
                        </LinkContainer>
                    </nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  );
};

export default Header;
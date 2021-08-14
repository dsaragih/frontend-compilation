import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Nav = (props) => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#drum">Frontend Projects</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#drum">Drum Machine</Nav.Link>
                <Nav.Link href="#quote">Quote Generator</Nav.Link>
                <Nav.Link href="#calc">Calculator</Nav.Link>
                <Nav.Link href="#markdown">Markdown to HTML</Nav.Link>
                <Nav.Link href="#timer">Timer</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default Nav;
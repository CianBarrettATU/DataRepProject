import  Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">Navbar</Navbar.Brand>
                <Nav.Link href="/">Home</Nav.Link>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
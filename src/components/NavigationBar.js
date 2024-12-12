import  Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <Navbar style={{backgroundColor: 'black'}} data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">GAMEDB</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/read">Games</Nav.Link>
                    <Nav.Link href="/rating">Ratings</Nav.Link>
                    <Nav.Link href="/review">Review</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
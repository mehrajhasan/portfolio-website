import {Container, Nav, Navbar} from 'react-bootstrap';
import {useState, useEffect} from 'react';

export const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollUp > 50){
                seScrolled(true);
            } else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (val) => {
        setActiveLink(val);
    }
    
    return (
        <Navbar expand="lg" className={scrolled ? "scrolled":""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={''} alt="holder"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-logo">
                        <a href="#"><img src={''} alt="h"/></a>
                        <a href="#"><img src={''} alt="h"/></a>
                        <a href="#"><img src={''} alt="h"/></a>
                    </div>
                    <button className="contact" onClick={() => console.log('connect')}>LETS CONNECT</button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
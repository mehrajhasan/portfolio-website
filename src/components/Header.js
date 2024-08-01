import {Container, Nav, Navbar} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import github from '../assets/images/github.png';
import linkedin from '../assets/images/linkedin.png';
import resume from '../assets/images/resume.png';

export const Header = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
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
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
                    <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('aboutme')}>ABOUT ME</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active header-link':'header-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-logo">
                        <a href="https://github.com/mehrajhasan"><img src={github} alt="git"/></a>
                        <a href="https://linkedin.com/in/mehrajhasan"><img src={linkedin} alt="ln"/></a>
                        <a href="https://docs.google.com/document/d/1i93U6ntfsKNC1F6I6-m8PL2BP6gdfD1Y/edit?usp=sharing&ouid=110343639689020574930&rtpof=true&sd=true"><img src={resume} alt="res"/></a>
                    </div>
                    <button className="contact">
                        <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active header-link' : 'header-link'} onClick={() => onUpdateActiveLink('connect')}>
                        LETS CONNECT
                        </Nav.Link>
                    </button>
                </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
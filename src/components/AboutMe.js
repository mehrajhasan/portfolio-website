import { Container, Row, Col } from 'react-bootstrap';
import hover from '../assets/images/hover.gif';
import harry from '../assets/images/harry.gif';
import ron from '../assets/images/ron.gif';

export const AboutMe = () => {

    return (
        <section className="aboutbox" id="aboutme">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="interests">
                            <h2>Interests</h2>
                            <li>Front-end</li>
                            <li>Back-end</li>
                            <li>Software Development</li>
                            <li>Cybersecurity</li>
                            <li>Machine Learning</li>
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={7}>
                        <div className="funfacts">
                            <h2>Fun Facts</h2>
                            <li className="entr">I'm an entrepreneur</li>
                            <li className="gym">I'm an avid gym-goer</li>
                            <li className="cars">I'm a car enthusiast</li>
                            <li className="cats">I have 10 cats</li>
                            <li className="hp">
                                I'm a big Harry Potter fan
                            </li>
                        </div>
                    </Col>

                    <Col>
                        <div className="hover">
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;
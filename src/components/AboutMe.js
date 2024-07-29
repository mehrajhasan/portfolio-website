import { Container, Row, Col } from 'react-bootstrap'
export const AboutMe = () => {

    return (
        <section className="aboutbox" id="aboutme">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div className="interests">
                            <h2>Interests</h2>
                            <li>SWE</li>
                            <li>Front-end</li>
                            <li>Back-end</li>
                            <li>Cybersecurity</li>
                            <li>Machine Learning</li>
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={7}>
                        <div className="funfacts">
                            <h2>Fun Facts</h2>
                            <p>Outside of </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default AboutMe;
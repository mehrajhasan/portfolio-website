import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import picture from '../assets/images/picture.JPG';

export const Main = () => {

    const { ref: about, inView: aboutisVisible } = useInView();

    return (
        <section className="main" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <div ref = {about} className={`about ${aboutisVisible ? 'in-view' : ''}`}>
                            <h2>{`I am Mehraj Hasan`}</h2>
                            <h3>My name is Mehraj Hasan. I am an undergraduate student working towards my degree in Computer Science at CUNY-Hunter College with a minor in Mathematics.</h3>
                            <h4>I am passionate about creation and growth which led me to my focus in software engineering. Being a student is a value I hold dear as I believe there are always opportunities to grow your strengths and skills, and I find joy in taking these opportunities and my free-time to build my skills as well as create fun and meaningful projects!</h4>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={picture} alt="img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 

export default Main;
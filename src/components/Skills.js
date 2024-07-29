import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cplusplus from '../assets/images/c++.png';
import python from '../assets/images/python.png';
import js from '../assets/images/js.png';
import html from '../assets/images/html.png';
import css from '../assets/images/css.png';
import nodejs from '../assets/images/nodejs.png';
import express from '../assets/images/express.png';
import react from '../assets/images/react.png';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464},
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0},
            items: 1
        }
    };

    const { ref: skills, inView: skillisVisible } = useInView();

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div ref={skills} className={`skill-box ${skillisVisible ? 'in-view' : ''}`}>
                            <h2>
                                Skills
                            </h2>
                            <p>
                                Listed below are some of the languages/frameworks I am knowledgeable in
                            </p>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={cplusplus} alt='img'/>
                                </div>

                                <div className="item">
                                    <img src={python} alt='img'/>
                                </div>

                                <div className="item">
                                    <img src={js} alt='img'/>
                                </div>

                                <div className="item">
                                    <img src={react} alt='img'/>

                                </div>

                                <div className="item">
                                    <img src={nodejs} alt='img'/>
                                </div>

                                <div className="item">
                                    <img src={express} alt='img'/>
                                </div>

                                <div className="item">
                                    <img src={html} alt='img'/>
                                </div>

                                <div className="item">
                                    <img src={css} alt='img'/>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills;
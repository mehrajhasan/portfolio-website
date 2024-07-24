import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Container, Row, Col } from 'react-bootstrap';
import picture from '../assets/images/picture.JPG';
import snitch from '../assets/images/goldensnitch.gif';
import hedwig from '../assets/images/hedwig.gif';

export const Main = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const rotating = ["Software Engineer", "Web Developer", "etc"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta)

        return () => {clearInterval(ticker)};
    }, [text]);
    

    const tick = () => {
        let x = loopNum % rotating.length;
        let fullText = rotating[x];
        let updated = isDeleting?fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updated);

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2);
        }

        if(!isDeleting && updated === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updated === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

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
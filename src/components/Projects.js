import { Container } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import proj1 from '../assets/images/example.png';
import wip from '../assets/images/working.gif';

export const Projects = () => {
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

    const { ref: project, inView: projectIsVisible } = useInView({
        triggerOnce: true, 
        threshold: 0.1 
    });

    return (
        <section className="project" id="projects">
            <Container>
                <div ref={project} className={`projects-box ${projectIsVisible ? 'in-view' : ''}`}>
                    <h2>Projects</h2>
                    <p>Listed below are some of the projects I have created</p>
                
                    <div className="projects">
                        <div className="item">
                            <a href='https://github.com/mehrajhasan/Rock_Paper_Scissors'><img src={proj1} alt='img'/></a>
                        </div>

                        <div className="item">
                            <img src={wip} alt='img'/>
                        </div>

                        <div className="item">
                            <img src={wip} alt='img'/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    ) 
}

export default Projects;
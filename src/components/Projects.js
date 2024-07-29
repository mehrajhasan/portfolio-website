import Container from 'react-bootstrap/Container';
import proj1 from '../assets/images/example.png';
import wip from '../assets/images/working.gif';

export const Projects = () => {

    return (
        <section className="project" id="projects">
            <Container>
                <div className="projects-box">
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
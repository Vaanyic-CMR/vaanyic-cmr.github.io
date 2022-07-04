import ProjectsComp from "../components/ProjectsComp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Projects = props => {
    return (
        <div>
            <Header projectPage={ true }/>
            <ProjectsComp />
            <Footer />
        </div>
    );
};
export default Projects;
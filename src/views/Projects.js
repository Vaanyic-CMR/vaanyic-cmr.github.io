import ProjectsComp from "../components/ProjectsComp";
import Header from "../components/sub_components/Header";
import Footer from "../components/sub_components/Footer";

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
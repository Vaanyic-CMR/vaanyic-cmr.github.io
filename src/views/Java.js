import JavaComp from "../components/JavaComp";
import Header from "../components/sub_components/Header";
import Footer from "../components/sub_components/Footer";

const Java = props => {
    return (
        <div>
            <Header javaPage={ true }/>
            <JavaComp />
            <Footer />
        </div>
    );
};
export default Java;
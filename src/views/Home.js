import HomeComp from "../components/HomeComp";
import Header from "../components/sub_components/Header";
import Footer from "../components/sub_components/Footer";

const Home = props => {

    return (
        <div>
            <Header homePage={ true }/>
            <HomeComp />
            <Footer />
        </div>
    );
};
export default Home;
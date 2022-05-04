import HomeComp from "../components/HomeComp";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = props => {

    return (
        <div>
            <Header homePage={ true }/>
            <div className="container-md">
                Home
            </div>
            <Footer />
        </div>
    );
};
export default Home;
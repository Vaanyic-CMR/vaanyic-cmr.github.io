import MERNComp from "../components/MERNComp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MERN = props => {
    return (
        <div>
            <Header mernPage={ true }/>
            <MERNComp />
            <Footer />
        </div>
    );
};
export default MERN;
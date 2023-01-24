import MERNComp from "../components/MERNComp";
import Header from "../components/sub_components/Header";
import Footer from "../components/sub_components/Footer";

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
import Header from "../components/Header";
import Footer from "../components/Footer";

const MERN = props => {
    return (
        <div>
            <Header mernPage={ true }/>
            MERN View
            <Footer />
        </div>
    );
};
export default MERN;
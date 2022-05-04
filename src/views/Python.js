import PythonComp from "../components/PythonComp";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Python = props => {
    return (
        <div>
            <Header pythonPage={ true }/>
            <PythonComp />
            <Footer />
        </div>
    );
};
export default Python;
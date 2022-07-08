import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./views/Home";
import Python from "./views/Python";
import Java from "./views/Java";
import MERN from "./views/MERN";
import Projects from './views/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
    return (
        <div className='App'>
        <BrowserRouter>
            <Routes>

                <Route exact path="/" element={ <Home /> }/>
                <Route exact path="/python" element={ <Python /> }/>
                <Route exact path="/java" element={ <Java /> }/>
                <Route exact path="/mern" element={ <MERN /> }/>
                <Route exact path="/projects" element={ <Projects /> }/>

            </Routes>
        </BrowserRouter>
        </div>
    );
};
export default App;
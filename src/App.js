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
        <BrowserRouter basename='{process.env.PUBLIC_URL}'>
            <Routes>

                <Route path="/" element={ <Home /> }/>
                <Route path="/python" element={ <Python /> }/>
                <Route path="/java" element={ <Java /> }/>
                <Route path="/mern" element={ <MERN /> }/>
                <Route path="/projects" element={ <Projects /> }/>

            </Routes>
        </BrowserRouter>
        </div>
    );
};
export default App;
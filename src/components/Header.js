import { Link } from "react-router-dom";

const Header = props => {
    const { homePage, pythonPage, javaPage, mernPage } = props;

    return (
        <header
            className="navbar navbar-expand-lg navbar-light bg-light border border-secondary rounded ps-3 pe-3 mb-5"
        >
            <div className="container-fluid">
                <h1 className="navbar-brand">Caleb M. Rank</h1>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        {
                            homePage?
                            <Link className="nav-link active" to="/">Home</Link>
                            :<Link className="nav-link" to="/">Home</Link>
                        }
                    </li>
                    <li className="nav-item">
                        {
                            pythonPage?
                            <Link className="nav-link active" to="/python">Python</Link>
                            :<Link className="nav-link" to="/python">Python</Link>
                        }
                    </li>
                    <li className="nav-item">
                        {
                            javaPage?
                            <Link className="nav-link active" to="/java">Java</Link>
                            :<Link className="nav-link" to="/java">Java</Link>
                        }
                    </li>
                    <li className="nav-item">
                        {
                            mernPage?
                            <Link className="nav-link active" to="/mern">MERN</Link>
                            :<Link className="nav-link" to="/mern">MERN</Link>
                        }
                    </li>
                </ul>
            </div>
        </header>
    );
};
export default Header;
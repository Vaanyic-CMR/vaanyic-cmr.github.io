const MERNComp = _props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded"
            style={ {textAlign: "left"} }
        >
            <div
                className="border border-secondary rounded p-3"
                style={ {textAlign: "center"} }
            >
                <img
                    className="m-1"
                    src="https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress"
                    alt="MongoDB Logo"
                    style={ {height: "100px"} }
                />
                <img
                    className="m-1"
                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
                    alt="Express Logo"
                    style={ {height: "100px"} }
                />
                <img
                    className="m-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    style={ {height: "100px"} }
                />
                <img
                    className="m-1"
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS Logo"
                    style={ {height: "100px"} }
                />
            </div>
            <div className="m-5">
                <h3>Overview</h3>
                <p>
                    My first experience using MERN was while attending Coding Dojo from August of 2021 to May of 2022 to learn 3 Stack, Full Stack, web developement.
                    I spent 8 weeks learning how to build full stack web applications using the different components of MERN.
                    Both of the final projects (listed on the projects page) for the course were either partially or entirely relient on the MERN stack.
                    The group project even blended a Python & Flask API with a React client.
                </p>
                <h5 className="mx-3">Technical Skills</h5>
                <ul className="mx-5">
                    <li>Front-End Web Developement</li>
                    <ul>
                        <li>HTML</li>
                        <li>CSS & Bootstrap</li>
                        <li>Javascript</li>
                    </ul>
                    <li>MERN</li>
                    <ul>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React</li>
                        <li>MongoDB & Mongoose</li>
                    </ul>
                </ul>
            </div>
        </div>
    );
};
export default MERNComp;
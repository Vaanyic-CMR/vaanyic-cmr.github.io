// import MERN_Logo from "../images/MERN-Logos/nodejs-new-pantone-black.svg"

const MERNComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded"
            style={ {textAlign: "left"} }
        >
            <div
                className="border border-secondary rounded"
                style={ {textAlign: "center"} }
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
                    alt="NodeJS Logo"
                    style={ {height: "100px"} }
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                    alt="React Logo"
                    style={ {height: "100px"} }
                />
                <img
                    src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
                    alt="Express Logo"
                    style={ {height: "100px"} }
                />
                <img
                    src="https://webimages.mongodb.com/_com_assets/cms/kusb9stg1ndrp7j53-MongoDBLogoBrand1.png?auto=format%252Ccompress"
                    alt="MongoDB Logo"
                    style={ {height: "100px"} }
                />
            </div>
            <div className="mx-5">
                Lordem
            </div>
        </div>
    );
};
export default MERNComp;
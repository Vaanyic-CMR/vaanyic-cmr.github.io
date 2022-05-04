const PythonComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded d-flex"
            style={ {textAlign: "left"} }
        >
            {/* Flask, Django, MySQL */}
            <img
                className="border border-secondary rounded text-start"
                src="https://www.python.org/static/community_logos/python-powered-h.svg"
                alt="MERN Logo"
                style={ {height: "400px"} }
            />
            <div className="mx-5">
                Lordem
            </div>
        </div>
    );
};
export default PythonComp;
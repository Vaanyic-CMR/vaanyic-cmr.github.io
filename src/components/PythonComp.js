const PythonComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded d-md-flex"
            style={ {textAlign: "left"} }
        >
            {/* Flask, Django, MySQL */}
            <img
                className="border border-secondary rounded text-start"
                src="https://www.python.org/static/community_logos/python-powered-h.svg"
                alt="Python Logo"
                style={ {height: "400px"} }
            />
            <div className="m-5">
                <h3>Overview</h3>
                <p>
                    I have roughly 5 years of Python experience.
                    I first learned Python when attending Fort Lewis College in Durango CO.
                    Starting with the basics I eventually learned how to use python for data analysis and the basics of neural networks.
                    During this time as well as today, I have learned how to make local applications and local network communication through self study.
                    From August of 2021 to May of 2022 I attended Coding Dojo to learn 3 Stack, Full Stack, web developement and spent 8 weeks learning this with the Python Flask & Django libraries.
                    One of the final projects for the course (listed on the projects page) used a blend of Python for the API and MERN for the client.
                </p>
                <h5 className="mx-3">Technical Skills</h5>
                <ul className="mx-5">
                    <li>Flask</li>
                    <li>Django</li>
                    <li>MySQL & SQLite</li>
                    <li>Tkinter</li>
                    <li>Socket</li>
                </ul>
            </div>
        </div>
    );
};
export default PythonComp;
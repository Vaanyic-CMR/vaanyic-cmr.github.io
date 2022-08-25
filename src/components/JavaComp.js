const JavaComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded d-md-flex"
            style={ {textAlign: "left"} }
        >
            {/* Flask, Django, MySQL */}
            <img
                className="border border-secondary rounded text-start p-3"
                src="https://static.javatpoint.com/core/images/java-logo3.png"
                alt="Java Logo"
                style={ {height: "400px"} }
            />
            <div className="m-5">
                <h3>Overview</h3>
                <p>
                    My first experience using Java was while attending Coding Dojo from August of 2021 to May of 2022 to learn 3 Stack, Full Stack, web developement.
                    I spent 8 weeks learning how to build full stack web applications using the Java programming language.
                    Of the 3 stacks I took at Coding Dojo, Java was the most difficult and where I was least skilled.
                    Regardless, I still completed the Java Stack with high marks.
                </p>
                <h5 className="mx-3">Technical Skills</h5>
                <ul className="mx-5">
                    <li>Java Spring</li>
                    <li>MySQL</li>
                </ul>
            </div>
        </div>
    );
};
export default JavaComp;
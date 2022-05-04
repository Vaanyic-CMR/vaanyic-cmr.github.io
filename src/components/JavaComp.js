const JavaComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded d-flex"
            style={ {textAlign: "left"} }
        >
            {/* Flask, Django, MySQL */}
            <img
                className="border border-secondary rounded text-start"
                src="https://static.javatpoint.com/core/images/java-logo3.png"
                alt="Java Logo"
                style={ {height: "400px"} }
            />
            <p className="mx-5">
                Lordem
            </p>
        </div>
    );
};
export default JavaComp;
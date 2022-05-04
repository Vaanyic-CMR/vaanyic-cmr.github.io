const HomeComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded d-flex"
            style={ {textAlign: "left"} }
        >
            <img
                className="border border-secondary rounded text-start"
                src="https://media-exp1.licdn.com/dms/image/C5603AQG82RGy4oSYOw/profile-displayphoto-shrink_800_800/0/1634251846215?e=1657152000&v=beta&t=SWLzJgGdJ3DfvFpjCgmaHkO7yt64UXG4QWl0DqOYI9k"
                alt="Personal"
                style={ {height: "400px"} }
            />
            <div className="mx-5">
                Lordem
            </div>
        </div>
    );
};
export default HomeComp;
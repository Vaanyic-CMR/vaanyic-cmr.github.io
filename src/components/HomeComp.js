const HomeComp = props => {
    return (
        <div
            className="p-3 bg-light border border-secondary rounded"
            style={ {textAlign: "left"} }
        >
            <img
                className="border border-secondary rounded text-start"
                src="https://media-exp2.licdn.com/dms/image/C5616AQGmt9WxAYADpg/profile-displaybackgroundimage-shrink_350_1400/0/1634251789632?e=1662595200&v=beta&t=3UhhqCAklIMR4opFqmR4EGpI2_EZD02hsIrUWsrce1A"
                alt="Banner"
                style={ {width: "100%"} }
            />
            {/* <img
                className="border border-secondary circle text-start"
                src="https://media-exp1.licdn.com/dms/image/C5603AQG82RGy4oSYOw/profile-displayphoto-shrink_800_800/0/1634251846215?e=1657152000&v=beta&t=SWLzJgGdJ3DfvFpjCgmaHkO7yt64UXG4QWl0DqOYI9k"
                alt="Personal"
                style={ {height: "400px"} }
            /> */}
            <div className="m-5">
                Lordem
            </div>
        </div>
    );
};
export default HomeComp;
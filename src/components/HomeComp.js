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
            <div className="m-5">
                <h3>Overview</h3>
                <p className="mx-4">
                    My name is Caleb M. Rank and I was born in August, 1998.
                    I currently live in Southwest Colorado near Mancos CO. 
                    I am a former college student who is now a full stack developer with knowledge in Python, Java, and MERN.
                    I am passionate about creating useful applications that people can enjoy and/or will make something in their life easier.
                </p>
                <p className="mx-4">
                    In high school, for most of my 4 years I took dual credit college courses for two reasons.
                    One, to get a head start on my college education and two, to complete that head start for free.
                    During this time I found an interest in computer programming and decided that this was what I wanted to do in the future.
                </p>
                <p className="mx-4">
                    I am a hardworking person who, when needing to take risky action, will try to find the most practical and risk free plan to accomplish that action.
                    In August of 2021, I decided to leave my program at Fort Lewis College in Durango CO, to instead attend a 32 week part-time course in web development with Coding Dojo.
                    I did this as Coding Dojo was more aligned with my desired career and was significanly less expensive than a degree teaching the same thing.
                </p>
            </div>
        </div>
    );
};
export default HomeComp;
const Footer = props => {
    return (
        <footer className="p-2 bg-light border border-secondary rounded mt-5">
            <div className="row">
                <p>calebmrank@gmail.com | (970) 394-4974</p>
            </div>
            <div className="row">
                <div className="col">
                    <img
                        src={ require("../images/GitHub-Mark/PNG/GitHub-Mark-32px.png") }
                        alt="Github Icon"
                        style={ {width: "20px"} }
                    />
                    <a href="https://github.com/Vaanyic-CMR">Vaanyic-CMR</a>
                </div>
                <div className="col">
                    <img
                        src={ require("../images/LinkedIn-Logos/LI-In-Bug.png") }
                        alt="LinkedIn Icon"
                        style={ {width: "20px"} }
                    />
                    <a href="https://www.linkedin.com/in/caleb-m-rank/">caleb-m-rank</a>
                </div>
                <div className="col">
                    <img
                        src={ require("../images/Twitter-Logos/Twitter logo/PNG/2021 Twitter logo - blue.png") }
                        alt="Twitter Icon"
                        style={ {width: "20px"} }
                    />
                    <a href="https://twitter.com/Tenkara37">@Tenkara37</a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
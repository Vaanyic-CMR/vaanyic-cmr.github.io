import logo from "../../logo.svg"

const Footer = props => {
    return (
        <footer className="p-3 bg-light border border-secondary rounded mt-5">
            <div className="row">
                <p>calebmrank@gmail.com | (970) 394-4974</p>
            </div>
            <div className="row">
                <div className="col">
                    <img
                        src={ require("../../images/GitHub-Mark/PNG/GitHub-Mark-32px.png") }
                        alt="Github Icon"
                        style={ {width: "20px"} }
                    />
                    <a href="https://github.com/Vaanyic-CMR">Vaanyic-CMR</a>
                </div>
                <div className="col">
                    <img
                        src={ require("../../images/LinkedIn-Logos/LI-In-Bug.png") }
                        alt="LinkedIn Icon"
                        style={ {width: "20px"} }
                    />
                    <a href="https://www.linkedin.com/in/caleb-m-rank/">caleb-m-rank</a>
                </div>
                <div className="col">
                    <img
                        src={ require("../../images/Twitter-Logos/Twitter logo/PNG/2021 Twitter logo - blue.png") }
                        alt="Twitter Icon"
                        style={ {width: "20px"} }
                    />
                    <a href="https://twitter.com/Tenkara37">@Tenkara37</a>
                </div>
            </div>
            <div className="row mt-3">
            <div className="col">
                    <img
                        src={ logo }
                        alt="React Icon"
                        style={ {width: "40px"} }
                    />
                    <a
                        href="https://reactjs.org/"
                        className="text-secondary"
                        >Powered By React</a>
                </div>
                <div className="col">
                    <img
                        src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
                        alt="Bootstrap Icon"
                        style={ {width: "30px"} }
                    />
                    <a
                        href="https://getbootstrap.com/"
                        className="text-secondary ms-1"
                        >Powered By Bootstrap</a>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
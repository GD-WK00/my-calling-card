import phoneLogo from "./img/phone.svg"
import mailLogo from "./img/envelope-at.svg"

const RightSide = () => {
    return (
        <div className="right-side">
            <div className="personal-info">
                <h1>Wojciech Kozera</h1>
                <h4>Junior React Developer</h4>
            </div>
            <div className="skills">
                <h3>My skills:</h3>
                <ul>
                    <li>React</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="contact-info">
                <div className="phone">
                    <img src={phoneLogo} alt="phoneLogo.svg" />
                    <h3>660 879 574</h3>
                </div>
                <div className="mail">
                    <img src={mailLogo} alt="mailLogo.svg" /> 
                    <h3>wkozera@vp.pl</h3>
                </div>
            </div>
        </div>
    );
}

export default RightSide;
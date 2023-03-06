import "./HeaderDark.scss";

// import dictionary
import { NavLink } from 'react-router-dom';

// import image
import UserIconImage from "../../assets/Images/Mohan-muruge.jpg";

function HeaderDark() {
    return (
        <>
            <section className="Header">
                <div className="Header__logo--container">
                    <NavLink to="/" className="Header__logo--link">
                        <p className="Header__logo--title">PlayersHive</p>
                    </NavLink>
                </div>

                <div className="Header__navbar--container">
                    <NavLink to="/about" className="Header__navbar--link">
                        <div className="Header__navbar--button">
                            <div className="Header__navbar--About">About</div>
                        </div>
                    </NavLink>
                    <NavLink to="/resources" className="Header__navbar--link">
                        <div className="Header__navbar--button">
                            <div className="Header__navbar--Resources">Resources</div>
                        </div>
                    </NavLink>
                    <NavLink to="/community" className="Header__navbar--link">
                        <div className="Header__navbar--button">
                            <div className="Header__navbar--Community">Community</div>
                        </div>
                    </NavLink>
                    <NavLink to="/opportunities" className="Header__navbar--link">
                        <div className="Header__navbar--button">
                            <div className="Header__navbar--Opportunities">Opportunities</div>
                        </div>
                    </NavLink>
                    <NavLink to="/contactus" className="Header__navbar--link">
                        <div className="Header__navbar--button">
                            <div className="Header__navbar--ContactUs">Contact Us</div>
                        </div>
                    </NavLink>
                </div>

                <div className="Header__user--container">
                    <img src={UserIconImage}  className="Header__user--image" alt="User Icon"/>
                </div>

            </section>
        </>
    );
}

export default HeaderDark;
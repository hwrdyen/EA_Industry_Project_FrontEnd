import "./HeaderLight.scss";

// import dictionary
import { NavLink } from 'react-router-dom';

// import image
import UserIconImage from "../../assets/Images/Mohan-muruge.jpg";

function HeaderLight() {
    return(
        <>
            <section className="HeaderLight">
                <div className="HeaderLight__logo--container">
                    <NavLink to="/" className="HeaderLight__logo--link">
                        <p className="HeaderLight__logo--title">PlayersHive</p>
                    </NavLink>
                </div>

                <div className="HeaderLight__navbar--container">
                    <NavLink to="/about" className="HeaderLight__navbar--link">
                        <div className="HeaderLight__navbar--button">
                            <div className="HeaderLight__navbar--About">About</div>
                        </div>
                    </NavLink>
                    <NavLink to="/resources" className="HeaderLight__navbar--link">
                        <div className="HeaderLight__navbar--button">
                            <div className="HeaderLight__navbar--Resources">Resources</div>
                        </div>
                    </NavLink>
                    <NavLink to="/community" className="HeaderLight__navbar--link">
                        <div className="HeaderLight__navbar--button">
                            <div className="HeaderLight__navbar--Community">Community</div>
                        </div>
                    </NavLink>
                    <NavLink to="/opportunities" className="HeaderLight__navbar--link">
                        <div className="HeaderLight__navbar--button">
                            <div className="HeaderLight__navbar--Opportunities">Opportunities</div>
                        </div>
                    </NavLink>
                    <NavLink to="/contactus" className="HeaderLight__navbar--link">
                        <div className="HeaderLight__navbar--button">
                            <div className="HeaderLight__navbar--ContactUs">Contact Us</div>
                        </div>
                    </NavLink>
                </div>

                <div className="HeaderLight__user--container">
                    <img src={UserIconImage}  className="HeaderLight__user--image" alt="User Icon"/>
                </div>

            </section>
        </>
    );
}

export default HeaderLight;
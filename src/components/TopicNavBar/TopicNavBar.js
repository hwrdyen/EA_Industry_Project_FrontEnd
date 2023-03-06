import "./TopicNavBar.scss";
import { Icon } from '@iconify/react';

// import dictionaries
import { NavLink } from "react-router-dom";

function TopicNavBar() {
    return(
        <>
            <div className="TopicNavBar">
                <p className="TopicNavBar__title">Topics & Courses</p>

                <ul className="TopicNavBar__section--functionlist">
                    <li className="TopicNavBar__section--functionlistitem">
                        <Icon icon="ri:search-fill"/>
                        <p>Search</p>
                    </li>
                    <li className="TopicNavBar__section--functionlistitem">
                        <Icon icon="mdi:home" />
                        <p>Home</p>
                    </li>
                    <li className="TopicNavBar__section--functionlistitem">
                        <Icon icon="mdi:bell" />
                        <p>Notifications</p>
                    </li>
                    <li className="TopicNavBar__section--functionlistitem">
                        <Icon icon="mdi:message" />
                        <p>Messages</p>
                    </li>
                </ul>

                <div className="TopicNavBar__section--welcome">
                    <div className="TopicNavBar__section--welcometitle">
                        <Icon icon="mdi:chevron-down" />
                        {/* <Icon icon="mdi:chevron-right" /> */}
                        <p>Welcome!</p>
                    </div>

                    <ul className="TopicNavBar__section--welcomelist">
                        <li className="TopicNavBar__section--welcomelistitem">Getting Started</li>
                        <li className="TopicNavBar__section--welcomelistitem">Introductions</li>
                    </ul>
                </div>

                <div className="TopicNavBar__section--content">
                    <NavLink to="/resources" className="TopicNavBar__section--contenttitlelink">
                        <div className="TopicNavBar__section--contenttitle selected">
                            <Icon icon="mdi:chevron-down" />
                            {/* <Icon icon="mdi:chevron-right" /> */}
                            <p>Content Videos 101</p>
                        </div>
                    </NavLink>


                    <ul className="TopicNavBar__section--contentlist">
                        <li className="TopicNavBar__section--contentlistitem firstitem">
                            <NavLink to={"/resources/equipment-and-software"} className="TopicNavBar__section--contentlistitemlink">
                                Equipment & Software
                            </NavLink>

                        </li>
                        <li className="TopicNavBar__section--contentlistitem">Build Your Profile</li>
                        <li className="TopicNavBar__section--contentlistitem">Identify Your Audience</li>
                        <li className="TopicNavBar__section--contentlistitem">What’s Your Craft?</li>
                        <li className="TopicNavBar__section--contentlistitem">Recording</li>
                        <li className="TopicNavBar__section--contentlistitem">Editing</li>
                        <li className="TopicNavBar__section--contentlistitem">Streaming</li>
                        <li className="TopicNavBar__section--contentlistitem">Grow Your Followers</li>
                        <li className="TopicNavBar__section--contentlistitem">Making Money</li>
                    </ul>
                </div>

                <div className="TopicNavBar__section--equipment">
                    <div className="TopicNavBar__section--equipmenttitle">
                        <Icon icon="mdi:chevron-right" />
                        <p>Equipment Basics</p>
                    </div>
                </div>

                <div className="TopicNavBar__section--style">
                    <div className="TopicNavBar__section--styletitle">
                        <Icon icon="mdi:chevron-right" />
                        <p>Find Your Unique Style</p>
                    </div>
                </div>

                <div className="TopicNavBar__section--brainstorming">
                    <div className="TopicNavBar__section--brainstormingtitle">
                        <Icon icon="mdi:chevron-right" />
                        <p>Brainstorming Video Ideas</p>
                    </div>
                </div>

                <div className="TopicNavBar__section--followers">
                    <div className="TopicNavBar__section--followerstitle">
                        <Icon icon="mdi:chevron-right" />
                        <p>Build Your Followers</p>
                    </div>
                </div>

                <div className="TopicNavBar__section--makemoney">
                    <div className="TopicNavBar__section--makemoneytitle">
                        <Icon icon="mdi:chevron-right" />
                        <p>How To Make Money</p>
                    </div>
                </div>

            </div>
        </>
    );
}

export default TopicNavBar;
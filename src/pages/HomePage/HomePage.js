import "./HomePage.scss";

//import components
import HeaderDark from "../../components/HeaderDark/HeaderDark.js";

//import images
import GamingHomepageImg from "../../assets/Images/gaminghomepage.jpg";

function HomePage() {
    return(
        <>
            <HeaderDark />
            <section className="HomePage">
                <div className="HomePage__sectionone--container">
                    <div className="HomePage__sectionone--titlecontainer">
                        <p className="HomePage__sectionone--title">Don't game alone - join us and discover the simpler side of content creation</p>
                        <p className="HomePage__sectionone--subtitle">Get the support you need to thrive as a gamer so you can stay focused on what really matters - growing your channel.</p>
                    </div>
                    

                    <button className="HomePage__sectionone--learnmore">Learn More</button>
                </div>

                <div className="HomePage__sectiontwo--container">
                    <div className="HomePage__sectiontwo--titlecontainer">
                        <p className="HomePage__sectiontwo--title">Struggling to consistently release gaming videos to build and grow your audience?</p>
                        <p className="HomePage__sectiontwo--subtitle">Discover how to establish a manageable and consistent routine for posting gaming content that values a healthy gaming-life balance with our Content Videos 101 crash course.</p>
                    </div>

                    <button className="HomePage__sectiontwo--buildaroutine">Build A Routine Today!</button>
                </div>

                <div className="HomePage__sectionthree--container">
                    <img src={GamingHomepageImg} className="HomePage__sectionthree--image" alt="Home Page Gaming"/>
                </div>

            </section>
        </>
    );
}

export default HomePage;
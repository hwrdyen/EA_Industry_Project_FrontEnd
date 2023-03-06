import "./Resources.scss";

// import components
import HeaderLight from "../../components/HeaderLight/HeaderLight.js";
import TopicNavBar from "../../components/TopicNavBar/TopicNavBar";
import ContentVideos101 from "../../components/ContentVideos101/ContentVideos101";

function Resources() {
    return(
        <>
            <HeaderLight />
            <section className="Resources">
                <div className="Resources__section--left">
                    <TopicNavBar/>
                </div>

                <div className="Resources__section--right">
                    <p className="Resources__breadcrumb">Resources / Topics & Lessons Home / Content Videos 101</p>
                    <ContentVideos101/>
                </div>
            </section>
        </>
    );
}

export default Resources;
import "./ContentVideos101.scss";
import { NavLink } from "react-router-dom";

// import images
import ContentVideos101Cover from "../../assets/Images/contentvideos101cover.jpg";

function ContentVideos101() {
    return(
        <>
            <div className="ContentVideos101">
                <div className="ContentVideos101__titlecontainer">
                    <p className="ContentVideos101__title">Content Videos 101</p>
                    <button className="ContentVideos101__titlebutton">Start the Course Now</button>
                </div>

                <img src={ContentVideos101Cover} className="ContentVideos101__coverimage" alt="Content Videos 101 Cover"/> 
                <div className="ContentVideos101__contentcontainer">
                    <div className="ContentVideos101__titlecontentcontainer">
                        <p className="ContentVideos101__content--title">Creating Consistent Content: A Crash Course</p>
                        <div className="ContentVideos101__content--subtitlecontainer">
                            <p>Do you struggle to create consistent content for your followers? Do you want to grow and build your gaming career, but can’t seem to establish the right routine to do so? Trust us - we get it! Uploading weekly gaming videos can be a difficult task for anyone, especially those of us just starting out. Well we have the solution for you!</p>
                            <br></br>
                            <p>Content Videos 101 covers all the bases for learning how to establish a manageable and consistent routine for posting your gaming content that honors a healthy gaming-life balance!</p>
                            <br></br>
                            <p>Take the course, ask questions, and learn from fellow gamers! Get started today.</p>
                        </div>
                    </div>


                    <div className="ContentVideos101__content--buttoncontainer">
                        <NavLink to={"/resources/equipment-and-software"}>
                            <button className="ContentVideos101__content--buttonstartcourse">Start the Course Now</button>
                        </NavLink>
                        <button className="ContentVideos101__content--buttontrailer">Watch Trailer</button>
                    </div>
                </div>


            </div>
        </>
    );
}

export default ContentVideos101;
import "./NotFound.scss";

//import Components
import HeaderDark from "../../components/HeaderDark/HeaderDark";

function NotFound() {
    return(
        <>
            <HeaderDark/>
            <div className="NotFound">
                <p className="NotFound__title">STAY TUNED...</p>
            </div>

        </>
    );
}

export default NotFound;
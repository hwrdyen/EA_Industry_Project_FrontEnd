import "./EquipmentandSoftwareComp.scss";

// import images
import EquipmentandSoftwareVideo from "../../assets/Images/equimentandsoftwarevideo.jpg";
import UserIconImage from "../../assets/Images/Mohan-muruge.jpg";

function EquipmentandSoftwareComp() {
    return(
        <>
            <div className="EquipmentandSoftwareComp">
                <div className="EquipmentandSoftwareComp__titlecontainer">
                    <p className="EquipmentandSoftwareComp__title">Equipment & Software</p>
                    <button className="EquipmentandSoftwareComp__titlebutton">Course Home</button>
                </div>

                <div className="EquipmentandSoftwareComp__contentcontainer">
                    <p className="EquipmentandSoftwareComp__breadcrumbs">Content Videos 101 / Equipment & Software</p>
                    <img src={EquipmentandSoftwareVideo} className="EquipmentandSoftwareComp__img" alt="Equipment and Software Video"/>

                    <div className="EquipmentandSoftwareComp__commentinfocontainer">
                        <p className="EquipmentandSoftwareComp__commentnumber">64 Comments</p>
                        <p className="EquipmentandSoftwareComp__sortby">SORT BY</p>
                    </div>

                    <div className="EquipmentandSoftwareComp__commentsubmitcontainer">
                        <img src={UserIconImage}  className="EquipmentandSoftwareComp__user--image" alt="User Icon"/>
                        <div className="EquipmentandSoftwareComp__commentsectioncontainer">
                            <p className="EquipmentandSoftwareComp__commentsection--top">Add a comment...</p>
                            <div className="EquipmentandSoftwareComp__commentsection--bottom">
                                <div className="EquipmentandSoftwareComp__buttoncontainer">
                                    <button className="EquipmentandSoftwareComp__button--cancel">CANCEL</button>
                                    <button className="EquipmentandSoftwareComp__button--comment">COMMENT</button>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EquipmentandSoftwareComp;
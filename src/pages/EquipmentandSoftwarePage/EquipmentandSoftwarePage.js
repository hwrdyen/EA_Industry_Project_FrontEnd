import "./EquipmentandSoftwarePage.scss"

// import components
import HeaderLight from "../../components/HeaderLight/HeaderLight.js";
import TopicNavBar from "../../components/TopicNavBar/TopicNavBar";
import EquipmentandSoftwareComp from "../../components/EquipmentandSoftwareComp/EquipmentandSoftwareComp";

function EquipmentandSoftwarePage() {
    return(
        <>
            <HeaderLight />
            <div className="EquipmentandSoftwarePage">
                <div className="EquipmentandSoftwarePage__section--left">
                    <TopicNavBar/>
                </div>

                <div className="EquipmentandSoftwarePage__section--right">
                    <p className="EquipmentandSoftwarePage__breadcrumb"></p>
                    <EquipmentandSoftwareComp />
                </div>
            </div>
        </>
    );
}

export default EquipmentandSoftwarePage;
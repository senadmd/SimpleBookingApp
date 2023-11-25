import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { GrStatusUnknown } from "react-icons/gr";
import { Equipment } from "../interfaces/booking/equipment"
import { FaSquarePhone } from "react-icons/fa6";
import { BsProjectorFill } from "react-icons/bs";
import { MdScreenshotMonitor } from "react-icons/md";
import { PiMarkerCircleFill } from "react-icons/pi";
import { EquipmentType } from "../interfaces/booking/equipmentType";

export const renderEquipment = (e: Equipment[]) => ((e.length > 0) ? (e.map(x => {
    switch (x.type) {
        case EquipmentType.WHITEBOARD:
            return <div key={x.type}><span>{x.type}</span><PiMarkerCircleFill /></div>
        case EquipmentType.SCREEN:
            return <div key={x.type}><span>{x.type}</span> <MdScreenshotMonitor /> </div>
        case EquipmentType.PROJECTOR:
            return <div key={x.type}><span>{x.type}</span> <BsProjectorFill /> </div>
        case EquipmentType.PHONE:
            return <div key={x.type}><span>{x.type}</span> <FaSquarePhone /> </div>
        case EquipmentType.OTHER:
            return <div key={x.type}><span>{x.type}</span> <AiOutlineLoading3Quarters/> </div>
        default:
           return <div key={x.type}><span>{x.type}</span> <GrStatusUnknown /> </div>
    }
})) : ( <div key={'none'}><span>None</span></div>)
)
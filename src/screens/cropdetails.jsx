import CropDetails from "../components/showcropdetails";
export default function CropDeatislScreen({route}){
    const {crop} =route.params
    console.log(crop)
    return(
        <CropDetails crop={crop}></CropDetails>
    )
}
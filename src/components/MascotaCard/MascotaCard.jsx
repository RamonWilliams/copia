
import { Link } from "react-router-dom";
import "./MascotaCard.css"



const MascotaCard = ({ mascota }) => { 
  


    return (
         <Link to={`/mascota/${mascota._id}`}>
       
            <div className="pet-image">
                <img src={mascota.image} alt={mascota.petname} />
            </div>
           
        </Link>
    )
}

export default MascotaCard;
import { API } from '../../services/API';
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import "./MascotaDetail.css"

const MascotaDetail = () => {

    const { id } = useParams();

    const [ pet, setPet ] = useState([]);

    const getMascota = async() => {
        API.get(`/mascota/${id}`).then( res => {
            setPet( res.data.mascota)
        })
    }

    useEffect( () => {
        getMascota();
    }, [])

  return (
    <div className='contenedor'>

        <div className='carta'>  
        <div className='lado   frente'>
        <h2>  Petname: { pet.petname } </h2>
        <h3> Nickname: { pet.nickname} </h3>
        <p>  Type: { pet.type } </p>
        <p> Description: { pet.description } </p>        
        </div> 

        <div className='lado atras'> 
        <img src={ pet.image } alt={ pet.petname } />
        </div>
        

        </div>
    </div>
  )
}

export default MascotaDetail
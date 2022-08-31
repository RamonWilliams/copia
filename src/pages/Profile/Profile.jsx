import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { API } from "../../services/API";
import Swal from "sweetalert2";
import "./Profile.css";


const Profile = () => {
   
    const { mascota, logout } = useContext(JwtContext);
    const { register, handleSubmit,formState:{errors} } = useForm();
    let navigate = useNavigate();
    
   
    const deleteMascota = () => {
        Swal.fire({
            title: "¿Are you sure you want to delete the mascot",
            text: "You can not get it back",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "yeap, delete!",
        }).then((result) => {
            if (result.isConfirmed) {
              API.delete( `/mascota/${mascota._id}`).then((res) => {
                logout();
                if (res) {
                    navigate("/");
                  Swal.fire("Pet deleted");
                }
                  
                })
              };


            }
        )
    };

    const defaultValues = {
        petname:mascota.petname,
        nickname: mascota.nickname,
        image:mascota.image,
        type: mascota.type,
        description: mascota.description  }   
   
   
   
   
    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("nickname", data.nickname);       
        formData.append("image", data.image[0]);
        formData.append("type", data.type);
        formData.append("description", data.description);

        API.patch(`/mascota/${mascota._id}`, formData).then((res) => {
            logout();
            if (res) {
                navigate("/login");
                Swal.fire("Profile edited, please log in again");
            }
        });
    };
           
        

    return (
        <section className="profile">
          
            <div className="image">
            <img src={mascota.image} alt="Logo" />
            </div>
            <form onSubmit={handleSubmit(formSubmit)} className="perfilFormulario">
                <label htmlFor="petname">Edit Petname</label>
                <input type="text" id="petname" name="petname" placeholder="Write your petname"{...register("petname" ,{
                        required:{
                            value: true,
                            message: "Necesitas este campo"
                        } 
                    })}
                 defaultValue={defaultValues.petname} />
                  {errors.petname && <span>{errors.petname.message}</span>}  
                 
                  <label htmlFor ="nickname"> Nickname </label>
               <input type="text" id="nickname" name="nickname" placeholder="Write your nickname " {...register("nickname" ,{
                        required:{
                            value: true,
                            message: "Necesitas este campo"
                        } 
                    })}
                 defaultValue={defaultValues.petname} />
                  {errors.nickname && <span>{errors.nickname.message}</span>}  

                
                <label htmlFor="image">Change your Image</label>
                <input type="file" id="image" name="image" placeholder="Enter an image" {...register("image",{
                    required:{
                        value:true,
                        message:"Necesitas este campo"
                    }
                })} />                
                {errors.image && <span>{errors.image.message}</span>}  
                  
                <label htmlFor="type"> Change Type</label>
                <input type="text" id="type" name="type" placeholder="Write a type"{...register("type",{
                    required:{
                        value:true,
                        message:"Necesitas este campo"
                    }
                })} />
                 {errors.type && <span>{errors.type.message}</span>}  


               <label htmlFor="description">Change your description</label>
                <input type="text" id="description" name="description" placeholder="Write a description" {...register("description",{
                    required:{
                        value:true,
                        message:"Necesitas este campo"
                    }
                })} />
                 {errors.description && <span>{errors.description.message}</span>}  
                 
                {mascota?( <> <button type="submit"> Edit </button>
                <button type="button" onClick={()=>deleteMascota(mascota)}>Delete</button>
                </>): null}
               

                
            </form>
        </section>
    );
};

export default Profile;

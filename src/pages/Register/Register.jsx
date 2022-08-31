
import { useForm } from "react-hook-form";
import { API } from "../../services/API";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import"./Register.css"


const Register = () => {
    const { register, handleSubmit,formState:{errors} } = useForm();
    let navigate = useNavigate();

    const formSubmit = (data) => {
        const formData = new FormData();
        formData.append("petname", data.petname);
        formData.append("nickname", data.nickname);
        formData.append("password", data.password);
        formData.append("image", data.image[0]);
        formData.append("type", data.type);
        formData.append("description", data.description);
        API.post("/mascota/register", formData).then((res) => {
            console.log(res)
            if (res) {
                navigate("/login");
                Swal.fire("Welcome, now you can login")
            }


        })
    };

    return (
        <section className="registro">
            <form onSubmit={handleSubmit(formSubmit)} className="registrarse">
                <label htmlFor="petname">Petname</label>
                <input type="text" id="petname" name="petname" placeholder="Write your petname"  {...register("petname",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                        
                    }                 
                })} />
                 {errors.petname && <span>{errors.petname.message}</span>} 

                <label htmlFor="nickname">Nickname</label>
                <input type="text" id="nickname" name="nickname"  placeholder="Write your nickname" {...register("nickname",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} />
                 {errors.nickname && <span>{errors.nickname.message}</span>} 

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"  placeholder="Write your password" {...register("password",{
                    required:{
                        value:true,
                        message:"La contraseña debe de tener al menos 6 caracteres",
                       
                    }                 
                })} />
                 {errors.password && <span>{errors.password.message}</span>} 

                <label htmlFor="image">Image</label>
                <input type="file" id="image" name="image" placeholder="Enter an image" {...register("image",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                        
                    }                 
                })} />
                 {errors.image && <span>{errors.image.message}</span>}

                <label htmlFor="type">Type</label>
                <input type="text" id="type" name="type"  placeholder="Write a type" {...register("type",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} />
                 {errors.type && <span>{errors.type.message}</span>}

                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description"  placeholder="Write a description"{...register("description",{
                    required:{
                        value:true,
                        message:"Necesitas este campo",
                       
                    }                 
                })} /> {errors.description && <span>{errors.description.message}</span>}

                <button type="submit" className="register">Register</button>
            </form>
        </section>
    )
}

export default Register;
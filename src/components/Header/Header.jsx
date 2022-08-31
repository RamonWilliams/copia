import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext"
import { Link, useNavigate } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const { mascota, logout } = useContext(JwtContext);
    let navigate = useNavigate();

    return (

        <header>
            <h1> Pets Shop</h1>
           
            <nav>
             
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {mascota?
                     (<> <li>
                        <Link to="/mascotas">Pets</Link>
                    </li> </>
                    ) : null} 
                    {mascota ? (
                        <>

                            <li>
                                <Link to="/profile">Profile</Link>
                            </li>
                        </>
                    ) : null}
                </ul>
                <div className="control">
                    {mascota ? (  
                            <>                           
                            {mascota.image !== "undefined" ? (    
                                                          
                                <img src={mascota?.image} alt="Mascota Image" />
                                ) : null}
                             
                            <button onClick={() => logout() & navigate("/")}>Logout</button>
                           
                            </>
                    ) : (
                        <ul className="botones">
                            <li>
                               <button> <Link to="/login">Login</Link></button>
                            </li>
                            <li>
                                <button className="boton">  <Link to="/register">Register</Link></button>
                            </li>
                        </ul>
                    )}
                </div>
            </nav> {!mascota? (<div className="title-image">
                <img src="https://cdn.pixabay.com/photo/2017/04/11/15/55/animals-2222007_1280.jpg" alt="photo" />
            </div>):("")}
           
        </header>
    );
};

export default Header;

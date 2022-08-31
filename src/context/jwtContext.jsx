
import { useState, createContext } from "react";
export const JwtContext = createContext();

// esta función intenta que el valor inicial de jwt sea si encuentra algo en el token y si no me devuelve null
export const JwtContextProvider = ({ children }) => {

    const [jwt, setJwt] = useState(() => {
        const savedJwt = localStorage.getItem("token");
        return savedJwt || null;
    });
    // esta función intenta que el valor inicial de jwt sea si encuentra algo en el token y si no me devuelve null
    // pero aqui parceamos para que se pueda leer
    const [mascota, setMascota] = useState(() => {
        const savedMascota = localStorage.getItem("mascota");
        const initialValue = JSON.parse(savedMascota);
        return initialValue || null

    })

    const [editingMascota, setEditingMascota] = useState({});


    // esta función se carga todos los estados y todo lo que haya en el almacenanmiento de la memoria del navegador y se 
    // lo pasamos a traves de contexto a todo lo que metamos dentro de JwtContextProvider
    const logout = () => {
        setMascota(null);
        setJwt(null);
        localStorage.removeItem("mascota");
        localStorage.removeItem("token"); 
    }

    return (
        <JwtContext.Provider value={{ jwt, setJwt, mascota, setMascota, logout, editingMascota, setEditingMascota }}>
            {children}
        </JwtContext.Provider>
    )
};

export default JwtContext
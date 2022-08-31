
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (

    <section className="home">
    
      <div className="info">
        <h2>Welcome animal lovers</h2>

        <p>
          Un animal de compañía o mascota es un animal doméstico que se conserva con el propósito de brindar
          compañía o para el disfrute del cuidador.
          Poseer un animal de compañía puede traer beneficios a la salud, ya que el cuidado diario hace olvidar a muchas
          personas otro tipo de preocupaciones, evita la depresión y nos hace sentir útiles.
        </p>

        <Link to="/login"> Do you have an account? </Link>
      </div>
    </section>


  )
}
export default Home
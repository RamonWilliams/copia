import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Mascotas from "./pages/Mascotas/Mascotas"
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import { JwtContextProvider } from "./context/jwtContext";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import useLocalStorage from 'use-local-storage'
import MascotaDetail from "./pages/MascotaDetail/MascotaDetail"

const App = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? '🌙' : '☀');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  return (
    <JwtContextProvider>
      <div className="App" data-theme={theme}>
      <button className="mode" onClick={switchTheme}> {theme === 'light' ? '🌙' : '🕶'} </button>

        <Router>

          <Header />
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mascotas" element={ <RequireAuth> <Mascotas /></RequireAuth>} />              
            <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />                      
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} /> 
            <Route path= "/mascota/:id" element={<MascotaDetail />} />            
           </Routes>


          <Footer />

        </Router>
    
      </div>
    </JwtContextProvider>


  )





};

export default App;
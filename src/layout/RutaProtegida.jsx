import { Outlet, Navigate } from "react-router-dom";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth";

const RutaProtegida = () => {
    const {auth, cargando} = useAuth()
    if(cargando) return "Cargando..."
  return (
    <>
    
    <Headers/>
        {auth?._id ? (
          <main className="container mx-auto mt-10">
        <Outlet/> 
        </main>
      ): <Navigate to="/" />}
    <Footer/>    
    </>
  )
}

export default RutaProtegida
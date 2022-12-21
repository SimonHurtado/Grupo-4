import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Usuarios from "./Componentes/Usuarios";
import AgregarUsuarios from "./Componentes/AgregarUsuarios";
import EditarUsuario from "./Componentes/EditarUsuario";
import Menu from "./Componentes/Menu";
import Vehiculos from "./Componentes/Vehiculos";
import Ingreso from "./Componentes/Ingreso";
import Publicidad from "./Componentes/Publicidad";
import AgregarVehiculo from "./Componentes/AgregarVehiculo";

class Rutas extends Component{
    render(){
        return(
            
            <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<Publicidad/>}/>
                <Route path="/usuarios" element={<Usuarios/>}/>
                <Route path="/agregarusuarios" element={<AgregarUsuarios/>}/>
                <Route path="/editarusuario/:id" element={<EditarUsuario/>}/>
                <Route path="/vehiculos" element={<Vehiculos/>}/>
                <Route path="/ingresar" element={<Ingreso/>}/>
                <Route path="/agregarvehiculo" element={<AgregarVehiculo/>}/>


            </Routes>
            </BrowserRouter>
        )
    }
}


export default Rutas;
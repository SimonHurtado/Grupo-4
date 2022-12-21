import React, { Component } from "react";
import { Link } from "react-router-dom";
import imagenes from "./imagenes";
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">
            <img src={imagenes.img0} alt="Bootstrap" width="30" height="24" />
          </a>
          <a className="navbar-brand" href="/">Inicio</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/vehiculos">Vehiculos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/agregarvehiculo">Agregar Vehiculo</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Herramientas
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/usuarios">Usuarios</a></li>
                  <li><a className="dropdown-item" href="/agregarusuarios">Agregar Usuarios</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Informacion</a></li>
                </ul>
              </li>
              <li className="nav-item">

              </li>
            </ul>


            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
              <a>        </a>
              <Link to={"/ingresar"} className="btn btn-success ">Ingresar</Link>

            </form>

          </div>
        </div>
      </nav>

    );
  }



}

export default Menu;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";




class Usuarios extends Component {

    state = {
        usuarios: []
    }
    componentWillMount() {
        this.getUsuarios();
    }

    getUsuarios = () => {
        axios.get("http://localhost:3000/api/listarUsuarios")
            .then(res => {
                console.log("Usuarios");
                console.log(res.data.doc);
                this.setState({
                    usuarios: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {
        console.log(this.state.usuarios);
        return (
            <React.Fragment>
                <h1>Usuarios</h1>
                <Link to="/agregarUsuarios" className="btn btn-dark">Agregar Usuario</Link>
                <table className="table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Nombre</td>
                            <td>Apellido</td>
                            <td>Correo</td>
                            <td>Contraseña</td>
                            <td>Imagen</td>
                            <td>Rol</td>
                            <td>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.usuarios.map((usuario) => {
                                return (
                                    <React.Fragment>
                                        <tr>
                                            <td>{usuario._id}</td>
                                            <td>{usuario.name}</td>
                                            <td>{usuario.surname}</td>
                                            <td>{usuario.email}</td>
                                            <td>{usuario.pass}</td>
                                            <td>{usuario.image}</td>
                                            <td>{usuario.role}</td>
                                            <td>
                                                <Link to={"/editarUsuario/"+ usuario._id} className="btn btn-success">Editar</Link>
                                                <button className="btn btn-danger ms-3">Eliminar</button>
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                )
                            })
                        }

                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Usuarios;
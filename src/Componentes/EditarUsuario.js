import React, { Component } from "react";



class EditarUsuario extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Editar usuario</h1>
                <form className= "container">
                <div className="mb-3">
                        <label for="Correo" className="form-label">Nombre</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="Correo" className="form-label">Apellido</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="Correo" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Rol</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                    <input type="submit" className="btn btn-primary"/>
                    </div>
                    
                </form>
            </React.Fragment>
        )
    }
}

export default EditarUsuario;
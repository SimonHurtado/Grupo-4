import React, { Component } from "react";
import { Link } from "react-router-dom";



class Ingreso extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Ingreso</h1>
                <form className="container">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="mb-3 form-check">
                    <Link to={"/crearcuenta"} >Crea tu cuenta</Link>


                    </div>
                </form>
            </React.Fragment>

        )
    }
}

export default Ingreso;
import axios from "axios";
import React, { Component } from "react";




class AgregarUsuarios extends Component {

    nombre = React.createRef();
    apellido = React.createRef();
    correo = React.createRef();
    contraseña = React.createRef();
    imagen = React.createRef();
    rol = React.createRef();

    state={
        usuario:{},
        status:null
    }

    changeState = () =>{
        this.setState({
            usuario:{
                name:this.nombre.current.value,
                surname:this.apellido.current.value,
                email:this.correo.current.value,
                pass:this.contraseña.current.value,
                image:this.imagen.current.value,
                role:this.rol.current.value

            }
        })
       console.log(this.state)


        
    }
    guardarUsuario = (e) =>{
        e.preventDefault();
        this.changeState();
        console.log(this.usuario)
        axios.post("http://localhost:3000/api/guardarUsuario",this.state.usuario)
        .then(res=>{
            this.setState({
                status:"success"
            })
        })
        .catch(function(error){
            console.log(error)
        })
    }
    render() {
        console.log(this.state);
        return (
            <React.Fragment>
                <React.Fragment>
                    <h1>Agregar usuario</h1>
                    <form className="container" onSubmit={this.guardarUsuario}>
                        <div className="mb-3">
                            <label  className="form-label" >Nombre</label>
                            <input type="text" required className="form-control" id="name" ref={this.nombre} onChange={this.changeState}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label" >Apellido</label>
                            <input type="text" required className="form-control" id="surname" ref={this.apellido} onChange={this.changeState}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label" >Correo</label>
                            <input type="email" required className="form-control"  aria-describedby="emailHelp" id="email" ref={this.correo} onChange={this.changeState}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"  >Password</label>
                            <input type="password" required className="form-control"  id="pass" ref={this.contraseña} onChange={this.changeState}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label" >Imagen</label>
                            <input type="text" required className="form-control"   id ="image" ref={this.imagen} onChange={this.changeState}/>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label" >Rol</label>
                            <input type="text" required className="form-control"   id ="role" ref={this.rol} onChange={this.changeState}/>
                        </div>
                        <div className="mb-3">
                            <input type="submit" className="btn btn-primary" />
                        </div>

                    </form>
                </React.Fragment>
            </React.Fragment>

        )

    }
}

export default AgregarUsuarios;
import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import imagenes from "./imagenes";




class Vehiculos extends Component {


    state = {
        vehiculos: []
    }
    componentWillMount() {
        this.getVehiculo();
    }

    getVehiculo = () => {
        axios.get("http://localhost:3000/api/listVehi")
            .then(res => {
                console.log("Vehiculos");
                console.log(res.data.doc);
                this.setState({
                    vehiculos: res.data.doc
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <React.Fragment>
                <tbody>
                    
                    {
                        this.state.vehiculos.map((vehiculos) => {
                            return (

                                <React.Fragment>
                                    <div className="cardV">
                                        <img src={vehiculos.Imagen} className="card-img-top" alt="..." />

                                        <div className="card-body">
                                            <h5 className="card-title">{vehiculos.Vehiculo}</h5>
                                            <p className="card-text">{vehiculos.Comentarios}</p>
                                            <a href="#" className="btn btn-primary">Más Informacion</a>
                                        </div>



                                    </div>

                                </React.Fragment>
                            )
                        })
                    }


                </tbody>

            </React.Fragment>
        )
    }



}

export default Vehiculos;
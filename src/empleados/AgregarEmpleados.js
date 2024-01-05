import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AgregarEmpleados() {

    let navegacion = useNavigate();

    const [empleado, setEmpleado] = useState({
        nombre:"",
        departamento:"",
        sueldo:""
    });

    const {nombre, departamento, sueldo} = empleado;

    const cambio = (e) => {
        //spread Operator... (Expandir los atributos)
        setEmpleado({...empleado, [e.target.name] : e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault();
        const urlBase = "http://localhost:8080/rh-app/agregar";
        await axios.post(urlBase, empleado);
        //Redirigir a la pagina de inicio
        navegacion('/');
    }
  return (
    <div className='container w-25'>
        <div className='text-center' style={{margin: "30px"}}>
            <h3>Agregar Empleado</h3>
        </div>
        <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" value={nombre}
                onChange={(e) => cambio(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="departamento" className="form-label">Departamento</label>
                <input type="text" className="form-control" id="departamento" value={departamento}
                onChange={(e) => cambio(e)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="sueldo" className="form-label">Sueldo</label>
                <input type="text" className="form-control" id="sueldo" value={sueldo}
                onChange={(e) => cambio(e)}/>
            </div>
            <div className='text-center'>
                <button type="submit" className="btn btn-warning btn-sm me-3">Guardar</button>
                <a href='/' className="btn btn-danger btn-sm me-3">Regresar</a>
            </div>
        </form>
    </div>
  )
}

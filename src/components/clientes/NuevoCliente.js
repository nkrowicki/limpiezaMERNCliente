import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Swal from "sweetalert2";

import clienteContext from "../../context/Clientes/clienteContext";

const NuevoCliente = () => {
  const history = useHistory();

  const { agregarClienteFn } = useContext(clienteContext);

  // State Inicial
  const [cliente, setCliente] = useState({
    nombre: "",
    cuit: "",
    password: "",
  });

  const { nombre, cuit, password } = cliente;

  const onChange = (e) => {
    setCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();

    //Validar que no haya campos vacios
    if (nombre.trim() === "" || cuit.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Todos los campos son obligatorios",
      });
      return;
    }

    //Pasarlo al action
    agregarClienteFn({ nombre, cuit });


    // Alerta de que fue agregado con exito
    Swal.fire(
        'Operación exitosa!',
        'El cliente fue agregado correctamente',
        'success'
      )

    // Ir al listado de clientes
    history.push({
      pathname: "/clientes",
    });
  };

  return (
    <>
      <div className="text-gray-900 flex flex-col justify-center items-center h-full">
        <div className="p-4 flex justify-center w-full">
          <h1 className="text-3xl">Crear nuevo cliente</h1>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
            onSubmit={onSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-grey-darker text-md  mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="nombre"
                type="text"
                name="nombre"
                placeholder="Nombre del cliente"
                onChange={onChange}
                value={nombre}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-md  mb-2"
                htmlFor="cuit"
              >
                CUIT (Usuario)
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="cuit"
                type="text"
                name="cuit"
                placeholder="CUIT (Usuario)"
                onChange={onChange}
                value={cuit}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-md  mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                onChange={onChange}
                value={password}
              />
            </div>
            <div className="flex items-center justify-around">
              <Link to={"/clientes"}>
                <input
                  type="button"
                  className="bg-red-200 hover:bg-blue-dark bg-red-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
                  value="Cancelar"
                />
              </Link>
              <input
                type="submit"
                className="hover:bg-blue-dark bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
                value="Crear cliente"
              />
              {/* <a className="inline-block align-baseline font-bold text-md text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
                        </a> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoCliente;

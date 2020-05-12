import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import clienteContext from "../../context/Clientes/clienteContext";

import DireccionCliente from "./DireccionCliente";
import DatosContactoCliente from "./DatosContactoCliente";
import Archivos from "./Archivos";

const EditarCliente = () => {
  const history = useHistory();

  const clientesContext = useContext(clienteContext);
  // Datos principales (cuit, nombre, id)
  const {
    cliente,
    obtenerDireccionesFn,
    obtenerDatosContactoFn,
  } = clientesContext;

  // Hay cliente seleccionado?
  const hayClienteSeleccionado = !cliente || cliente === null ? false : true;

  useEffect(() => {
    if (hayClienteSeleccionado) {
      obtenerDireccionesFn();
      obtenerDatosContactoFn();
    }
  }, []);

  //Si no hay id
  if (!hayClienteSeleccionado) {
    history.push({
      pathname: "/clientes",
    });
    return null;
  }

  return (
    <>
      <div className="w-full overflow-hidden p-5 text-gray-900">
        <div className="p-4 flex justify-center w-full text-gray-900">
          <h1 className="text-3xl">Editar Cliente</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around border-b border-gray-200 pb-4 mb-4">
          <div className="w-full flex items-center justify-center mx-5">
            <p className="text-xl">
              Nombre del cliente:{" "}
              <span className="font-bold">{cliente.nombre}</span>
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-center mx-5">
            <p className="text-xl">
              Cuit: <span className="font-bold">{cliente.cuit}</span>
            </p>
          </div>
        </div>

        <DireccionCliente />
        <DatosContactoCliente />

        <Archivos />
        
      </div>
    </>
  );
};

export default EditarCliente;

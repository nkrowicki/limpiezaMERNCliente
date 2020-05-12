import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import clienteContext from "../../context/Clientes/clienteContext";

import DireccionCliente from "./DireccionCliente";
import DatosContactoCliente from "./DatosContactoCliente";
import Archivos from "./Archivos";

const EditarCliente = () => {
  const history = useHistory();

  const clientesContext = useContext(clienteContext);
  const { cliente } = clientesContext;

  //Si no hay id
  if (!cliente || cliente === null) {
    history.push({
      pathname: "/clientes",
    });
    return null;
  }

  // Fetch direccion (array) -> Acá o en el componente que sigue?
  // Fetch datosContacto (array)

  const datosCliente = {
    direccion: [
      {
        id: 1,
        calle: "Rivadavia",
        altura: 10,
        codPostal: 100,
        localidad: "Ramos Mejía",
      },
      {
        id: 2,
        calle: "Alsina",
        altura: 20,
        codPostal: 200,
        localidad: "Caseros",
      },
    ],
    datosContacto: [
      {
        id: 1,
        nombre: "Nahuel",
        email: "nkrowicki@nubedi.com",
        tel: "4545-4545",
        area: "Sistemas",
      },
      {
        id: 2,
        nombre: "Jorge",
        email: "jorge@nubedi.com",
        tel: "123-123",
        area: "Finanzas",
      },
    ],
  };

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

        <DireccionCliente direcciones={datosCliente.direccion} />
        <DatosContactoCliente datos={datosCliente.datosContacto} />

        <Archivos />
      </div>
    </>
  );
};

export default EditarCliente;

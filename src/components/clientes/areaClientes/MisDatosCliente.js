import React, { useState } from "react";
import Direccion from "./Direccion";
import DatosContacto from "./DatosContacto";
import Archivos from "./Archivos";

const MisDatosCliente = () => {
  // Obtener id cliente de props

  const datosCliente = {
    id: 1,
    nombre: "Nubedi",
    cuit: 1010101010,
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
          <h1 className="text-3xl">Mis Datos</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-around border-b border-gray-200 pb-4 mb-4">
          <div className="w-full flex items-center justify-center mx-5">
            <p className="text-xl">
              Nombre de mi empresa:{" "}
              <span className="font-bold">{datosCliente.nombre}</span>
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-center mx-5">
            <p className="text-xl">
              Cuit: <span className="font-bold">{datosCliente.cuit}</span>
            </p>
          </div>
        </div>

        <Direccion direcciones={datosCliente.direccion} />
        <DatosContacto datos={datosCliente.datosContacto} />

        <Archivos />

      </div>
    </>
  );
};

export default MisDatosCliente;

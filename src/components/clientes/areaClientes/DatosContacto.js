import React from "react";


const DatosContacto = ({ datos }) => {
   return (
    <>
      {/* Direccion */}
      <div className="my-10">
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Teléfono</th>
              <th className="px-4 py-2 hidden md:table-cell">
                Área o sector
              </th>
            </tr>
          </thead>
          <tbody>
            {datos.map((datos) => {
              return (
                <tr className="lg:hover:bg-gray-100" key={datos.id}>
                  <td className="border px-4 py-2">{datos.nombre}</td>
                  <td className="border px-4 py-2">{datos.email}</td>
                  <td className="border px-4 py-2">{datos.tel}</td>
                  <td className="border px-4 py-2 hidden md:table-cell">
                    {datos.area}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      <div className="mt-5 border-b-2" />
    </>
  );
};

export default DatosContacto;

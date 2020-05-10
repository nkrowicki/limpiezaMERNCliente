import React from "react";

const Direccion = ({ direcciones }) => {
  
  return (
    <>
      {/* Direccion */}
      <div className="my-10">
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Calle</th>
              <th className="px-4 py-2">Altura</th>
              <th className="px-4 py-2">Código Postal</th>
              <th className="px-4 py-2 hidden md:table-cell">
                Localidad o barrio
              </th>
            </tr>
          </thead>
          <tbody>
            {direcciones.map((direccion) => {
              return (
                <tr className="lg:hover:bg-gray-100" key={direccion.id}>
                  <td className="border px-4 py-2">{direccion.calle}</td>
                  <td className="border px-4 py-2">{direccion.altura}</td>
                  <td className="border px-4 py-2">{direccion.codPostal}</td>
                  <td className="border px-4 py-2 hidden md:table-cell">
                    {direccion.localidad}
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

export default Direccion;

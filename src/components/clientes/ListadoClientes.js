import React from "react";
import { useHistory } from "react-router-dom";

const ListadoClientes = () => {
  const history = useHistory();

  const clientes = [
    {
      id: 1,
      nombreEmpresa: "Nubedi",
      cuit: 307080,
    },
    {
      id: 2,
      nombreEmpresa: "Empresa Dos",
      cuit: 206070,
    },
  ];

  const editarCliente = (id) => {
    console.log("editar cliente: ", id);

    // Agregar al state el id de cliente a editar

    // Redirect a editar-cliente
    history.push({
      pathname: "/editar-cliente",
      state: { id},
    });
  };

  return (
    <>
      {/* Direccion */}
      <div className="my-10 w-5/6">
        <table className="table-auto w-full text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">CUIT</th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((datos) => {
              return (
                <tr className="lg:hover:bg-gray-100" key={datos.id}>
                  <td className="border px-4 py-2">{datos.nombreEmpresa}</td>
                  <td className="border px-4 py-2"> {datos.cuit} </td>

                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => editarCliente(datos.id)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="mt-2 md:mt-0 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                    >
                      Eliminar
                    </button>
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

export default ListadoClientes;

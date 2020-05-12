import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import clienteContext from "../../context/Clientes/clienteContext";


const ListadoClientes = () => {
  const history = useHistory();

  const clientesContext = useContext(clienteContext);

  const { clientes, obtenerClientesFn, clienteActualFn, eliminarClienteFn } = clientesContext;

  const [data, setData] = useState([]);

  useEffect(() => {
    obtenerClientesFn();
  }, []);

  useEffect(() => {
    if (clientes !== null || clientes !== []) setData(clientes);
  }, [clientes]);

  if (data.length === 0)
    return (
      <>
        <div className="p-4 flex justify-center w-full text-gray-900">
          <h1 className="text-3xl">Aún no hay clientes!</h1>
        </div>
      </>
    );

  const editarCliente = (id) => {
    // Enviar id del cliente a editar
    clienteActualFn(id);
    // Redirect a editar-cliente
    history.push({
      pathname: "/editar-cliente",
      state: { id: "prueba" },
    });
  };

  const deleteCliente = (id) => {
    
    Swal.fire({
      title: "¿Está seguro?",
      text: "Esta acción no se puede deshacer. Si acepta eliminará todos los datos asociados a este cliente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.value) {
        
        // Eliminar de la bbdd pasando id
        eliminarClienteFn(id);
      
        // Informar que se eliminó con éxito
        Swal.fire("Eliminado!", "El cliente ha sido eliminado con éxito.", "success");
      }
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
            {data.map((datos) => {
              return (
                <tr className="lg:hover:bg-gray-100" key={datos.id}>
                  <td className="border px-4 py-2">{datos.nombre}</td>
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
                      onClick={() => deleteCliente(datos.id)}
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

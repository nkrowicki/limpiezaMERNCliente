import React, { useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
import clienteContext from '../../context/Clientes/clienteContext';
import FormNuevaDireccion from "./FormNuevaDireccion";

const DireccionCliente = () => {

  
  const clientesContext = useContext(clienteContext);
  const { direcciones, agregarDireccionFn, eliminarDireccionFn } = clientesContext;
  
  const initialState = {
    id: "",
    calle: "",
    altura: "",
    codPostal: "",
    localidad: "",
  };
  
  const [data, setData] = useState([]);
  const [stateNewData, setStateNewData] = useState(initialState);
  const [showForm, setShowForm] = useState(false);
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    if(direcciones !== null || direcciones !== [])
    setData(direcciones)
  }, [direcciones])


  const limpiarForm = () => {
    setStateNewData(initialState);
    setEditar(false);
  };

  const editarDireccion = (direccion) => {
    setEditar(true);
    setShowForm(true);
    setStateNewData(direccion);
  };

  const eliminarDireccion = (direccion) => {
    Swal.fire({
      title: "¿Está seguro?",
      text: "Esta acción no se puede deshacer",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
    }).then((result) => {
      if (result.value) {
        
        // Eliminar de la bbdd pasando id
        eliminarDireccionFn(direccion.id)
       
        // Informar que se eliminó con éxito
        Swal.fire("Eliminado!", "Se ha eliminado con éxito.", "success");
      }
    });
  };

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
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((direccion) => {
              return (
                <tr className="lg:hover:bg-gray-100" key={direccion.id}>
                  <td className="border px-4 py-2">{direccion.calle}</td>
                  <td className="border px-4 py-2">{direccion.altura}</td>
                  <td className="border px-4 py-2">{direccion.codPostal}</td>
                  <td className="border px-4 py-2 hidden md:table-cell">
                    {direccion.localidad}
                  </td>

                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => editarDireccion(direccion)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="mt-2 md:mt-0 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => eliminarDireccion(direccion)}
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
      <FormNuevaDireccion
        data={data}
        setData={setData}
        showForm={showForm}
        setShowForm={setShowForm}
        limpiarForm={limpiarForm}
        stateNewData={stateNewData}
        setStateNewData={setStateNewData}
        editar={editar}
        agregarDireccionFn={agregarDireccionFn}
      />

      <div className="mt-5 border-b-2" />
    </>
  );
};

export default DireccionCliente;

import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import clienteContext from '../../context/Clientes/clienteContext';
import FormNuevosDatos from "./FormNuevosDatos";


const DatosContactoCliente = () => {


  const clientesContext = useContext(clienteContext);
  const { datosContacto } = clientesContext;

  const initialState = {
    id: "",
    calle: "",
    altura: "",
    codPostal: "",
    localidad: "",
  };

  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [stateNewData, setStateNewData] = useState(initialState);
  const [editar, setEditar] = useState(false);


  useEffect(() => {
    if(datosContacto !== null || datosContacto !== [])
    setData(datosContacto)
  }, [datosContacto])



  const limpiarForm = () => {
    setStateNewData(initialState);
    setEditar(false);
  };

  const editarCliente = (datos) => {
    setEditar(true);
    setShowForm(true);
    setStateNewData(datos);
  };

  const eliminarDatos = (datos) => {
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


        // Si se eliminó bien.. eliminar del array para actualizar la vista
        const nuevaData = data.filter((item) => item.id !== datos.id);
        setData([
          ...nuevaData,
        ]);
       
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
              <th className="px-4 py-2">Nombre</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Teléfono</th>
              <th className="px-4 py-2 hidden md:table-cell">
                Área o sector
              </th>
              <th className="px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((datos) => {
              return (
                <tr className="lg:hover:bg-gray-100" key={datos.id}>
                  <td className="border px-4 py-2">{datos.nombre}</td>
                  <td className="border px-4 py-2">{datos.email}</td>
                  <td className="border px-4 py-2">{datos.tel}</td>
                  <td className="border px-4 py-2 hidden md:table-cell">
                    {datos.area}
                  </td>

                  <td className="border px-4 py-2">
                    <button
                      type="button"
                      className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => editarCliente(datos)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="mt-2 md:mt-0 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      onClick={()=> eliminarDatos(datos)}
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
      <FormNuevosDatos
        data={data}
        setData={setData}
        showForm={showForm}
        setShowForm={setShowForm}
        limpiarForm={limpiarForm}
        stateNewData={stateNewData}
        setStateNewData={setStateNewData}
        editar={editar}
      />

      <div className="mt-5 border-b-2" />
    </>
  );
};

export default DatosContactoCliente;

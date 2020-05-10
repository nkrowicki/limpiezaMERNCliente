import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const FormNuevosDatos = ({
  data,
  setData,
  showForm,
  setShowForm,
  stateNewData,
  limpiarForm,
  editar,
}) => {


  const [nuevosDatos, setnuevosDatos] = useState(stateNewData);

  const { id, nombre, email, tel, area } = nuevosDatos;

  useEffect(() => {
    setnuevosDatos(stateNewData);
  }, [stateNewData]);

  const onChange = (e) => {
    setnuevosDatos({
      ...nuevosDatos,
      [e.target.name]: e.target.value,
    });
  };

  const agregarDatos = async () => {
    //Verificar datos
    if (
      nombre.trim() === "" ||
      email.trim() === "" ||
      tel.trim() === "" ||
      area.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: `Todos los campos son obligatorios.`,
      });
      return false;
    }

    //Agregar a la bbdd

    //Id retornado por la bbdd
    const idNuevo = isNaN(id) && 11;

    //Agregar a la tabla (con el id para 'key' de map) o lo de abajo (fetch nuevamente)
    setData([...data, { ...nuevosDatos, id: idNuevo }]);

    //Si se agrego correctamente a la base de datos
    Swal.fire("Datos agregados!", "", "success");
    limpiarForm();
    setShowForm(!showForm);
  };

  return (
    <>
      {/* Boton para agregar contacto */}
      {!showForm && (
        <div className="flex justify-center md:mt-2">
          <button
            type="button"
            className="w-4/6 mt-2 h-10 md:mt-0 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowForm(!showForm)}
          >
            Agregar contacto
          </button>
        </div>
      )}

      {/* Formulario nuevos datos */}
      {showForm && (
        <div className={`overflow-hidden my-3`}>
          <div className="w-64 font-bold text-center w-full text-xl m-3 text-gray-800">
            {editar ? "Editar Datos" : "Agregar nuevos datos"}
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-full mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Nombre"
                  name="nombre"
                  onChange={onChange}
                  value={nombre}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
            <div className="md:w-full mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={onChange}
                  value={email}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
            <div className="md:w-full mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Teléfono"
                  name="tel"
                  onChange={onChange}
                  value={tel}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
          </div>
          <div className="m-2">
            <div className="w-full">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Área o Sector"
                  name="area"
                  onChange={onChange}
                  value={area}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <button
              type="button"
              className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={agregarDatos}
            >
              {editar ? "Editar" : "Agregar"}
            </button>
            <button
              type="button"
              className="mt-2 md:mt-0 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={() => {
                setShowForm(!showForm);
                limpiarForm();
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {/* End nueva datos formulario */}
    </>
  );
};

export default FormNuevosDatos;

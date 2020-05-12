import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";


const FormNuevaDireccion = ({
  data,
  setData,
  showForm,
  setShowForm,
  stateNewData,
  limpiarForm,
  editar,
  agregarDireccionFn
}) => {
    
  function isNumeric(value) {
    return /^-{0,1}\d+$/.test(value);
  }

  const [nuevaDireccion, setNuevaDireccion] = useState(stateNewData);

  const { calle, altura, codPostal, localidad } = nuevaDireccion;

  useEffect(() => {
    setNuevaDireccion(stateNewData);
  }, [stateNewData]);

  const onChange = (e) => {
    setNuevaDireccion({
      ...nuevaDireccion,
      [e.target.name]: e.target.value,
    });
  };

  const agregarDireccion = async () => {
    //Verificar datos
    if (
      calle.trim() === "" ||
      //   altura.trim() === "" ||
      //   codPostal.trim() === "" ||
      !isNumeric(altura) ||
      !isNumeric(codPostal) ||
      localidad.trim() === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: `Todos los campos son obligatorios.`,
      });
      return false;
    }

    //Agregar a la bbdd
    agregarDireccionFn(nuevaDireccion, editar);

    //Agregar a la tabla (con el id para 'key' de map) o lo de abajo (fetch nuevamente)
    // setData([...data, { ...nuevaDireccion }]);

    //Si se agrego correctamente a la base de datos
    Swal.fire("Dirección agregada!", "", "success");
    limpiarForm();
    setShowForm(!showForm);
  };

  return (
    <>
      {/* Boton para agregar direccion */}
      {!showForm && (
        <div className="flex justify-center md:mt-2">
          <button
            type="button"
            className="w-4/6 mt-2 h-10 md:mt-0 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            onClick={() => setShowForm(!showForm)}
          >
            Agregar dirección
          </button>
        </div>
      )}

      {/* Nueva dirección formulario */}
      {showForm && (
        <div className={`overflow-hidden my-3`}>
          <div className="w-64 font-bold text-center w-full text-xl m-3 text-gray-800">
            {editar ? "Editar Dirección" : "Agregar nueva dirección"}
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="md:w-full mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="text"
                  placeholder="Calle"
                  name="calle"
                  onChange={onChange}
                  value={calle}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
            <div className="md:w-full mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="number"
                  placeholder="Altura"
                  name="altura"
                  onChange={onChange}
                  value={altura}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
            <div className="md:w-full mx-2">
              <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                <input
                  type="number"
                  placeholder="Código postal"
                  name="codPostal"
                  onChange={onChange}
                  value={codPostal}
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
                  placeholder="Barrio o Localidad"
                  name="localidad"
                  onChange={onChange}
                  value={localidad}
                  className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                />{" "}
              </div>
            </div>
          </div>
          <div className="text-center my-5">
            <button
              type="button"
              className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
              onClick={agregarDireccion}
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

      {/* End nueva direccion formulario */}
    </>
  );
};

export default FormNuevaDireccion;

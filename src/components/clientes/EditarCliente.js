import React, { useState } from "react";

const EditarCliente = () => {
  // Obtener id cliente de props

  const datosCliente = {
    id: 1,
    nombreEmpresa: "Nubedi",
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

  // State Inicial
  const [datosContacto, setdatosContacto] = useState({
    nombre: "",
    email: "",
    telefono: "",
    area: "",
  });

  const { nombre, email, telefono, area } = datosContacto;

  const onChange = (e) => {
    setdatosContacto({
      ...datosContacto,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="w-full overflow-hidden p-5 text-gray-900">
        <div className="p-4 flex justify-center w-full text-gray-900">
          <h1 className="text-3xl">Editar Cliente</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-around border-b border-gray-200 pb-4 mb-4">
          {/* <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Nombre</div> */}
          <div className="w-full flex items-center justify-center mx-5">
            <p className="text-xl">
              Nombre:{" "}
              <span className="font-bold">{datosCliente.nombreEmpresa}</span>
            </p>
          </div>
          <div className="w-full flex flex-row items-center justify-center mx-5">
            <p className="text-xl">
              Cuit: <span className="font-bold">{datosCliente.cuit}</span>
            </p>
          </div>
        </div>


        {/* <div className="px-3 py-4 w-full">
              <table className="w-full table-auto text-md bg-white shadow-md rounded mb-4">
                <tbody>
                  <tr className="border-b text-center">
                    <th className="p-3 px-5">Calle</th> */}


      <div className="container">
        <table className="w-full flex md:flex-col flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white ">
            <tr className="bg-teal-400 flex flex-col flex-no wrap sm:table-row  rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left" width="110px">Actions</th>
            </tr>
            
          </thead>
          <tbody className="flex-1 sm:flex-none">
            <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
              <td className="border-grey-light border hover:bg-gray-100 p-3">John Covv</td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 truncate">contato@johncovv.com</td>
              <td className="border-grey-light border hover:bg-gray-100 p-3 text-red-400 hover:text-red-600 hover:font-medium cursor-pointer">Delete</td>
            </tr>
            
          </tbody>
        </table>
      </div>





        {/* Datos de contacto */}
        <div className="flex flex-col justify-center pb-4 mb-4">
          {/* Table with data */}
          <div className="text-gray-900 w-full">
            <div className="p-4 flex justify-center w-full">
              <div className="w-64 font-bold text-center text-2xl h-6 mx-2 m-3 text-gray-800">
                Dirección
                <div className="text-xs font-normal leading-none text-gray-500">
                  Dirección del cliente
                </div>
              </div>
            </div>
            <div className="px-3 py-4 w-full">
              <table className="w-full table-auto text-md bg-white shadow-md rounded mb-4">
                <tbody>
                  <tr className="border-b text-center">
                    <th className="p-3 px-5">Calle</th>
                    <th className="p-3 px-5">Altura</th>
                    <th className="p-3 px-5">Código postal</th>
                    <th className="hidden sm:table-cell p-3 px-5">Localidad/Barrio</th>
                    <th className="p-3 px-5">Altura</th>
                    {/* <th className="text-left p-3 px-5">Código Postal</th>
                        <th className="text-left p-3 px-5">Localidad</th> */}
                    <th />
                  </tr>

                  <tr className="border-b hover:bg-orange-100 bg-gray-100">

                    <td className="p-3 px-5 text-center w-1/5 max-w-xs overflow-hidden bg-red-200">
                      <p className="table-cell">aaaaaaaaaaaaaaaa{datosCliente.direccion[0].calle}</p>
                    </td>
                    <td className="p-3 px-5 text-center w-1/5">
                      <p className="">{datosCliente.direccion[0].altura}</p>
                    </td>
                    <td className="p-3 px-5 text-center w-1/5">
                      <p className="">{datosCliente.direccion[0].codPostal}</p>
                    </td>
                    <td className="hidden sm:table-cell p-3 px-5 text-center w-1/5">
                      <p className="">{datosCliente.direccion[0].localidad}</p>
                    </td>

                    {/* Start Buttons */}
                    <td className="p-3 px-5 flex justify-center">
                      <button
                        type="button"
                        className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                      >
                        Eliminar
                      </button>
                    </td>
                    {/* End Buttons */}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className={`border-2 overflow-hidden`}>
            <div className="w-64 font-bold text-center w-full text-xl m-3 text-gray-800">
              Agregar nueva dirección
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-full mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Calle"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
              <div className="md:w-full mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Altura"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
              <div className="md:w-full mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Código postal"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
            </div>
            <div className="m-2">
              <div className="w-full">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Barrio o Localidad"
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          {/* End form */}
          {/* </div> */}
        </div>
        <div className="flex flex-col md:flex-row pb-4 mb-4">
          <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">
            Datos de contacto
            <div>
              <button
                type="button"
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-5 rounded focus:outline-none focus:shadow-outline"
              >
                +
              </button>
            </div>
          </div>
          <div className="border-b border-gray-200">
            <div className="flex flex-col md:flex-row">
              <div className="w-full  mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Nombre del contacto"
                    name="nombre"
                    value={nombre}
                    onChange={onChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
              <div className="w-full  mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
              <div className="w-full  mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Teléfono"
                    name="telefono"
                    value={telefono}
                    onChange={onChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
              <div className="w-full  mx-2">
                <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                  <input
                    placeholder="Área o Sector"
                    name="area"
                    value={area}
                    onChange={onChange}
                    className="p-1 px-2 appearance-none outline-none w-full text-gray-800 "
                  />{" "}
                </div>
              </div>
              <div className="w-full mx-2 flex items-center justify-center">
                <button
                  type="button"
                  className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="w-64 mx-2 font-bold h-6 mt-3 text-gray-800" />
          <div className=" flex flex-col md:flex-row">
            <button
              className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-red-700 hover:text-teal-100 
        bg-red-300 
        text-gray-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >
              Cancelar
            </button>
            <button
              className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition"
            >
              Actualizar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditarCliente;

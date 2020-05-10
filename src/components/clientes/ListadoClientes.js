import React from "react";

const ListadoClientes = () => {
  const clientes = [
    {
      id: 1,
      nombreEmpresa: "Nubedi",
      cuit: 307080,
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
    },
    {
      id: 1,
      nombreEmpresa: "Empresa Dos",
      cuit: 206070,
      direccion: [
        {
          id: 1,
          calle: "Esa",
          altura: 10,
          codPostal: 100,
          localidad: "Sin Mejía",
        },
        {
          id: 2,
          calle: "Caseros",
          altura: 20,
          codPostal: 200,
          localidad: "Ze ",
        },
      ],
      datosContacto: [
        {
          id: 1,
          nombre: "Pepe",
          email: "pepe@asd.com",
          tel: "4545-4545",
          area: "Sistemas",
        },
        {
          id: 2,
          nombre: "pedro",
          email: "pedro@asd.com",
          tel: "123-123",
          area: "Finanzas",
        },
      ],
    },
  ];

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
                        // onClick={() => editarCliente(datos)}
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

import React from 'react';

const ListadoClientes = () => {
    return (
        <>

            <div className="text-gray-900">
                <div className="p-4 flex justify-center w-full">
                    <h1 className="text-3xl">
                        Listado de clientes
                    </h1>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4">
                        <tbody>
                            <tr className="border-b">
                                <th className="text-left p-3 px-5">Nombre</th>
                                <th className="text-left p-3 px-5">CUIT</th>
                                {/* <th className="text-left p-3 px-5">Role</th> */}
                                <th />
                            </tr>

                            <tr className="border-b hover:bg-orange-100 bg-gray-100">
                                <td className="p-3 px-5"><input type="text" defaultValue="user.name" className="bg-transparent" /></td>
                                <td className="p-3 px-5"><input type="text" defaultValue="user.email" className="bg-transparent" /></td>
                                {/* <td className="p-3 px-5">
                  <select value="user.role" className="bg-transparent">
                    <option value="user">user</option>
                    <option value="admin">admin</option>
                  </select>
                </td> */}
                                <td className="p-3 px-5 flex justify-end"><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Editar</button><button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default ListadoClientes;
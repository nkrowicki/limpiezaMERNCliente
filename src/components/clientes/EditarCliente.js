import React from 'react';

const EditarCliente = () => {

    // Obtener id cliente de props


    return (
        <>
            <div className="text-gray-900">
                <div className="p-4 flex justify-center w-full text-gray-900">
                    <h1 className="text-3xl">
                        Editar Cliente
                    </h1>
                </div>
                <div className="p-5">
                    <div className="mt-2">
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-4 mb-4">
                            <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Nombre</div>
                            <div className=" flex flex-col md:flex-row">
                                <div className="w-full  mx-2">
                                    <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input placeholder="Nombre del cliente" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                </div>
                                <div className="w-full  mx-2">
                                    <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                        <input placeholder="CUIT" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row pb-4 mb-4">
                            <div className="w-64 font-bold h-6 mx-2 m-3 text-gray-800">Dirección
            <div className="text-xs font-normal leading-none text-gray-500">Dirección del cliente</div>
                            </div>
                            <div className="">
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Calle" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Altura" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Código postal" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                </div>
                                <div className="m-2">
                                    <div className="w-full ">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Barrio o Localidad" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row pb-4 mb-4">
                            <div className="w-64 font-bold h-6 mx-2 mt-3 text-gray-800">Datos de contacto
                            <div><button type="button" className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-5 rounded focus:outline-none focus:shadow-outline">+</button></div>
                        </div>
                            <div className="border-b border-gray-200">
                                <div className="flex flex-col md:flex-row">
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Nombre del contacto" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Email" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Teléfono" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                    <div className="w-full  mx-2">
                                        <div className="my-2 p-1 bg-white flex border border-gray-200 rounded">
                                            <input placeholder="Área o Sector" className="p-1 px-2 appearance-none outline-none w-full text-gray-800 " /> </div>
                                    </div>
                                    <div className="w-full mx-2 flex items-center justify-center">
                                        <button type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Eliminar</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row">
                            <div className="w-64 mx-2 font-bold h-6 mt-3 text-gray-800" />
                            <div className=" flex flex-col md:flex-row">

                                <button className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-red-700 hover:text-teal-100 
        bg-red-300 
        text-gray-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Cancelar</button>
                                <button className="text-sm  mx-2 w-32  focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
        hover:bg-teal-700 hover:text-teal-100 
        bg-teal-100 
        text-teal-700 
        border duration-200 ease-in-out 
        border-teal-600 transition">Actualizar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default EditarCliente;
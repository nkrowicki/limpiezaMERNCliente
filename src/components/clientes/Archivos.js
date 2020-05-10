import React from "react";
import DropZone from './DropZone';

const Archivos = () => {
  return (
    <>
      <div className="p-4 flex justify-center w-full text-gray-900">
        <h1 className="text-3xl">Documentos</h1>
      </div>

       {/* Boton para agregar documentos */}
       <DropZone />
       
        {/* <div className="flex justify-center md:mt-2">
          <button
            type="button"
            className="w-4/6 mt-2 h-10 md:mt-0 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Agregar Documentos
          </button>
        </div> */}
      
    </>
  );
};

export default Archivos;

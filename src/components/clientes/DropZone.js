import React from "react";
import { useDropzone } from "react-dropzone";

const DropZone = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section className="">
      <div {...getRootProps({ className: "dropzone" })}
      className="h-20 bg-gray-100 border-dotted border-4 flex justify-center items-center cursor-pointer"
      >
        <input {...getInputProps()} />
        <p className="text-gray-500">Arrastra y suelta archivos aquí o haz click para seleccionar uno</p>
      </div>
      <div className="text-center mt-5 text-xl">
        <h4>Archivos: </h4>
        <ul>{files}</ul>
      </div>
    </section>
  );
};

export default DropZone;

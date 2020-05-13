import React, { useState, useContext } from "react";
import clienteContext from "../../context/Clientes/clienteContext";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Login = () => {
  const clientesContext = useContext(clienteContext);
  const { usuario, iniciarSesionFn } = clientesContext;
  const history = useHistory();

  // State Inicial
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  //Cuando quiere iniciar sesion
  const onSubmit = (e) => {
    e.preventDefault();
    //Validar que no haya campos vacios
    if (username.trim() === "" || password.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Ups...",
        text: "Parece que los datos introducidos no son correctos.",
      });
      return null;
    }

    //Pasarlo al action
    iniciarSesionFn(user);

    Swal.fire("Bienvenido!", "La sesión ha sido iniciada", "success");
  };

  if (usuario) {
      usuario.rol === 'admin' ?
    history.push({
      pathname: "/clientes",
    })
    :
    history.push({
        pathname: "/mis-datos"
    })
    return null;
  }

  return (
    <>
      <div className="text-gray-900 flex flex-col justify-center items-center h-auto">
        <div className="p-4 flex justify-center w-full">
          <h1 className="text-3xl">Iniciar sesión</h1>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
            onSubmit={onSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-grey-darker text-md  mb-2"
                htmlFor="username"
              >
                Usuario
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="username"
                type="text"
                name="username"
                placeholder="Usuario"
                onChange={onChange}
                value={username}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-grey-darker text-md  mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                id="password"
                type="password"
                name="password"
                placeholder="******************"
                onChange={onChange}
                value={password}
              />
              <p className="text-red text-sm italic">
                Introduzca una constraseña
              </p>
            </div>
            <div className="flex items-center justify-around">
              <input
                type="submit"
                className="bg-blue hover:bg-blue-dark bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
                value="Iniciar sesión"
              />

              {/* <a className="inline-block align-baseline font-bold text-md text-blue hover:text-blue-darker" href="#">
                            Forgot Password?
          </a> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import clienteContext from "../../context/Clientes/clienteContext";

const Navbar = () => {
  const clientesContext = useContext(clienteContext);
  const { usuario, cerrarSesionFn} = clientesContext;

  const [user, setUser] = useState(usuario);

  useEffect(() => {
    setUser(usuario);
  }, [usuario]);

  if(user === null || user === undefined) return false;
  return (
    <>
      <div>
        {/*Nav*/}
        <nav className="bg-gray-900 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto w-full z-50 top-0">
          <div className="flex flex-wrap justify-end items-center">
            <div className="flex w-full pt-2 justify-between">
              <div className="ml-3 md:mr-3">
                <p className="inline-block py-2 px-4 text-white no-underline">
                  {" "}
                  Hola {user && user.nombre}!
                </p>
              </div>
              <ul className="list-reset flex justify-end md:flex-none items-center text-gray-600">
                {user.rol === "admin" ? (
                  <>
                    <li className="md:mr-3">
                      <NavLink
                        to={"/clientes"}
                        exact
                        activeClassName="text-white"
                        className="inline-block py-2 px-4 no-underline"
                      >
                        Ver clientes
                      </NavLink>
                    </li>
                    <li className="md:mr-3">
                      <NavLink
                        to={"/nuevo-cliente"}
                        exact
                        activeClassName="text-white"
                        className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                      >
                        Nuevo Cliente
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <li className="md:mr-3">
                    <NavLink
                      to={"/mis-datos"}
                      exact
                      activeClassName="text-white"
                      className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                    >
                      Mis datos
                    </NavLink>
                  </li>
                )}
                <li className="md:mr-3">
                  <NavLink
                    to={'/'}
                    onClick={() => cerrarSesionFn()}
                    className="inline-block no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  >
                    Salir
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
       
      </div>
    </>
  );
};

export default Navbar;

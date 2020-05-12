import React, { useReducer } from "react";
import { uuid } from "uuidv4";

import clienteContext from "./clienteContext";
import clienteReducer from "./clienteReducer";
import {
  OBTENER_CLIENTES,
  AGREGAR_CLIENTE,
  CLIENTE_ACTUAL,
} from "../../types/";

const ClienteState = (props) => {
  const clientes = [
    {
      id: 1,
      nombre: "Nubedi",
      cuit: 307080,
    },
    {
      id: 2,
      nombre: "Empresa Dos",
      cuit: 206070,
    },
    {
      id: 3,
      nombre: "Empresa 3",
      cuit: 505050,
    },
  ];

  const initialState = {
    clientes: [],
    cliente: null,
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(clienteReducer, initialState);

  // Serie de confunciones para el CRUD

  // Obtener clientes
  const obtenerClientesFn = () => {
    dispatch({
      type: OBTENER_CLIENTES,
      payload: clientes,
    });
  };

  // Agregar nuevo cliente
  const agregarClienteFn = (cliente) => {
    cliente.id = uuid();
    dispatch({
      type: AGREGAR_CLIENTE,
      payload: cliente,
    });
  };

  // Seleccionar proyecto a editar
  const clienteActualFn = (id) => {
    dispatch({
      type: CLIENTE_ACTUAL,
      payload: id,
    });
  };

  return (
    <clienteContext.Provider
      value={{
        clientes: state.clientes,
        cliente: state.cliente,
        obtenerClientesFn,
        agregarClienteFn,
        clienteActualFn
      }}
    >
      {props.children}
    </clienteContext.Provider>
  );
};

export default ClienteState;

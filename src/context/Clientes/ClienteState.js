import React, { useReducer } from "react";
import { uuid } from "uuidv4";

import clienteContext from "./clienteContext";
import clienteReducer from "./clienteReducer";
import {
  INICIAR_SESION,
  CERRAR_SESION,
  OBTENER_CLIENTES,
  AGREGAR_CLIENTE,
  ELIMINAR_CLIENTE,
  CLIENTE_ACTUAL,
  OBTENER_DIRECCIONES,
  OBTENER_DATOSCONTACTO,
  AGREGAR_DIRECCION,
  EDITAR_DIRECCION,
  ELIMINAR_DIRECCION,
  AGREGAR_CONTACTO,
  EDITAR_CONTACTO,
  ELIMINAR_CONTACTO,
} from "../../types/";

const ClienteState = (props) => {
  const usuario = {
    nombre: null,
    rol: null,
  };

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

  const direcciones = [
    {
      id: 1,
      calle: "Rivadavia",
      altura: 10,
      codPostal: 100,
      localidad: "Ramos Mejía",
      idCliente: 1,
    },
    {
      id: 2,
      calle: "Alsina",
      altura: 20,
      codPostal: 200,
      localidad: "Caseros",
      idCliente: 1,
    },
    {
      id: 3,
      calle: "Belgrano",
      altura: 30,
      codPostal: 300,
      localidad: "Loma Hermosa",
      idCliente: 2,
    },
    {
      id: 4,
      calle: "Urquiza",
      altura: 40,
      codPostal: 400,
      localidad: "Mar de ajo",
      idCliente: 2,
    },
    {
      id: 5,
      calle: "Pedro Goyena",
      altura: 50,
      codPostal: 500,
      localidad: "Lomas del mirador",
      idCliente: 3,
    },
  ];

  const datosContacto = [
    {
      id: 1,
      nombre: "Nahuel",
      email: "nkrowicki@nubedi.com",
      tel: "1565599196",
      area: "Sistemas",
      idCliente: 1,
    },
    {
      id: 2,
      nombre: "Jorge",
      email: "jorge@nubedi.com",
      tel: "123123",
      area: "Finanzas",
      idCliente: 2,
    },
    {
      id: 3,
      nombre: "Pepe",
      email: "nkrowicki@nubedi.com",
      tel: "45454545",
      area: "Compras",
      idCliente: 1,
    },
    {
      id: 4,
      nombre: "Pablo",
      email: "jorge@nubedi.com",
      tel: "123123",
      area: "Finanzas",
      idCliente: 2,
    },
    {
      id: 5,
      nombre: "Marcelo",
      email: "nkrowicki@nubedi.com",
      tel: "45454545",
      area: "Administracion",
      idCliente: 3,
    },
  ];

  const initialState = {
    usuario: null,
    clientes: [],
    cliente: null,
    direcciones: [],
    datosContacto: [],
  };

  // Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(clienteReducer, initialState);

  const iniciarSesionFn = (usuario) => {
    dispatch({ type: INICIAR_SESION, payload: usuario });
  };

  const cerrarSesionFn = () => {
    dispatch({ type: CERRAR_SESION, payload: initialState});
  };

  // Serie de confunciones para el CRUD

  // Obtener clientes
  const obtenerClientesFn = () => {
    dispatch({
      type: OBTENER_CLIENTES,
      payload: clientes,
    });
  };

  const eliminarClienteFn = (id) => {
    dispatch({
      type: ELIMINAR_CLIENTE,
      payload: id,
    });
  };

  const obtenerDireccionesFn = () => {
    dispatch({
      type: OBTENER_DIRECCIONES,
      payload: direcciones,
    });
  };

  const obtenerDatosContactoFn = () => {
    dispatch({
      type: OBTENER_DATOSCONTACTO,
      payload: datosContacto,
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

  // Agregar o actualizar direccion
  const agregarDireccionFn = (direccion, editar) => {
    // Si esta editando
    if (editar) {
      dispatch({
        type: EDITAR_DIRECCION,
        payload: direccion,
      });
    } else {
      // Es nuevo
      direccion.id = uuid();
      dispatch({
        type: AGREGAR_DIRECCION,
        payload: direccion,
      });
    }
  };

  // Eliminar una direccion
  const eliminarDireccionFn = (id) => {
    dispatch({
      type: ELIMINAR_DIRECCION,
      payload: id,
    });
  };

  // Agregar o actualizar dato de contacto
  const agregarContactoFn = (contacto, editar) => {
    // Si esta editando
    if (editar) {
      dispatch({
        type: EDITAR_CONTACTO,
        payload: contacto,
      });
    } else {
      // Es nuevo
      contacto.id = uuid();
      dispatch({
        type: AGREGAR_CONTACTO,
        payload: contacto,
      });
    }
  };

  // Eliminar un dato de contacto
  const eliminarDatoContactoFn = (id) => {
    dispatch({
      type: ELIMINAR_CONTACTO,
      payload: id,
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
        usuario: state.usuario,
        clientes: state.clientes,
        cliente: state.cliente,
        direcciones: state.direcciones,
        datosContacto: state.datosContacto,
        iniciarSesionFn,
        cerrarSesionFn,
        obtenerClientesFn,
        agregarClienteFn,
        clienteActualFn,
        obtenerDireccionesFn,
        obtenerDatosContactoFn,
        agregarDireccionFn,
        agregarContactoFn,
        eliminarDatoContactoFn,
        eliminarDireccionFn,
        eliminarClienteFn,
      }}
    >
      {props.children}
    </clienteContext.Provider>
  );
};

export default ClienteState;

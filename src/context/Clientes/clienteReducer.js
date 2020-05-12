import {
  OBTENER_CLIENTES,
  AGREGAR_CLIENTE,
  CLIENTE_ACTUAL,
  OBTENER_DIRECCIONES,
  OBTENER_DATOSCONTACTO,
  AGREGAR_DIRECCION,
  EDITAR_DIRECCION,
  AGREGAR_CONTACTO,
  EDITAR_CONTACTO,
} from "../../types/";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_CLIENTES:
      return {
        ...state,
        clientes: action.payload,
        cliente: null,
        direcciones: [],
        datosContacto: [],
      };

    case OBTENER_DIRECCIONES:
      return {
        ...state,
        direcciones: action.payload.filter(
          (direccion) => direccion.idCliente == state.cliente.id
        ),
      };

    case OBTENER_DATOSCONTACTO:
      return {
        ...state,
        datosContacto: action.payload.filter(
          (datosContacto) => datosContacto.idCliente == state.cliente.id
        ),
      };

    case CLIENTE_ACTUAL:
      return {
        ...state,
        cliente: state.clientes.find((cliente) => {
          // Ver porque carga 2 veces..
          // console.log('action.payload, cliente ', action.payload,  cliente.id, cliente.id === action.payload);
          if (cliente.id == action.payload) return cliente;
        }),
      };

    case AGREGAR_CLIENTE:
      // console.log(action)
      // console.log([...state.clientes, action.payload])
      return {
        ...state,
        cliente: null,
        clientes: [...state.clientes, action.payload],
      };

    case AGREGAR_DIRECCION:
      const direccion = action.payload;
      direccion.idCliente = state.cliente.id;
      return {
        ...state,
        direcciones: [...state.direcciones, direccion],
      };
      
      case EDITAR_DIRECCION:
      const direccionAEditar = action.payload;
      const direccionActualizada = state.direcciones.map((direccion) =>
        direccion.id === direccionAEditar.id ? direccionAEditar : direccion
      );
      return {
        ...state,
        direcciones: direccionActualizada,
      };

    case AGREGAR_CONTACTO:
      const contacto = action.payload;
      contacto.idCliente = state.cliente.id;
      return {
        ...state,
        datosContacto: [...state.datosContacto, contacto],
      };

    case EDITAR_CONTACTO:
      const contactoAEditar = action.payload;
      const datosActualizados = state.datosContacto.map((dato) =>
        dato.id === contactoAEditar.id ? contactoAEditar : dato
      );
      return {
        ...state,
        datosContacto: datosActualizados,
      };

    default:
      return state;
  }
};

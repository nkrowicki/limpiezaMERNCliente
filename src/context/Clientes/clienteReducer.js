import {
  OBTENER_CLIENTES,
  AGREGAR_CLIENTE,
  CLIENTE_ACTUAL,
} from "../../types/";

export default (state, action) => {
  switch (action.type) {
    case OBTENER_CLIENTES:
      return {
        ...state,
        clientes: action.payload,
        cliente: null,
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
        clientes: [...state.clientes, action.payload],
        cliente: null,
      };

    default:
      return state;
  }
};

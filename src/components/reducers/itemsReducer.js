import * as actions from "../actions/actions";

const initialState = {
  items: [],
  error: "",
  loading: false,
  items: 0,
  addMessage: "",
  update: ""
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ORDERS:
      return {
        ...state,
        items: state.items + 1
      };
    case actions.GET_ALL_ITEMS:
      return {
        ...state,
        items: action.payload,
        error: "",
        addMessage: ""
      };
    case actions.LOADING_ITEMS:
      return {
        ...state,
        loading: action.payload,
        addMessage: "",
        error: ""
      };
    case actions.GET_USER_ITEMS:
      return {
        ...state,
        items: action.payload,
        update: ""
      };
    case actions.ADD_ITEMS:
      return {
        ...state,
        items: state.items.concat(action.payload),
        error: "",
        addMessage: "success"
      };
    case actions.GET_A_ITEMS:
      return {
        ...state,
        error: "",
        update: action.payload
      };
    case actions.UPDATE_ITEMS:
      return {
        ...state,
        items: items(),
        error: "",
        addMessage: "updated success"
      };
    default:
      return state;
  }
};

export default itemsReducer;

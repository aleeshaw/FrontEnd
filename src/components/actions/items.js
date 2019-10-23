import * as actions from "./actions";
import axois from "axois";
import axoisWithAuth from "../utils/axiosWithAuth";

const getItems = items => ({
  type: actions.GET_ALL_ITEMS,
  payload: items
});

const getUseritems = items => ({
  type: actions.GET_USER_ITEMS,
  payload: items
});

const addUserItems = items => ({
  type: actions.ADD_ITEMS,
  payload: items
});

const update = items => ({
  type: actions.UPDATE_ITEMS,
  payload: items
});

const loading = bool => ({
  type: actions.LOADING_ITEMS,
  payload: bool
});

const deleteItem = message => ({
  type: actions.DELETE,
  message
});

export const getItem = id => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axois.get(`/items/${id}`);
    dispatch(getItems(response.data));
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const getUserItem = id => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axoisWithAuth().get(`/items/user/${id}`);
    dispatch(getUseritems(response.data));
  } catch (err) {
    dispatch(error(err.message));
  } finally {
    dispatch(loading(false));
  }
};

export const addUserItem = items => async dispatch => {
  dispatch(loading(true));
  try {
    const response = await axoisWithAuth().post("/items", items);
    dispatch(addUserItems(response.data));
  } catch (err) {
    dispatch(error("try again!!!"));
  } finally {
    dispatch(loading(false));
  }

  export const updateItem = (id, items) => async dispatch => {
    dispatch(loading(true));
    try {
      const response = await axoisWithAuth().put(`/items/${id}`, items);
      dispatch(update(response.data));
      console.log(response.data);
    } catch (err) {
      dispatch(error(err.message));
    } finally {
      dispatch(loading(false));
    }
  };

  export const deleteItems = id => async dispatch => {
    dispatch(loading(true));
    try {
      const response = await axoisWithAuth().deleteItem(`/items/${id}`);
      console.log(response.data);
      dispatch(deleteItem(response.data));
    } catch (err) {
      dispatch(error(err.message));
    } finally {
      dispatch(loading(false));
    }
  };
};

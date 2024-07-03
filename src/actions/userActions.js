
import { ADD_USER, GET_USERS, UPDATE_USER, DELETE_USER } from "./types";

// Simulating a database with a simple array
let users = [
  { id: 1, name: "test", email: "tss" }
];

export const getUsers = () => (dispatch) => {
  dispatch({
    type: GET_USERS,
    payload: users,
  });
};

export const addUser = (user) => (dispatch) => {
  user.id = users.length ? users[users.length - 1].id + 1 : 1;
  users.push(user);
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};

export const updateUser = (user) => (dispatch) => {
  users = users.map((u) => (u.id === user.id ? user : u));
  dispatch({
    type: UPDATE_USER,
    payload: user,
  });
};

export const deleteUser = (userId) => (dispatch) => {
  users = users.filter((user) => user.id !== userId);
  dispatch({
    type: DELETE_USER,
    payload: userId,
  });
};

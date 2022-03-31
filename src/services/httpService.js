import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const http = {
  get: axios.get,
  post: axios.post,
  delete: axios.delete,
  put: axios.put,
};

export const getRequest = () => {
  return http.get("/contacts");
};

export const postRequest = (data) => {
  return http.post("/contacts", data);
};

export const deleteRequest = (id) => {
  return http.delete(`/contacts/${id}`);
};

export const putRequest = (id, data) => {
  return http.put(`/contacts/${id}`, data);
};

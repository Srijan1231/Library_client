import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";

export const postUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI, userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginUser = async (userData) => {
  try {
    const { data } = await axios.post(userAPI + "/login", userData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const postBook = async (bookData) => {
  try {
    const { data } = await axios.post(bookAPI, bookData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchBooks = async () => {
  try {
    const { data } = await axios.get(bookAPI);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const updateBook = async (bookData) => {
  try {
    const { data } = await axios.put(bookAPI, bookData);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const deleteBook = async (_id) => {
  try {
    const { data } = await axios.delete(bookAPI + "/" + _id);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

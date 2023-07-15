import axios from "axios";

const rootAPI = "http://localhost:8000";
const userAPI = rootAPI + "/api/v1/user";
const bookAPI = rootAPI + "/api/v1/book";
const burrowAPI = rootAPI + "/api/v1/burrow";

const getGetUserIDFromLocalStorage = () => {
  const str = localStorage.getItem("persist:userInfo");
  if (str) {
    const userInfo = JSON.parse(str);
    if (userInfo.user) {
      const user = JSON.parse(userInfo.user);
      return user?._id;
    }
  }
  return null;
};

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
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.post(bookAPI, bookData, option);

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
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.get(bookAPI, option);

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
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.put(bookAPI, bookData, option);

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
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.delete(bookAPI + "/" + _id, option);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
//Burrow
export const postBurrow = async (obj) => {
  try {
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.post(burrowAPI, obj, option);

    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const fetchBurrow = async () => {
  try {
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.get(burrowAPI, option);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const updateBurrowBook = async (burrowId) => {
  try {
    const option = {
      headers: {
        Authorization: getGetUserIDFromLocalStorage(),
      },
    };
    const { data } = await axios.put(burrowAPI, burrowId, option);
    console.log(burrowId);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

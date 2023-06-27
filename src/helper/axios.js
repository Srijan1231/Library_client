import axios from "axios";
export const postUser = async (userData) => {
  const rootAPI = "http://localhost:8000";
  const userAPI = rootAPI + "/api/v1/user";
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

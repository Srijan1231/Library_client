import axios from "axios";
export const postUser = async (data) => {
  const rootAPI = "http://localhost:8000";
  const userAPI = rootAPI + "/api/v1/user";
  try {
    const resp = await axios.post(userAPI, data);
    return {
      status: "success",
      message: resp.data.message,
    };
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

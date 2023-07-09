import { toast } from "react-toastify";
import {
  fetchBurrow,
  postBurrow,
  updateBurrowBook,
} from "../../helper/axios.js";
import { fetchBookAction } from "../books/BookAction.js";
import { setBurrow } from "./burrowSlice.js";

export const addBurrowAction = (obj) => async (dispatch) => {
  const { status, message } = await postBurrow(obj);
  toast[status](message);

  if (status === "success") {
    //fetch user burrow
    dispatch(fetchBookAction());
    dispatch(fetchBurrowAction());
  }
};

export const fetchBurrowAction = () => async (dispatch) => {
  const { status, message, burrows } = await fetchBurrow();
  console.log(status, message);

  dispatch(setBurrow(burrows));
};
export const updateBurrowAction = (burrowId) => async (dispatch) => {
  const dataPending = updateBurrowBook(burrowId);
  console.log(burrowId);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });
  const { status, message } = await dataPending;
  console.log(status, message);
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBurrowAction());
  }
};

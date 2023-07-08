import {
  deleteBook,
  fetchBooks,
  postBook,
  updateBook,
} from "../../helper/axios.js";
import { toast } from "react-toastify";
import { setBooks } from "./bookSlice.js";

export const postBookAction = (bookObj) => async (dispatch) => {
  const dataPending = postBook(bookObj);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });
  const { status, message } = await dataPending;
  console.log(status, message);
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
  }
};
export const fetchBookAction = () => async (dispatch) => {
  const { status, message, books } = await fetchBooks();
  console.log(status, message);

  if (status === "success") {
    dispatch(setBooks(books));
  }
};
export const updateBookAction = (bookObj) => async (dispatch) => {
  const dataPending = updateBook(bookObj);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });
  const { status, message } = await dataPending;
  console.log(status, message);
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
  }
};
export const deleteBookAction = (_id) => async (dispatch) => {
  const dataPending = deleteBook(_id);

  toast.promise(dataPending, {
    pending: "Please wait...",
  });
  const { status, message } = await dataPending;
  console.log(status, message);
  toast[status](message);

  if (status === "success") {
    dispatch(fetchBookAction());
    return true;
  }
};

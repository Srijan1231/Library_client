import { fetchBooks, postBook } from "../../helper/axios";
import { toast } from "react-toastify";
import { setBooks } from "./bookSlice";

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
  toast[status](message);

  if (status === "success") {
    dispatch(setBooks(books));
  }
};

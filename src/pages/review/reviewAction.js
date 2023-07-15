import { toast } from "react-toastify";
import { postReview } from "../../helper/axios";
import { fetchReview } from "../../helper/axios";

import { setReview } from "./reviewSlice";

export const postReviewAction = (obj) => async (dispatch) => {
  const { status, message } = await postReview(obj);
  toast[status](message);
  if (status === "success") {
    dispatch(fetchReviewAction());
  }
};
export const fetchReviewAction = () => async (dispatch) => {
  const { status, reviews } = await fetchReview();

  if (status === "success") {
    dispatch(setReview(reviews));
  }
};

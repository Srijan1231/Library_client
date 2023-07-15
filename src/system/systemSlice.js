import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalShow: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setModalShow: (state, { payload }) => {
      state.modalShow = payload;
    },
  },
});

const { reducer, actions } = modalSlice;

export const { setModalShow } = actions;
export default reducer;

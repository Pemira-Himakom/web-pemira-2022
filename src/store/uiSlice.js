import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: {},
  error: {},
  confirmation: false,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setSuccess: (state, action) => {
      state.success.status = true;
      state.success.message = action.payload;
    },
    setError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
    },
    resetUIState: (state) => {
      state.loading = false;
      state.success = {};
      state.error = {};
    },
    setConfirmation: (state) => {
      state.confirmation = true;
    },
    resetConfirmation: (state) => {
      state.confirmation = false;
    },
  },
});

export const { setLoading, setSuccess, setError, resetUIState } =
  uiSlice.actions;

export default uiSlice.reducer;
export const selectedUI = (state) => state.ui;

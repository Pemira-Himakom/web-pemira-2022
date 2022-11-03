import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  error: {},
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setSuccess: (state) => {
      state.success = true;
    },
    setError: (state, action) => {
      state.error.status = true;
      state.error.message = action.payload;
    },
    resetUIState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = false;
    },
  },
});

export const { setLoading, setSuccess, setError, resetUIState } =
  uiSlice.actions;

export default uiSlice.reducer;

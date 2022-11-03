import { createSlice } from "@reduxjs/toolkit";
import { setLoading, setSuccess, setError, resetUIState } from "./uiSlice";

const initialState = {
  admin: false,
  user: false,
  data: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAdminLogout: (state) => {
      state.admin = false;
    },
    setUserLogout: (state) => {
      state.user = false;
    },
  },
});

// login
export const login = (input, command) => {
  return async (dispatch) => {
    dispatch(setLoading());
    const url = getURL(command);

    const sendRequest = async () => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error("Bad request. Check server");
      }

      return response;
    };

    try {
      const result = await sendRequest();

      console.log(result);

      dispatch(setSuccess());
    } catch (error) {
      dispatch(setError());
    }
  };
};

function getURL(command, adminID) {
  if (command === "LOGIN_ADMIN") {
    return "api/admin/authenticate";
  } else if (command === "LOGIN_USER") {
    return "api/validate_token";
  } else if (command === "ASSIGN_TOKEN") {
    return `api/admin/${adminID}/assign`;
  } else if (command === "RECAP") {
    return `api/admin/${adminID}/assign`
  }
}

export const { setAdminLogout, setUserLogout, setUserLogin } =
  authSlice.actions;

export default authSlice.reducer;

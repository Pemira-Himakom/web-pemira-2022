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
    setUserLogin: (state) => {
      state.user = true;
    },
    setAdminLogin: (state) => {
      state.admin = true;
    },
  },
});

// login
export const login = (input, command) => {
  return async (dispatch) => {
    dispatch(setLoading());
    const url = getURL(command);

    const sendRequest = async (input) => {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Bad request. Check server");
      }

      return response.json();
    };

    try {
      const result = await sendRequest(input);

      if (result.status) {
        dispatch(setSuccess(result.message));

        localStorage.setItem("token", result.accessToken);

        setTimeout(() => {
          dispatch(setUserLogin());
          dispatch(resetUIState());
        }, 1000);
      } else {
        dispatch(setError(result.message));
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};

function getURL(command, adminID) {
  if (command === "LOGIN_ADMIN") {
    return "/api/admin/authenticate";
  } else if (command === "LOGIN_USER") {
    return "/api/validate_token";
  } else if (command === "ASSIGN_TOKEN") {
    return `/api/admin/${adminID}/assign`;
  } else if (command === "RECAP") {
    return `/api/admin/${adminID}/assign`;
  }
}

export const adminLogin = (form) => {
  return async (dispatch) => {
    dispatch(setLoading());
    console.log(process.env.REACT_APP_BASE_URL);
    const sendRequest = async (form) => {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/api/admin/authenticate`,
        {
          method: "POST",
          body: JSON.stringify(form),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Bad request. Check server");
      }

      return response.json();
    };

    try {
      const result = await sendRequest(form);
      console.log(result);

      if (result.status) {
        dispatch(setSuccess(result.message));

        localStorage.setItem("accessToken", result.accessToken);

        setTimeout(() => {
          dispatch(setAdminLogin());
          dispatch(resetUIState());
        }, 1000);
      } else {
        dispatch(setError(result.message));
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const { setAdminLogout, setUserLogout, setUserLogin, setAdminLogin } =
  authSlice.actions;

export default authSlice.reducer;
export const selectAdmin = (state) => state.auth.admin;

import { createSlice } from "@reduxjs/toolkit";
import { setLoading, setError, setSuccess, resetUIState } from "./uiSlice";

const VOTE_URL = "/api/vote";

const initialState = {
  selected: {
    name: null,
    number: null,
  },
  confirmation: false,
};

export const voteSlice = createSlice({
  name: "vote",
  initialState,
  reducers: {
    setSelect: (state, action) => {
      state.selected = action.payload;
    },
    setConfirmation: (state) => {
      state.confirmation = true;
    },
    resetVote: (state) => {
      state.selected = {
        name: null,
        number: null,
      };
      state.confirmation = false;
    },
  },
});

// vote fetch
export const postVote = (input) => {
  return async (dispatch) => {
    dispatch(setLoading());

    const token = localStorage.getItem("token");
    localStorage.removeItem("token");

    const sendRequest = async (input) => {
      return fetch(VOTE_URL, {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${token}`,
        },
        method: "POST",
        body: JSON.stringify({
          votedCandidate: input,
        }),
      });
    };

    try {
      const result = await sendRequest(input).then((data) => {
        return data.json();
      });

      if (result.status) {
        dispatch(setSuccess(result.message));
        // show meme?
        dispatch(resetVote());
      } else {
        dispatch(setError(result.message));
      }
    } catch (error) {
      dispatch(setError());
    }
  };
};

export const { setSelect, setConfirmation, resetVote } = voteSlice.actions;

export default voteSlice.reducer;

export const selectedVote = (state) => state.vote;
export const selectedName = (state) => state.vote?.selected.name;
export const selectedNo = (state) => state.vote?.selected.number;

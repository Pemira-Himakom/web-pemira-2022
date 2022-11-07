import { createContext, useState } from "react";

export const UIContext = createContext({
  authError: null,
  authSuccess: true,
  resetAuthState: () => {},
  setError: () => {},
  setSuccess: () => {},
});

const UIContextProvider = props => {
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(false);
  const authErrorHandler = (msg) => {
    setAuthError(msg);
  };
  const authSuccessHandler = () => {
    setAuthSuccess(true);
  };
  const resetAuthState = () => {
    setAuthError(false);
    setAuthSuccess(false);
  };

  return (
    <UIContext.Provider
      value={{
        authError,
        authSuccess,
        setError: authErrorHandler,
        setSuccess: authSuccessHandler,
        resetAuthState,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIContextProvider;

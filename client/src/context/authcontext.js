import { createContext, useState, useContext } from "react";
import { UIContext } from "./uicontext";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
});

const AuthContextProvider = props => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const uiCtx = useContext(UIContext);

  async function login(input) {
    const response = await fetch("http://localhost:3001/api/validate_token", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(input),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.status) {
        uiCtx.setSuccess();
        setInterval(() => {
          setIsLoggedIn(true);
        }, 1200);
      } else {
        if (data.message) {
          uiCtx.setError(data.message);
        } else {
          uiCtx.setError("Your token is wrong!");
        }

        setIsLoggedIn(false);
      }
    } else {
      const responseData = await response.json();
      console.log(responseData);

      setIsLoggedIn(false);
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

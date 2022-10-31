import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
});

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  async function login(input) {
    console.log(JSON.stringify(input));
    const response = await fetch("/api/validate_token", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(input),
    });

    if (response.ok) {
        console.log('SUCCESS')
      const data = await response.text();
      console.log(data);
    } else {
        console.log('ERROR')
      const responseData = await response.json();
      console.log(responseData);
    }

    setIsLoggedIn((val) => !val);
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

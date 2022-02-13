import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculateTokenValidityTime = (expirationTime) => {
	const currentTime = new Date().getTime();
	const adjExpirationTime = new Date(expirationTime).getTime();
	const remainingDuration = adjExpirationTime - currentTime;
	return remainingDuration;

}

export const AuthContextProvider = (props) => {
	const initialToken = localStorage.getItem('token'); //check if token is still there and use it instead of requesting
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = () => {
    setToken(null);
		// remove token from from local storage
		localStorage.removeItem('token');
  };

	const loginHandler = (token) => {
    setToken(token);
		// Store token in local storage
		localStorage.setItem('token', token);
		// const remainingDuration = calculateTokenValidityTime(expirationTime);
		// setTimeout(logoutHandler, remainingDuration); // execute logout when token expires
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
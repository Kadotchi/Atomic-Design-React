import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProviders = (props) => {
  const { children } = props;
  const contextName = "かどっち";
  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};

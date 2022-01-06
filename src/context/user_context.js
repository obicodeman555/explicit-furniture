import React, { useContext } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  return useContext(UserContext);
};

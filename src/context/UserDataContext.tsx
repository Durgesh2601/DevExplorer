import React, { createContext, useContext, useState } from "react";
import { UserData, UserDataContextType } from "../types";

const UserContext = createContext<UserDataContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<Record<string, UserData>>({});

  const contextValue: UserDataContextType = {
    userData,
    setUserData: (userId, data) => {
      setUserData((prevData) => ({
        ...prevData,
        [userId]: data,
      }));
    },
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

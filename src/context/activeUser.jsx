import { createContext, useState, useContext } from "react";

const ActiveUserContext = createContext();

export function useActiveUser() {
  const context = useContext(ActiveUserContext);
  if (!context) {
    throw new Error(`useActiveUser must be used within a ActiveUserProvider`);
  }
  return context;
}

export function ActiveUserProvider({ children }) {
  const [activeUser, setActiveUser] = useState(null);

  return (
    <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </ActiveUserContext.Provider>
  );
}

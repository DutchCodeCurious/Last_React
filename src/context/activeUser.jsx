import { createContext, useState, useContext, useEffect } from "react";

const ActiveUserContext = createContext();

export function useActiveUser() {
  const context = useContext(ActiveUserContext);
  if (!context) {
    throw new Error(`useActiveUser must be used within a ActiveUserProvider`);
  }
  return context;
}

export function ActiveUserProvider({ children }) {
  const [activeUser, setActiveUser] = useState(() => {
    const storedActiveUser = localStorage.getItem("activeUser");
    return storedActiveUser ? JSON.parse(storedActiveUser) : null;
  });

  useEffect(() => {
    if (activeUser) {
      localStorage.setItem("activeUser", JSON.stringify(activeUser));
    } else {
      localStorage.removeItem("activeUser");
    }
  }, [activeUser]);

  console.log(activeUser);

  return (
    <ActiveUserContext.Provider value={{ activeUser, setActiveUser }}>
      {children}
    </ActiveUserContext.Provider>
  );
}

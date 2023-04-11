import React, { useState } from "react";

const Database = React.createContext();

const Context = ({ children }) => {
  const [activeTab, setActiveTab] = useState("home");

  const updateActiveTab = (value) => {
    setActiveTab(value);
  };

  return (
    <Database.Provider value={{ activeTab, updateActiveTab }}>
      {children}
    </Database.Provider>
  );
};

export default Context;
export { Database };

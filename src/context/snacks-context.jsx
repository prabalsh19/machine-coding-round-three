/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { snacks as snackDb } from "../db/db";
const SnackContext = createContext();

export const SnackContextProvider = ({ children }) => {
  const [snacks, setSnacks] = useState(snackDb);
  const value = {
    snacks,
    setSnacks,
  };
  return (
    <SnackContext.Provider value={value}>{children}</SnackContext.Provider>
  );
};
export const useSnackContext = () => useContext(SnackContext);

import { createContext } from "react";
import { doctors } from "../assets/assets_frontend/assets";

export const appContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
  };
  return (
    <appContext.Provider value={value}> {props.children}</appContext.Provider>
  );
};

export default AppContextProvider;

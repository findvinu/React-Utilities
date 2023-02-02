import { createContext } from "react";
import UseControlledForm from "../custom-hooks/useControlledForm";

export const FormControlledContext = createContext();

const FormControlledContextProvider = ({ children }) => {
  const value = {
    ...UseControlledForm(),
  };
  return (
    <FormControlledContext.Provider value={value}>
      {children}
    </FormControlledContext.Provider>
  );
};

export default FormControlledContextProvider;

import { createContext } from "react";
import useCalcState from '../custom-hooks/useCalcState';


export const CalContext = createContext({});

const CalcComponentProvider = ({children}) => {

    const value = {
        ...useCalcState()
    }
    
    return <CalContext.Provider value={value}>{children}</CalContext.Provider>
}

export default CalcComponentProvider;
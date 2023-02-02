import { useContext } from "react";
import { CalContext } from "../context/CalcContextProvider";

const UseCalConsume = () =>{
    const {res, num, btnValues, btnClickHandler} = useContext(CalContext);

    return {
        res, num, btnValues, btnClickHandler
    }
}

export default UseCalConsume;